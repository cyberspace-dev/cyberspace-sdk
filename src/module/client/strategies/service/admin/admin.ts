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

    @Base.request(SignalType.GET_BY_ID)
    public async get(id: number): Promise<IProfile> {
        return {
            type: SignalType.GET_BY_ID,
            payload: {id},
            emitter: [],
            catcher: [],
            direction: SignalDirection.OUT
        } as any;
    }

    @Base.request(SignalType.GET_LAST_ID)
    public async last(): Promise<IProfile> {
        return {
            type: SignalType.GET_LAST_ID,
            payload: {},
            emitter: [],
            catcher: [],
            direction: SignalDirection.OUT
        } as any;
    }

    // --- METHODS [PRIVATE OPEN] --------------------------------------------------------------------------------------

    @Base.request(SignalType.INJECT)
    private async inject(fund: number, start: number, finish: number, version: string, companies: Array<any>) {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.INJECT,
            payload: {fund, start, finish, version, companies},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request(SignalType.ACTION)
    private async action(type: string) {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.ACTION,
            payload: {type},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request(SignalType.FEED)
    private async feed() {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.FEED,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request(SignalType.WITHDRAWL)
    private async withdrawl() {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.WITHDRAWL,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request(SignalType.CONFIRM)
    private async confirm(uuid: string, confirmation: string) {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.CONFIRM,
            payload: {uuid, confirmation},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request(SignalType.LEADS)
    private async leads() {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.LEADS,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request(SignalType.PROCESS)
    private async process(type: string) {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.PROCESS,
            payload: {type},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request(SignalType.CREATE)
    private async create(url: string) {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.CREATE,
            payload: {url},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request(SignalType.UPLOAD)
    private async upload(lead: string) {
        const {token} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.UPLOAD,
            payload: {lead},
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