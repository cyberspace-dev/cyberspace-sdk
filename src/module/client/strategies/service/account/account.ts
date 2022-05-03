import {Subject}            from 'rxjs';

import {Admin}              from '../admin/admin';
import {Play}               from '../../play/play';
import {Ship}               from '../../play/nodes/signatures/ship/ship';
import {Planet}             from '../../play/nodes/signatures/planet/planet';
import {Base}               from '../../../base/base';
import {Utils}              from '../../../../utils/utils';
import {IObject}            from '../../../../../openlib';
import {IProfile}           from '../../../../../openlib';
import {Quadrants}          from '../../../../../openlib';
import {SignalType}         from '../../../../../openlib';
import {SignalDirection}    from '../../../../../openlib';

export class Account extends Base {

    // --- MEMBERS [PUBLIC] --------------------------------------------------------------------------------------------

    public secure: string;

    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------

    constructor(
        public socket       : any,
        public subject      : Subject<any>,
        public competition  : any
    ) {
        super(socket, subject);
    }

    // --- SECTION [API] -----------------------------------------------------------------------------------------------

    public async signin(email: string, password: string) {
        if (!Utils.disableCheck) {
            const {competition: {start, finish}} = this;

            const now = Date.now();
            if (now < start) return console.log(`COMPETITION IS NOT STARTED YET, PLEASE TRY AT ${start}`);
            if (now > finish) return console.log(`COMPETITION IS ALREADY FINISHED ${finish}`);
        }

        const signal = {
            direction: SignalDirection.OUT,
            type: SignalType.SIGNIN,
            payload: {email, password},
            emitter: [],
            catcher: []
        } as any;

        const {socket, subject} = this;
        const response: any = await Utils.promisify(socket, subject, signal);

        const {type, payload: {token, reason}} = response;
        if (type === SignalType.SIGNIN_SUCCESS) return this.secure = token;

        if (reason === 'CUSTOMER_NOT_ACTIVATED') {
            console.log(`PLEASE VISIT YOUR MAILBOX [${email}] AND FIND AN ACTIVATION MAIL\n`);
        }

        throw new Error(reason);
    }

    public async getShip(uuid: string, system: string): Promise<Ship> {
        const {secure} = this;
        const sector: any = await Play.connect(secure, system);

        try {
            const ship = await sector.get(uuid);
            if (ship instanceof Ship) return ship;

            throw new Error('UNEXPECTED RESULT');
        } catch (e) {
            sector.dispose();

            throw e;
        }
    }

    public async getPlanet(uuid: string, system: string): Promise<Planet> {
        const {secure} = this;
        const sector: any = await Play.connect(secure, system);

        try {
            const planet = await sector.get(uuid);
            if (planet instanceof Planet) return planet;

            throw new Error('UNEXPECTED RESULT');
        } catch (e) {
            sector.dispose();

            throw e;
        }
    }

    // --- SECTION [METHODS] -------------------------------------------------------------------------------------------

    @Base.request(SignalType.RECEIVE_SEARCH)
    public async search(uuidOrName: string): Promise<IProfile> {
        return {
            direction: SignalDirection.OUT,
            type: SignalType.SEARCH,
            payload: {uuidOrName},
            emitter: [],
            catcher: []
        } as any;
    }

    @Base.request(SignalType.RECEIVE_RANKINGS)
    public async rankings(count: number, offset: number): Promise<Array<IProfile>> {
        return {
            direction: SignalDirection.OUT,
            type: SignalType.RANKINGS,
            payload: {count, offset},
            emitter: [],
            catcher: []
        } as any;
    }

    @Base.request(SignalType.STARMAP)
    public async starmap(quadrant: Quadrants): Promise<any> {
        return {
            direction: SignalDirection.OUT,
            type: SignalType.STARMAP,
            payload: {quadrant},
            emitter: [],
            catcher: []
        } as any;
    }

    @Base.request('SKILLS' as SignalType)
    public async skills(type: number): Promise<any> {
        return {
            direction: SignalDirection.OUT,
            type: 'SKILLS' as SignalType,
            payload: {type},
            emitter: [],
            catcher: []
        } as any;
    }

    // --- SECURED -----------------------------------------------------------------------------------------------------

