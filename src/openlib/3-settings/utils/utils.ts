import {ISignal} from '../interfaces/signal/signal';

export class Utils {

    // --- SECTION [COMMON] --------------------------------------------------------------------------------------------

    public static uuidv4(): string {
        const uuid = 'xxxxxxxxyx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

        return uuid.toUpperCase();
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

    public static async jwt(jwt: any, payload: any, isPermanent?: boolean, secret?: string): Promise<string> {
        return jwt.sign(payload, secret || process.env.SECRET, isPermanent ? null : { expiresIn: "2 days" });
    }

    public static async verify(jwt: any, token: string, secret?: string) {
        const {env: {SECRET}} = process;

        return jwt.verify(token, secret || SECRET);
    }

    public static async save(instance: any) {
        try {
            await instance.save();
        } catch (e) {
            console.error(e);
        }
    }

    // --- SECTION [ADDITIONAL] ----------------------------------------------------------------------------------------

    public static convertToSeconds(minutes: number): number {
        return 60000 * minutes;
    }

}