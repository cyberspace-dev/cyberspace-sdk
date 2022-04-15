import { Subject } from 'rxjs';
import { Base } from '../../../base/base';
export declare class Stock extends Base {
    socket: any;
    subject: Subject<any>;
    secure: string;
    constructor(socket: any, subject: Subject<any>, secure: string);
    bids(): Promise<{
        records: Array<any>;
    }>;
    charge(coins: number): Promise<{
        url: string;
    }>;
    balance(): Promise<{
        balance: number;
    }>;
    history(count: number, offset?: number): Promise<{
        records: Array<any>;
    }>;
    withdraw(coins: number): Promise<any>;
    info(): Promise<any>;
    exchange(uuid: string, coins: number): Promise<{
        uuid: string;
    }>;
    cancel(uuid: string): Promise<any>;
    apply(uuid: string): Promise<any>;
    profit(): Promise<any>;
    static connect(token?: string): Promise<Stock>;
}
