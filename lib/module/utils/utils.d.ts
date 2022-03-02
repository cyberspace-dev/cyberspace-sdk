import { SignalType } from '../../openlib';
export declare class Utils {
    static host: string;
    static isAuthorized: boolean;
    static disableCheck: boolean;
    static uuidv4(): string;
    static request(expected: SignalType): (target: any, key: string | symbol, descriptor: PropertyDescriptor) => PropertyDescriptor;
    static promisify(socket: any, subject: any, signal: any): Promise<unknown>;
}
