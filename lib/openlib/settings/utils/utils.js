"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const type_1 = require("../enums/signal/type");
const direction_1 = require("../enums/signal/direction");
const pify = require('pify');
class Utils {
    // --- SECTION [COMMON] --------------------------------------------------------------------------------------------
    static uuidv4() {
        const uuid = 'xxxxxxxxyx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return uuid.toUpperCase();
    }
    static random(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    static diff(start, time) {
        return (new Date().getTime() - start) - time;
    }
    static promisify(socket, subject, signal) {
        return new Promise((resolve, reject) => {
            let timeout = null;
            const key = Utils.uuidv4();
            const subscription = subject.subscribe((signal) => {
                if (key !== signal.key)
                    return;
                subscription.unsubscribe();
                clearTimeout(timeout);
                resolve(signal);
            });
            signal.key = key;
            socket.send(signal);
            timeout = setTimeout(() => {
                subscription.unsubscribe();
                socket.connected ? reject(new Error(`'TIMEOUT [${signal.type} / ${signal.key}]`)) : reject(new Error('DISCONNECTED'));
            }, 30000);
        });
    }
    static convert(timestamp) {
        const int = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Europe/Berlin' });
        return int.format(timestamp);
    }
    static randomize(star, initial, cameraZ) {
        star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;
        const deg = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 1;
        star.x = Math.cos(deg) * distance;
        star.y = Math.sin(deg) * distance;
    }
    // -----------------------------------------------------------------------------------------------------------------
    static async jwt(jwt, payload, isPermanent, secret) {
        return jwt.sign(payload, secret || process.env.SECRET, isPermanent ? null : { expiresIn: "2 days" });
    }
    static async verify(jwt, token, secret) {
        const { env: { SECRET } } = process;
        const verify = pify(jwt.verify);
        return verify(token, secret || SECRET);
    }
    static async save(instance) {
        try {
            await instance.save();
        }
        catch (e) {
            console.error(e);
        }
    }
    // --- SECTION [ADDITIONAL] ----------------------------------------------------------------------------------------
    static validate(signal) {
        if (!signal ||
            !signal.emitter ||
            !signal.catcher ||
            !signal.type ||
            !signal.direction ||
            (!signal.payload && signal.direction === direction_1.SignalDirection.IN) ||
            !Array.isArray(signal.emitter) ||
            !Array.isArray(signal.catcher))
            return false;
        if (signal.type === type_1.SignalType.UPLOAD)
            return true;
        if (signal.direction === direction_1.SignalDirection.OUT)
            return true;
        const keys = Object.keys(signal.payload);
        if (keys.length > 20)
            return false;
        for (const key of keys) {
            if (key.length > 60)
                return false;
            if (key === 'token')
                continue;
            const field = signal.payload[key];
            if (typeof field === 'object')
                return false;
            if (typeof field === 'string' && field.length > 3000)
                return false;
        }
        return true;
    }
    static convertToSeconds(minutes) {
        return 60000 * minutes;
    }
}
exports.Utils = Utils;
