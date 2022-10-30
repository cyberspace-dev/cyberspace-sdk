"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Play = void 0;
const ship_1 = require("./nodes/signatures/ship/ship");
const planet_1 = require("./nodes/signatures/planet/planet");
const station_1 = require("./nodes/signatures/station/station");
const base_1 = require("../../base/base");
const utils_1 = require("../../../utils/utils");
const openlib_1 = require("../../../../openlib");
const openlib_2 = require("../../../../openlib");
class Play extends base_1.Base {
    socket;
    subject;
    secure;
    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------
    constructor(socket, subject, secure) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
        this.secure = secure;
    }
    // --- METHODS [PUBLIC ASYNC] --------------------------------------------------------------------------------------
    async get(uuid) {
        const { socket, subject, secure } = this;
        const signal = {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.EXPLORE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        };
        const response = await utils_1.Utils.promisify(socket, subject, signal);
        if (response.type === openlib_1.SignalType.EXPLORE_SUCCESS) {
            const { payload: { type } } = response;
            if (`${type}`.startsWith('6'))
                return new ship_1.Ship(socket, subject, uuid, secure);
            if (`${type}`.startsWith('5'))
                return new station_1.Station(socket, subject, uuid, secure);
            if (`${type}`.startsWith('4'))
                return new planet_1.Planet(socket, subject, uuid, secure);
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
