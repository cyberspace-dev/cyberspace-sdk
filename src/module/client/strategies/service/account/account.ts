import {Subject}            from 'rxjs';

import {Play}               from '../../play/play';
import {Ship}               from '../../play/nodes/signatures/ship/ship';
import {Base}               from '../../../base/base';
import {Utils}              from '../../../../utils/utils';
import {Config}             from '../../../../../openlib';
import {IEntityModel}       from '../../../../../openlib';
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
        public subject      : Subject<any>
    ) {
        super(socket, subject);

        Config.initialize();
    }

    // --- SECTION [API] -----------------------------------------------------------------------------------------------

    public async signin(email: string, password: string) {
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

    public async getShip(uuid: string): Promise<Ship> {
        const {secure} = this;

        const {point: {system}} = await this.location(uuid);
        const instance: any = await Play.connect(secure, system);

        try {
            const ship = await instance.get(uuid);
            if (ship instanceof Ship) return ship;

            throw new Error('UNEXPECTED RESULT');
        } catch (e) {
            instance.dispose();

            throw e;
        }
    }

    // --- SECTION [CONFIGURATION] -------------------------------------------------------------------------------------

    public async starmap() {
        const {constellations: constellations1} = await Config.load('FEDERATION' as Quadrants);
        const {constellations: constellations2} = await Config.load('DSI' as Quadrants);

        const constellations = constellations1.concat(constellations2);
        const quadrants = {FEDERATION: constellations1, DSI: constellations2};

        return {starmap: {constellations, quadrants}};
    }

    public async skills(type: number) {
        if (type === 61 || type === 68) {
            return {skills: []};
        } else {
            const {abilities: skills} = await Config.load(`3-abilities/${type}`);

            return {skills}
        }
    }

    public async slots(type: number) {
        const {slots} = await Config.load(`1-slots/${type}`);

        return {slots};
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

    // --- SECURED -----------------------------------------------------------------------------------------------------

    @Base.request(SignalType.RECEIVE_OBJECTS)
    public async objects(count?: number, offset?: number): Promise<{objects: Array<IEntityModel>, hasNext: boolean}> {
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

    @Base.request(SignalType.LOCATION)
    private async location(uuid: string): Promise<any> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.LOCATION,
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
        // -------------------------------------------------------------------------------------------------------------
        const {socket, subject} = await Base.connect('SERVICE', 'AUTH');

        return new Account(socket, subject);
    }

}