import {SignalType} from '../../openlib';

export class Utils {

    // --- MEMBERS [STATIC] --------------------------------------------------------------------------------------------

    public static host          : string = 'https://cyberspace.dev';
    public static isAuthorized  : boolean = true;
    public static disableCheck  : boolean = false;

    // --- METHODS [PUBLIC] --------------------------------------------------------------------------------------------

    public static uuidv4(): string {
        return 'xxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public static request(expected: SignalType) {
        return function (target: any, key: string | symbol, descriptor: PropertyDescriptor) {
            const original = descriptor.value;

            descriptor.value = async function( ... args: any[]) {
                // --- CREATE CONTEXT ----------------------------------------------------------------------------------
                const context = this;

                // --- GENERATE SIGNAL AND SEND ------------------------------------------------------------------------
                const {socket, subject} = context;

                const request: any = await original.apply(this, args);
                const response: any = await Utils.promisify(socket, subject, request);

                // --- CHECK EXPECTED SIGNAL TYPE ----------------------------------------------------------------------
                const {type, payload} = response;
                if (type === expected) return payload;

                // --- THROW AN ERROR ----------------------------------------------------------------------------------
                const {reason} = payload;
                throw new Error(reason || 'UNEXPECTED_ERROR');
            };

            return descriptor;
        };
    }

    public static promisify(socket: any, subject: any, signal: any) {
        return new Promise((resolve, reject) => {
            let timeout = null;

            const key = Utils.uuidv4();
            const subscription = subject.subscribe((signal: any) => {
                if (key !== signal.key) return;

                subscription.unsubscribe();
                if (timeout) clearTimeout(timeout);

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