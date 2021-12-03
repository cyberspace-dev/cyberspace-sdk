import {Subject}            from 'rxjs';

import {Base}               from '../../../base/base';
import {IProfile}           from '../../../../../openlib';
import {SignalType}         from '../../../../../openlib';
import {SignalDirection}    from '../../../../../openlib';

export class Admin extends Base {

    // --- MEMBERS [PUBLIC] --------------------------------------------------------------------------------------------

    public token        : string;

    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------

    constructor(
        public socket   : any,
        public subject  : Subject<any>
    ) {
        super(socket, subject);
    }

    // --- SECTION [METHODS] -------------------------------------------------------------------------------------------

    @Base.request('GET_BY_ID' as SignalType)
    public async get(id: number): Promise<IProfile> {
        return {
            type: 'GET_BY_ID' as SignalType,
            payload: {id},
            emitter: [],
            catcher: [],
            direction: SignalDirection.OUT
        } as any;
    }

    @Base.request('GET_LAST_ID' as SignalType)
    public async last(): Promise<IProfile> {
        return {
            type: 'GET_LAST_ID' as SignalType,
            payload: {},
            emitter: [],
            catcher: [],
            direction: SignalDirection.OUT
        } as any;
    }

    // --- METHODS [PRIVATE OPEN] --------------------------------------------------------------------------------------

    @Base.request('INJECT' as SignalType)
    private async inject(fund: number, start: number, finish: number, version: string, companies: Array<any>) {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'INJECT' as SignalType,
            payload: {fund, start, finish, version, companies},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request('ACTION' as SignalType)
    private async action(type: string) {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'ACTION' as SignalType,
            payload: {type},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request('FEED' as SignalType)
    private async feed() {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'FEED' as SignalType,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request('WITHDRAWL' as SignalType)
    private async withdrawl() {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'WITHDRAWL' as SignalType,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request('CONFIRM' as SignalType)
    private async confirm(uuid: string, confirmation: string) {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'CONFIRM' as SignalType,
            payload: {uuid, confirmation},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request('LEADS' as SignalType)
    private async leads() {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'LEADS' as SignalType,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request('PROCESS' as SignalType)
    private async process(type: string) {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'PROCESS' as SignalType,
            payload: {type},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request('CREATE' as SignalType)
    private async create(url: string) {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'CREATE' as SignalType,
            payload: {url},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------

    public static async connect(): Promise<Admin> {
        const {socket, subject} = await Base.connect('SERVICE', 'ADMIN');

        return new Admin(socket, subject);
    }

}