import { Subject } from 'rxjs';
import { Base } from '../../../base/base';
import { IProfile } from '../../../../../openlib';
export declare class Admin extends Base {
    socket: any;
    subject: Subject<any>;
    token: string;
    constructor(socket: any, subject: Subject<any>);
    get(id: number): Promise<IProfile>;
    last(): Promise<IProfile>;
    private inject;
    private action;
    private feed;
    private withdrawl;
    private confirm;
    private leads;
    private process;
    private create;
    private upload;
    static connect(): Promise<Admin>;
}
