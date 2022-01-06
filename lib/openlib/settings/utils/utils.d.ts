import { ISignal } from '../interfaces/signal/signal';
export declare class Utils {
    static uuidv4(): string;
    static marker(isMaster: boolean): string;
    static random(min: number, max: number): number;
    static diff(start: number, time: number): number;
    static promisify(socket: any, subject: any, signal: any): Promise<ISignal>;
    static convert(timestamp: number): string;
    static randomize(star: any, initial: boolean, cameraZ: number): void;
    static jwt(jwt: any, payload: any, isPermanent?: boolean): Promise<string>;
    static verify(jwt: any, token: string): Promise<any>;
    static save(instance: any): Promise<void>;
    static validate(signal: ISignal): boolean;
}
