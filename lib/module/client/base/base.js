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
    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------
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
