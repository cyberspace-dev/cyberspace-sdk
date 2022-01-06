import { io } from 'socket.io-client';
import { Subject } from 'rxjs';
import { Utils } from '../../..';
export class Base {
    socket;
    subject;
    // --- [CONSTRUCTOR] -------------------------------------------------------------------------------------------
    constructor(socket, subject) {
        this.socket = socket;
        this.subject = subject;
    }
    // --- METHODS [PUBLIC] --------------------------------------------------------------------------------------------
    dispose() {
        this.socket.destroy();
        this.subject.complete();
    }
    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------
    static request(expected) {
        return function (target, key, descriptor) {
            const original = descriptor.value;
            descriptor.value = async function (...args) {
                // --- CREATE CONTEXT ----------------------------------------------------------------------------------
                const context = this;
                // --- GENERATE SIGNAL AND SEND ------------------------------------------------------------------------
                const { socket, subject } = context;
                const request = await original.apply(this, args);
                const response = await Utils.promisify(socket, subject, request);
                // --- CHECK EXPECTED SIGNAL TYPE ----------------------------------------------------------------------
                const { type, payload } = response;
                if (type === expected)
                    return payload;
                // --- THROW AN ERROR ----------------------------------------------------------------------------------
                const { reason } = payload;
                throw new Error(reason || 'UNEXPECTED_ERROR');
            };
            return descriptor;
        };
    }
    static async connect(strategy, channel, token) {
        const { host, isAuthorized: rejectUnauthorized } = Utils;
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
                const signal = {
                    type: 'CHANGE_STRATEGY',
                    payload: { strategy, channel },
                    direction: 'IN',
                    emitter: [],
                    catcher: []
                };
                if (strategy === 'PLAY')
                    signal.secure = token;
                socket.send(signal);
            });
            socket.on('message', (signal) => {
                if (signal.type === 'CHANGE_STRATEGY')
                    return resolve({ socket, subject });
                subject.next(signal);
            });
            socket.on('reconnect_failed', () => reject(new Error('UNAVAILABLE')));
        });
    }
}
