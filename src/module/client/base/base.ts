import {io}                 from 'socket.io-client';
import {Subject}            from 'rxjs';

import {Utils}              from '../../..';
import {SignalType}         from '../../..';
import {SignalDirection}    from '../../../openlib';

export class Base {

    // --- [CONSTRUCTOR] -------------------------------------------------------------------------------------------

    protected constructor(
        public socket   : any,
        public subject  : Subject<any>
    ) {}

    // --- METHODS [PUBLIC] --------------------------------------------------------------------------------------------

    public dispose() {
        const {socket, subject} = this;

        socket.destroy();
        subject.unsubscribe();
    }

    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------

    public static request(expected: SignalType) {
        return function (target: any, key: string | symbol, descriptor: PropertyDescriptor) {
            const original = descriptor.value;

            descriptor.value = async function( ... args: any[]) {
                // --- CREATE CONTEXT ----------------------------------------------------------------------------------
                const context = this;

                // --- GENERATE SIGNAL AND SEND ------------------------------------------------------------------------
                const {socket, subject} = context;

                const request: any = await original.apply(this, args);
                const response: any = await Utils.promisify(socket, subject, request);

                // --- CHANGE CHANNEL AFTER WARP -----------------------------------------------------------------------
                if (
                    response.type === SignalType.WARP_SUCCESS ||
                    (response.type === SignalType.LANDING_SUCCESS && response.payload && response.payload.isStargate)
                ) {
                    const {secure, payload: {uuid: channel}} = request;

                    const signal: any = {
                        type: 'SWITCH_STRATEGY' as SignalType,
                        payload: {strategy: 'PLAY', channel},
                        direction: SignalDirection.IN,
                        emitter: [],
                        catcher: [],
                        secure
                    };

                    await Utils.promisify(socket, subject, signal);
                }
                // --- CHANGE CHANNEL AFTER WARP -----------------------------------------------------------------------

                // --- CHECK EXPECTED SIGNAL TYPE ----------------------------------------------------------------------
                const {type, payload} = response;
                if (type === expected) return payload;

                // --- THROW AN ERROR ----------------------------------------------------------------------------------
                const {reason} = payload;
                throw new Error(reason || 'UNEXPECTED_ERROR');
            };

            return descriptor;
        };
    }

    public static async connect(strategy: string, channel: string, token?: string): Promise<any> {
        const {host, isAuthorized: rejectUnauthorized} = Utils;

        const subject = new Subject();
        return new Promise((resolve, reject) => {
            const options = {
                path: '/socket.io/',
                reconnectionAttempts: 3,
                reconnectionDelay: 300,
                rejectUnauthorized
            };

            const socket = io(host, options);
            socket.on('connect', () => {
                const signal: any = {
                    type: SignalType.CHANGE_STRATEGY,
                    payload: {strategy, channel},
                    direction: SignalDirection.IN,
                    emitter: [],
                    catcher: []
                };

                if (strategy === 'PLAY') signal.secure = token;

                socket.send(signal);
            });

            socket.on('message', (signal: any) => {
                if (signal.type === SignalType.CHANGE_STRATEGY)
                    return resolve({socket, subject});

                subject.next(signal);
            });

            socket.on('reconnect_failed', () => reject(new Error('UNAVAILABLE')));
        });
    }

}