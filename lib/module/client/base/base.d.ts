import { Subject } from 'rxjs';
export declare class Base {
    socket: any;
    subject: Subject<any>;
    protected constructor(socket: any, subject: Subject<any>);
    dispose(): void;
    static connect(strategy: string, channel: string, token?: string): Promise<any>;
}
