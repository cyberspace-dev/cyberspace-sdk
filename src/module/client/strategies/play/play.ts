import {Subject}    from 'rxjs';

import {Ship}       from './nodes/signatures/ship/ship';
import {Planet}     from './nodes/signatures/planet/planet';
import {Base}       from '../../base/base';
import {Utils}      from '../../../utils/utils';
import {SignalType} from '../../../../openlib';

export class Play extends Base {

    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------

    constructor(
        public socket   : any,
        public subject  : Subject<any>,
        public token    : string
    ) {
        super(socket, subject);
    }

    // --- METHODS [PUBLIC ASYNC] --------------------------------------------------------------------------------------

    public async get(uuid: string): Promise<Ship | Planet> {
        const {socket, subject, token} = this;

        const signal = {
            type: SignalType.EXPLORE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        } as any;

        const response: any = await Utils.promisify(socket, subject, signal);
        if (response.type === SignalType.EXPLORE_SUCCESS) {
            switch(response.payload.type) {
                case 'Ship':
                    return new Ship(socket, subject, uuid, token);
                case 'Planet':
                    return new Planet(socket, subject, uuid, token);
            }

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