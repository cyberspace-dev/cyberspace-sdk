import {Subject}    from 'rxjs';

import {Base}       from '../../../base/base';
import {IBid}       from '../../../../../openlib';
import {SignalType} from '../../../../../openlib';

export class Stock extends Base {

    // --- [CONSTRUCTOR] -------------------------------------------------------------------------------------------

    constructor(
        public socket   : any,
        public subject  : Subject<any>,
        public token    : string
    ) {
        super(socket, subject);
    }

    // --- METHODS [PUBLIC] ----------------------------------------------------------------------------------------

    @Base.request(SignalType.BIDS)
    public async bids(): Promise<{records: Array<IBid>}> {
        return {
            type: SignalType.BIDS,
            payload: {},
            emitter: [],
            catcher: [],
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.CHARGE)
    public async charge(coins: number): Promise<{url: string}> {
        const {token} = this;

        return {
            type: SignalType.CHARGE,
            payload: {coins},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.BALANCE)
    public async balance(): Promise<{balance: number}> {
        const {token} = this;

        return {
            type: SignalType.BALANCE,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.HISTORY)
    public async history(count: number, offset?: number): Promise<{records: Array<IBid>}> {
        const {token} = this;

        return {
            type: SignalType.HISTORY,
            payload: {count, offset},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.WITHDRAW_SUCCESS)
    public async withdraw(coins: number, address: string) {
        const {token} = this;

        return {
            type: SignalType.WITHDRAW,
            payload: {coins, address},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.DEPOSIT_INFO_SUCCESS)
    public async info(): Promise<any> {
        const {token} = this;

        return {
            type: SignalType.DEPOSIT_INFO,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.EXCHANGE_SUCCESS)
    public async exchange(quadrant: string, coins: number): Promise<{uuid: string}> {
        const {token} = this;

        return {
            type: SignalType.EXCHANGE,
            payload: {quadrant, coins},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.EXCHANGE_CANCELED)
    public async cancel(quadrant: string) {
        const {token} = this;

        return {
            type: SignalType.EXCHANGE_CANCEL,
            payload: {quadrant},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.APPLY_SUCCESS)
    public async apply(uuid: string) {
        const {token} = this;

        return {
            type: SignalType.APPLY,
            payload: {uuid},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.PROFIT)
    public async profit() {
        const {token} = this;

        return {
            type: SignalType.PROFIT,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    // --- METHODS [STATIC] ----------------------------------------------------------------------------------------

    public static async connect(token?: string): Promise<Stock> {
        const {socket, subject} = await Base.connect('SERVICE', 'STOCK');

        return new Stock(socket, subject, token);
    }

}