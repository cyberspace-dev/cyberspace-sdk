import { Ship } from './nodes/signatures/ship/ship';
import { Planet } from './nodes/signatures/planet/planet';
import { Base } from '../../base/base';
import { Utils } from '../../../utils/utils';
import { SignalType } from '../../../../openlib';
export class Play extends Base {
    socket;
    subject;
    token;
    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------
    constructor(socket, subject, token) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
        this.token = token;
    }
    // --- METHODS [PUBLIC ASYNC] --------------------------------------------------------------------------------------
    async get(uuid) {
        const { socket, subject, token } = this;
        const signal = {
            type: SignalType.EXPLORE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        };
        const response = await Utils.promisify(socket, subject, signal);
        if (response.type === SignalType.EXPLORE_SUCCESS) {
            switch (response.payload.type) {
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
    static async connect(token, system = '') {
        const { socket, subject } = await Base.connect('PLAY', system.toUpperCase(), token);
        return new Play(socket, subject, token);
    }
}
