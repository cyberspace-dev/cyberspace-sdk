import {Subject}            from 'rxjs';

import {Ship}               from './nodes/signatures/ship/ship';
import {Planet}             from './nodes/signatures/planet/planet';
import {Station}            from './nodes/signatures/station/station';
import {Base}               from '../../base/base';
import {Utils}              from '../../../utils/utils';
import {SignalType}         from '../../../../openlib';
import {SignalDirection}    from '../../../../openlib';

export class Play extends Base {

    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------

    constructor(
        public socket   : any,
        public subject  : Subject<any>,
        public secure   : string
    ) {
        super(socket, subject);
    }

    // --- METHODS [PUBLIC ASYNC] --------------------------------------------------------------------------------------

    public async get(uuid: string): Promise<Ship | Station | Planet> {
        const {socket, subject, secure} = this;

        const signal = {
            direction: SignalDirection.OUT,
            type: SignalType.EXPLORE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        } as any;

        const response: any = await Utils.promisify(socket, subject, signal);
        if (response.type === SignalType.EXPLORE_SUCCESS) {
            const {payload: {type}} = response;

            if (`${type}`.startsWith('6')) return new Ship(socket, subject, uuid, secure);

            response.payload.reason = 'UNEXPECTED_TYPE';
        }

        throw new Error(response.payload.reason);
    }

    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------

    public static async connect(token: string, system: string = ''): Promise<Play> {
        const {socket, subject} = await Base.connect('PLAY', system.toUpperCase(), token);

        return new Play(socket, subject, token);
    }

}