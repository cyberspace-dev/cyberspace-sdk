"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Play = void 0;
const ship_1 = require("./nodes/signatures/ship/ship");
const planet_1 = require("./nodes/signatures/planet/planet");
const base_1 = require("../../base/base");
const utils_1 = require("../../../utils/utils");
const openlib_1 = require("../../../../openlib");
class Play extends base_1.Base {
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
            type: openlib_1.SignalType.EXPLORE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        };
        const response = await utils_1.Utils.promisify(socket, subject, signal);
        if (response.type === openlib_1.SignalType.EXPLORE_SUCCESS) {
            switch (response.payload.type) {
                case 'Ship':
                    return new ship_1.Ship(socket, subject, uuid, token);
                case 'Planet':
                    return new planet_1.Planet(socket, subject, uuid, token);
            }
            response.payload.reason = 'UNEXPECTED_TYPE';
        }
        throw new Error(response.payload.reason);
    }
    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------
    static async connect(token, system = '') {
        const { socket, subject } = await base_1.Base.connect('PLAY', system.toUpperCase(), token);
        return new Play(socket, subject, token);
    }
}
exports.Play = Play;
