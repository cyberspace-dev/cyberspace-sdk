import { Subject } from 'rxjs';
import { Ship } from '../../play/nodes/signatures/ship/ship';
import { Planet } from '../../play/nodes/signatures/planet/planet';
import { Base } from '../../../base/base';
import { IObject } from '../../../../../openlib';
import { IProfile } from '../../../../../openlib';
import { Quadrants } from '../../../../../openlib';
export declare class Account extends Base {
    socket: any;
    subject: Subject<any>;
    competition: any;
    secure: string;
    constructor(socket: any, subject: Subject<any>, competition: any);
    signin(email: string, password: string): Promise<any>;
    getShip(uuid: string, system: string): Promise<Ship>;
    getPlanet(uuid: string, system: string): Promise<Planet>;
    search(uuidOrName: string): Promise<IProfile>;
    rankings(count: number, offset: number): Promise<Array<IProfile>>;
    starmap(quadrant: Quadrants): Promise<any>;
    skills(): Promise<any>;
    objects(count?: number, offset?: number): Promise<{
        objects: Array<IObject>;
        hasNext: boolean;
    }>;
    update(email: string, name: string, role: number, twitter: string, selected: number, password: string, newPassword?: string): Promise<any>;
    profile(): Promise<IProfile>;
    assemble(): Promise<any>;
    private details;
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
