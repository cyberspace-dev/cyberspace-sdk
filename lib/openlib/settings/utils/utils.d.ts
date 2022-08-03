import { ISignal } from '../interfaces/signal/signal';
export declare class Utils {
    static uuidv4(): string;
    static random(min: number, max: number): number;
    static diff(start: number, time: number): number;
    static promisify(socket: any, subject: any, signal: any): Promise<ISignal>;
    static convert(timestamp: number): string;
    static randomize(star: any, initial: boolean, cameraZ: number): void;
    static jwt(jwt: any, payload: any, isPermanent?: boolean, secret?: string): Promise<string>;
    static verify(jwt: any, token: string, secret?: string): Promise<any>;
    static save(instance: any): Promise<void>;
    static validate(signal: ISignal): boolean;
    static convertToSeconds(minutes: number): number;
}
