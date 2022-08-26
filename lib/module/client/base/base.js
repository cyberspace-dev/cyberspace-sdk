"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const socket_io_client_1 = require("socket.io-client");
const rxjs_1 = require("rxjs");
const __1 = require("../../..");
const __2 = require("../../..");
const openlib_1 = require("../../../openlib");
class Base {
    socket;
    subject;
    // --- [CONSTRUCTOR] -------------------------------------------------------------------------------------------
    constructor(socket, subject) {
        this.socket = socket;
        this.subject = subject;
    }
    // --- METHODS [PUBLIC] --------------------------------------------------------------------------------------------
    dispose() {
        const { socket, subject } = this;
        socket.destroy();
        subject.unsubscribe();
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
                const response = await __1.Utils.promisify(socket, subject, request);
                // --- CHANGE CHANNEL AFTER WARP -----------------------------------------------------------------------
                if (response.type === __2.SignalType.WARP_SUCCESS) {
                    const { secure, payload: { uuid: channel } } = request;
                    const signal = {
                        type: 'SWITCH_STRATEGY',
                        payload: { strategy: 'PLAY', channel },
                        direction: openlib_1.SignalDirection.IN,
                        emitter: [],
                        catcher: [],
                        secure
                    };
                    await __1.Utils.promisify(socket, subject, signal);
                }
                // --- CHANGE CHANNEL AFTER WARP -----------------------------------------------------------------------
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
        const { host, isAuthorized: rejectUnauthorized } = __1.Utils;
        const subject = new rxjs_1.Subject();
        return new Promise((resolve, reject) => {
            const options = {
                path: '/socket.io/',
                reconnectionAttempts: 3,
                reconnectionDelay: 300,
                rejectUnauthorized
            };
            const socket = (0, socket_io_client_1.io)(host, options);
            socket.on('connect', () => {
                const signal = {
                    type: __2.SignalType.CHANGE_STRATEGY,
                    payload: { strategy, channel },
                    direction: openlib_1.SignalDirection.IN,
                    emitter: [],
                    catcher: []
                };
                if (strategy === 'PLAY')
                    signal.secure = token;
                socket.send(signal);
            });
            socket.on('message', (signal) => {
                if (signal.type === __2.SignalType.CHANGE_STRATEGY)
                    return resolve({ socket, subject });
                subject.next(signal);
            });
            socket.on('reconnect_failed', () => reject(new Error('UNAVAILABLE')));
        });
    }
}
exports.Base = Base;
