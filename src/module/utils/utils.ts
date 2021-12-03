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