import { Subject } from 'rxjs';
import { Base } from '../../base/base';
export declare class Stream extends Base {
    socket: any;
    subject: Subject<any>;
    constructor(socket: any, subject: Subject<any>);
    static connect(system?: string): Promise<Stream>;
}
