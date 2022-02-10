import {ISignal} from '../interfaces/signal/signal';
import {SignalType} from '../enums/signal/type';
import {SignalDirection} from '../enums/signal/direction';

const pify = require('pify');

export class Utils {

    // --- SECTION [COMMON] --------------------------------------------------------------------------------------------

    public static uuidv4(): string {
        return 'xxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public static marker(isMaster: boolean): string {
        return isMaster ? 'MASTER' : 'WORKER';
    }

    public static random(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

    public static diff(start: number, time: number): number {
        return (new Date().getTime() - start) - time;
    }

    public static promisify(socket: any, subject: any, signal: any): Promise<ISignal> {
        return new Promise((resolve, reject) => {
            let timeout: any = null;

            const key = Utils.uuidv4();
            const subscription = subject.subscribe((signal: any) => {
                if (key !== signal.key) return;

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

    public static convert(timestamp: number) {
        const int = new Intl.DateTimeFormat('de-DE', {year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Europe/Berlin'});

        return int.format(timestamp);
    }

    public static randomize(star: any, initial: boolean, cameraZ: number) {
        star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;

        const deg = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 1;

        star.x = Math.cos(deg) * distance;
        star.y = Math.sin(deg) * distance;
    }

    // -----------------------------------------------------------------------------------------------------------------

    public static async jwt(jwt: any, payload: any, isPermanent?: boolean): Promise<string> {
        return jwt.sign(payload, process.env.SECRET, isPermanent ? null : { expiresIn: "2 days" });
    }

    public static async verify(jwt: any, token: string) {
        const {env: {SECRET}} = process;
        const verify = pify(jwt.verify);

        return verify(token, SECRET);
    }

    public static async save(instance: any) {
        try {
            await instance.save();
        } catch (e) {
            console.error(e);
        }
    }

    // --- SECTION [ADDITIONAL] ----------------------------------------------------------------------------------------

    public static validate(signal: ISignal): boolean {
        if (!signal ||
            !signal.emitter ||
            !signal.catcher ||
            !signal.type ||
            !signal.direction ||
            (!signal.payload && signal.direction === SignalDirection.IN) ||
            !Array.isArray(signal.emitter) ||
            !Array.isArray(signal.catcher)) return false;

        if (signal.type === SignalType.UPLOAD) return true;
        if (signal.direction === SignalDirection.OUT) return true;

        const keys = Object.keys(signal.payload);
        if (keys.length > 20) return false;

        for (const key of keys) {
            if (key.length > 60) return false;
            if (key === 'token') continue;

            const field = signal.payload[key];
            if (typeof field === 'object') return false;
            if (typeof field === 'string' && field.length > 3000) return false;
        }

        return true;
    }

}