import {Subject}            from 'rxjs';

import {Base}               from '../../../base/base';
import {IBid}               from '../../../../../openlib';
import {SignalDirection}    from '../../../../../openlib';
import {SignalType}         from '../../../../../openlib';

export class Stock extends Base {

    // --- [CONSTRUCTOR] -------------------------------------------------------------------------------------------

    constructor(
        public socket   : any,
        public subject  : Subject<any>,
        public secure   : string
    ) {
        super(socket, subject);
    }

    // --- METHODS [PUBLIC] ----------------------------------------------------------------------------------------

    @Base.request(SignalType.BIDS)
    public async bids(): Promise<{records: Array<IBid>}> {
        return {
            direction: SignalDirection.OUT,
            type: SignalType.BIDS,
            payload: {},
            emitter: [],
            catcher: []
        } as any;
    }

    @Base.request(SignalType.CHARGE)
    public async charge(coins: number): Promise<{url: string}> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.CHARGE,
            payload: {coins},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.BALANCE)
    public async balance(): Promise<{balance: number}> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.BALANCE,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.HISTORY)
    public async history(count: number, offset?: number): Promise<{records: Array<IBid>}> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.HISTORY,
            payload: {count, offset},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.WITHDRAW_SUCCESS)
    public async withdraw(coins: number, address: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.WITHDRAW,
            payload: {coins, address},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.DEPOSIT_INFO_SUCCESS)
    public async info(): Promise<any> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.DEPOSIT_INFO,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.EXCHANGE_SUCCESS)
    public async exchange(uuid: string, coins: number): Promise<{uuid: string}> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.EXCHANGE,
            payload: {uuid, coins},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.EXCHANGE_CANCELED)
    public async cancel(target: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.EXCHANGE_CANCEL,
            payload: {target},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.APPLY_SUCCESS)
    public async apply(uuid: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.APPLY,
            payload: {uuid},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.PROFIT)
    public async profit() {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.PROFIT,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    // --- METHODS [STATIC] ----------------------------------------------------------------------------------------

    public static async connect(token?: string): Promise<Stock> {
        const {socket, subject} = await Base.connect('SERVICE', 'STOCK');

        return new Stock(socket, subject, token);
    }

}