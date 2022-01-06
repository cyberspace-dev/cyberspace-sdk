import * as pify from 'pify';
import { SignalType } from '../enums/signal/type';
import { SignalDirection } from '../enums/signal/direction';
export class Utils {
    // --- SECTION [COMMON] --------------------------------------------------------------------------------------------
    static uuidv4() {
        return 'xxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    static marker(isMaster) {
        return isMaster ? 'MASTER' : 'WORKER';
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
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        let date = new Date(timestamp).toLocaleDateString('en-GB', options);
        while (date.indexOf('/') > -1)
            date = date.replace('/', '.');
        return date;
    }
    static randomize(star, initial, cameraZ) {
        star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;
        const deg = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 1;
        star.x = Math.cos(deg) * distance;
        star.y = Math.sin(deg) * distance;
    }
    // -----------------------------------------------------------------------------------------------------------------
    static async jwt(jwt, payload, isPermanent) {
        return jwt.sign(payload, process.env.SECRET, isPermanent ? null : { expiresIn: "2 days" });
    }
    static async verify(jwt, token) {
        const { env: { SECRET } } = process;
        const verify = pify(jwt.verify);
        return verify(token, SECRET);
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
            (!signal.payload && signal.direction === SignalDirection.IN) ||
            !Array.isArray(signal.emitter) ||
            !Array.isArray(signal.catcher))
            return false;
        if (signal.type === SignalType.UPLOAD)
            return true;
        if (signal.direction === SignalDirection.OUT)
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
}
