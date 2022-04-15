"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = void 0;
const base_1 = require("../../base/base");
class Stream extends base_1.Base {
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
        const { socket, subject } = await base_1.Base.connect('STREAM', system.toUpperCase());
        return new Stream(socket, subject);
    }
}
exports.Stream = Stream;
