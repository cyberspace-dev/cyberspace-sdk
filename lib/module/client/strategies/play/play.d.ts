import { Subject } from 'rxjs';
import { Ship } from './nodes/signatures/ship/ship';
import { Planet } from './nodes/signatures/planet/planet';
import { Base } from '../../base/base';
export declare class Play extends Base {
    socket: any;
    subject: Subject<any>;
    secure: string;
    constructor(socket: any, subject: Subject<any>, secure: string);
    get(uuid: string): Promise<Ship | Planet>;
    static connect(token: string, system?: string): Promise<Play>;
}