    @Base.request(SignalType.RECEIVE_OBJECTS)
    public async objects(count?: number, offset?: number): Promise<{objects: Array<IObject>, hasNext: boolean}> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.OBJECTS,
            payload: {count, offset},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.UPDATE_PROFILE_SUCCESS)
    public async update(email: string, name: string, role: number, twitter: string, selected: number, password: string, newPassword?: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.UPDATE,
            payload: {email, name, role, twitter, selected, password, newPassword},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.RECEIVE_PROFILE)
    public async profile(): Promise<IProfile> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.PROFILE,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.ASSEMBLY_SUCCESS)
    public async assemble() {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.ASSEMBLY,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    // --- METHODS [PRIVATE OPEN] --------------------------------------------------------------------------------------

    @Base.request('LOCATION' as SignalType)
    private async location(uuid: string): Promise<any> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'LOCATION' as SignalType,
            payload: {uuid},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.UPLOAD_SUCCESS)
    private async upload(base64: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.UPLOAD,
            payload: {base64},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    @Base.request(SignalType.ONLINE)
    private async online() {
        return {
            direction: SignalDirection.OUT,
            type: SignalType.ONLINE,
            payload: {},
            emitter: [],
            catcher: []
        } as any;
    }

    @Base.request(SignalType.BONUS_SUCCESS)
    private async bonus() {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.BONUS,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        } as any;
    }

    // --- METHODS [PRIVATE SECURED] -----------------------------------------------------------------------------------

    @Base.request(SignalType.SIGNUP_SUCCESS)
    private async signup(email: string, name: string, password: string, selected: number, token: string) {
        return {
            direction: SignalDirection.OUT,
            type: SignalType.SIGNUP,
            payload: {email, name, password, selected, token},
            emitter: [],
            catcher: []
        } as any;
    }

    @Base.request(SignalType.RESEND_SUCCESS)
    private async resend(email: string, password: string, token: string) {
        return {
            direction: SignalDirection.OUT,
            type: SignalType.RESEND,
            payload: {email, password, token},
            emitter: [],
            catcher: []
        } as any;
    }

    @Base.request(SignalType.ACTIVATION_SUCCESS)
    private async activate(email: string, code: string) {
        return {
            direction: SignalDirection.OUT,
            type: SignalType.ACTIVATE,
            payload: {email, code},
            emitter: [],
            catcher: []
        } as any;
    }

    @Base.request(SignalType.RECOVERY_TOKEN_SENT)
    private async recovery(email: string, token: string) {
        return {
            direction: SignalDirection.OUT,
            type: SignalType.RECOVERY,
            payload: {email, token},
            emitter: [],
            catcher: []
        } as any;
    }

    @Base.request(SignalType.UNLOCK_SUCCESS)
    private async unlock(email: string, password: string, code: string, token: string) {
        return {
            direction: SignalDirection.OUT,
            type: SignalType.UNLOCK,
            payload: {email, password, code, token},
            emitter: [],
            catcher: []
        } as any;
    }

    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------

    public static async connect(): Promise<Account> {
        // --- CHECK COMPETITION SIGNATURE -----------------------------------------------------------------------------
        let response: any = {};
        if (!Utils.disableCheck) {
            try {
                const admin = await Admin.connect();
                response = await admin.last();
                await admin.dispose();
            } catch (e) {
                console.log('SERVICE IS TEMPORARILY UNAVAILABLE');
                process.exit();
            }

            const {competition: {id, version, start, finish}} = response;

            console.log(`VERSION: [${version}]`);
            console.log(`COMPETITION: SPRINT ${id}`);
            console.log(`DEPLOY [${start}] CET TIME`);
            console.log(`FINISH [${finish}] CET TIME`);
            console.log('\n');

            const json = require('../../../../../../package.json');
            if (json.version !== version) throw new Error(`ERROR: PLEASE UPDATE @CYBERSPACE-DEV/SDK FROM ${json.version} TO ${version}`);
        }

        // -------------------------------------------------------------------------------------------------------------
        const {socket, subject} = await Base.connect('SERVICE', 'AUTH');
        const {competition} = response;

        return new Account(socket, subject, competition);
    }

}