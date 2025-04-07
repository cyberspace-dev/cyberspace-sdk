import { Subject } from 'rxjs';
import { Ship } from '../../play/nodes/signatures/ship/ship';
import { Base } from '../../../base/base';
import { IEntityModel } from '../../../../../openlib';
import { IProfile } from '../../../../../openlib';
export declare class Account extends Base {
    socket: any;
    subject: Subject<any>;
    secure: string;
    constructor(socket: any, subject: Subject<any>);
    signin(email: string, password: string): Promise<any>;
    getShip(uuid: string): Promise<Ship>;
    starmap(): Promise<{
        starmap: {
            constellations: any;
            quadrants: {
                FEDERATION: any;
                DSI: any;
            };
        };
    }>;
    skills(type: number): Promise<{
        skills: any;
    }>;
    slots(type: number): Promise<{
        slots: any;
    }>;
    search(uuidOrName: string): Promise<IProfile>;
    rankings(count: number, offset: number): Promise<Array<IProfile>>;
    objects(count?: number, offset?: number): Promise<{
        objects: Array<IEntityModel>;
        hasNext: boolean;
    }>;
    update(email: string, name: string, role: number, twitter: string, selected: number, password: string, newPassword?: string): Promise<any>;
    profile(): Promise<IProfile>;
    assemble(): Promise<any>;
    private location;
    private upload;
    private online;
    private bonus;
    private signup;
    private resend;
    private activate;
    private recovery;
    private unlock;
    static connect(): Promise<Account>;
}
