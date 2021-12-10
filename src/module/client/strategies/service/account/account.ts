import {Subject}    from 'rxjs';

import {Admin}      from '../admin/admin';
import {Play}       from '../../play/play';
import {Ship}       from '../../play/nodes/signatures/ship/ship';
import {Planet}     from '../../play/nodes/signatures/planet/planet';
import {Base}       from '../../../base/base';
import {Utils}      from '../../../../utils/utils';
import {IObject}    from '../../../../../openlib';
import {Quadrants}  from '../../../../../openlib';
import {IProfile}   from '../../../../../openlib';
import {SignalType} from '../../../../../openlib';

export class Account extends Base {

    // --- MEMBERS [PUBLIC] --------------------------------------------------------------------------------------------

    public token: string;

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
            type: SignalType.SIGNIN,
            payload: {email, password},
            emitter: [],
            catcher: [],
            direction: 'out'
        } as any;

        const {socket, subject} = this;
        const response: any = await Utils.promisify(socket, subject, signal);

        const {type, payload: {token, reason}} = response;
        if (type === SignalType.SIGNIN_SUCCESS) return this.token = token;

        if (reason === 'CUSTOMER_NOT_ACTIVATED') {
            console.log(`PLEASE VISIT YOUR MAILBOX [${email}] AND FIND AN ACTIVATION MAIL\n`);
        }

        throw new Error(reason);
    }

    public async getShip(uuid: string, system: string): Promise<Ship> {
        const {token} = this;
        const sector: any = await Play.connect(token, system);

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
        const {token} = this;
        const sector: any = await Play.connect(token, system);

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
            type: SignalType.SEARCH,
            payload: {uuidOrName},
            emitter: [],
            catcher: [],
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.RECEIVE_RANKINGS)
    public async rankings(count: number, offset: number): Promise<Array<IProfile>> {
        return {
            type: SignalType.RANKINGS,
            payload: {count, offset},
            emitter: [],
            catcher: [],
            direction: 'out'
        } as any;
    }

    @Base.request('STARMAP' as SignalType)
    public async starmap(quadrant: Quadrants): Promise<any> {
        return {
            type: 'STARMAP' as SignalType,
            payload: {quadrant},
            emitter: [],
            catcher: [],
            direction: 'out'
        } as any;
    }

    // --- SECURED -----------------------------------------------------------------------------------------------------

    @Base.request(SignalType.RECEIVE_OBJECTS)
    public async objects(count?: number, offset?: number): Promise<{objects: Array<IObject>, hasNext: boolean}> {
        const {token} = this;

        return {
            type: SignalType.OBJECTS,
            payload: {count, offset},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.UPDATE_PROFILE_SUCCESS)
    public async update(email: string, name: string, role: number, twitter: string, selected: number, password: string, newPassword?: string) {
        const {token} = this;

        return {
            type: SignalType.UPDATE,
            payload: {email, name, role, twitter, selected, password, newPassword},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.RECEIVE_PROFILE)
    public async profile(): Promise<IProfile> {
        const {token} = this;

        return {
            type: SignalType.PROFILE,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.ASSEMBLY_SUCCESS)
    public async assemble() {
        const {token} = this;

        return {
            type: SignalType.ASSEMBLY,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    // --- METHODS [PRIVATE OPEN] --------------------------------------------------------------------------------------

    @Base.request('DETAILS' as SignalType)
    private async details(uuid: string): Promise<any> {
        const {token} = this;

        return {
            direction: 'out',
            type: 'DETAILS' as SignalType,
            payload: {uuid},
            emitter: [],
            catcher: [],
            secure: token
        } as any;
    }

    @Base.request(SignalType.UPLOAD_SUCCESS)
    private async upload(base64: string) {
        const {token} = this;

        return {
            type: SignalType.UPLOAD,
            payload: {base64},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.ONLINE)
    private async online() {
        return {
            type: SignalType.ONLINE,
            payload: {},
            emitter: [],
            catcher: [],
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.BONUS_SUCCESS)
    private async bonus() {
        const {token} = this;

        return {
            type: SignalType.BONUS,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        } as any;
    }

    // --- METHODS [PRIVATE SECURED] -----------------------------------------------------------------------------------

    @Base.request(SignalType.SIGNUP_SUCCESS)
    private async signup(email: string, name: string, password: string, selected: number, token: string) {
        return {
            type: SignalType.SIGNUP,
            payload: {email, name, password, selected, token},
            emitter: [],
            catcher: [],
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.RESEND_SUCCESS)
    private async resend(email: string, password: string, token: string) {
        return {
            type: SignalType.RESEND,
            payload: {email, password, token},
            emitter: [],
            catcher: [],
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.ACTIVATION_SUCCESS)
    private async activate(email: string, code: string) {
        return {
            type: SignalType.ACTIVATE,
            payload: {email, code},
            emitter: [],
            catcher: [],
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.RECOVERY_TOKEN_SENT)
    private async recovery(email: string, token: string) {
        return {
            type: SignalType.RECOVERY,
            payload: {email, token},
            emitter: [],
            catcher: [],
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.UNLOCK_SUCCESS)
    private async unlock(email: string, password: string, code: string, token: string) {
        return {
            type: SignalType.UNLOCK,
            payload: {email, password, code, token},
            emitter: [],
            catcher: [],
            direction: 'out'
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