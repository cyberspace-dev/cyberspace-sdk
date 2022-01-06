import { Base } from '../../base/base';
export class Stream extends Base {
    socket;
    subject;
    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------
    constructor(socket, subject) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
    }
    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------
    static async connect(system = '') {
        const { socket, subject } = await Base.connect('STREAM', system.toUpperCase());
        return new Stream(socket, subject);
    }
}
