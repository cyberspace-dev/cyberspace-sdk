"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    // --- MEMBERS [STATIC] --------------------------------------------------------------------------------------------
    static host = 'https://cyberspace.dev';
    static isAuthorized = true;
    static disableCheck = false;
    // --- METHODS [PUBLIC] --------------------------------------------------------------------------------------------
    static uuidv4() {
        return 'xxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    static promisify(socket, subject, signal) {
        return new Promise((resolve, reject) => {
            let timeout = null;
            const key = Utils.uuidv4();
            const subscription = subject.subscribe((signal) => {
                if (key !== signal.key)
                    return;
                subscription.unsubscribe();
                if (timeout)
                    clearTimeout(timeout);
                resolve(signal);
            });
            signal.key = key;
            socket.send(signal);
            timeout = setTimeout(() => {
                subscription.unsubscribe();
                socket.connected ? reject(new Error(`'TIMEOUT [${signal.type} / ${signal.key}]`)) : reject(new Error('DISCONNECTED'));
            }, 60000);
        });
    }
}
exports.Utils = Utils;
