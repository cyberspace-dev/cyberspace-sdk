import { Subject } from 'rxjs';
import { Base } from '../../../../base/base';
import { IEntityModel } from '../../../../../../openlib';
export declare class NodeBase extends Base {
    socket: any;
    subject: Subject<any>;
    uuid: string;
    secure: string;
    constructor(socket: any, subject: Subject<any>, uuid: string, secure: string);
    explore(): Promise<IEntityModel>;
}
