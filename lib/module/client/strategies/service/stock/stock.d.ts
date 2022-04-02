import { Subject } from 'rxjs';
import { Base } from '../../../base/base';
import { IBid } from '../../../../../openlib';
export declare class Stock extends Base {
    socket: any;
    subject: Subject<any>;
    secure: string;
    constructor(socket: any, subject: Subject<any>, secure: string);
    bids(): Promise<{
        records: Array<IBid>;
    }>;
    charge(coins: number): Promise<{
        url: string;
    }>;
    balance(): Promise<{
        balance: number;
    }>;
    history(count: number, offset?: number): Promise<{
        records: Array<IBid>;
    }>;
    withdraw(coins: number, address: string): Promise<any>;
    info(): Promise<any>;
    exchange(uuid: string, coins: number): Promise<{
        uuid: string;
    }>;
    cancel(target: string): Promise<any>;
    apply(uuid: string): Promise<any>;
    profit(): Promise<any>;
    static connect(token?: string): Promise<Stock>;
}
