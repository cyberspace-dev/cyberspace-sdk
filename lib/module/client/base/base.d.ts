import { Subject } from 'rxjs';
import { SignalType } from '../../..';
export declare class Base {
    socket: any;
    subject: Subject<any>;
    protected constructor(socket: any, subject: Subject<any>);
    dispose(): void;
    static request(expected: SignalType): (target: any, key: string | symbol, descriptor: PropertyDescriptor) => PropertyDescriptor;
    static connect(strategy: string, channel: string, token?: string): Promise<any>;
}
