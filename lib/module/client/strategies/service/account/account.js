var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Admin } from '../admin/admin';
import { Play } from '../../play/play';
import { Ship } from '../../play/nodes/signatures/ship/ship';
import { Planet } from '../../play/nodes/signatures/planet/planet';
import { Base } from '../../../base/base';
import { Utils } from '../../../../utils/utils';
import { Quadrants } from '../../../../../openlib';
import { SignalType } from '../../../../../openlib';
export class Account extends Base {
    socket;
    subject;
    competition;
    // --- MEMBERS [PUBLIC] --------------------------------------------------------------------------------------------
    token;
    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------
    constructor(socket, subject, competition) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
        this.competition = competition;
    }
    // --- SECTION [API] -----------------------------------------------------------------------------------------------
    async signin(email, password) {
        if (!Utils.disableCheck) {
            const { competition: { start, finish } } = this;
            const now = Date.now();
            if (now < start)
                return console.log(`COMPETITION IS NOT STARTED YET, PLEASE TRY AT ${start}`);
            if (now > finish)
                return console.log(`COMPETITION IS ALREADY FINISHED ${finish}`);
        }
        const signal = {
            type: SignalType.SIGNIN,
            payload: { email, password },
            emitter: [],
            catcher: [],
            direction: 'out'
        };
        const { socket, subject } = this;
        const response = await Utils.promisify(socket, subject, signal);
        const { type, payload: { token, reason } } = response;
        if (type === SignalType.SIGNIN_SUCCESS)
            return this.token = token;
        if (reason === 'CUSTOMER_NOT_ACTIVATED') {
            console.log(`PLEASE VISIT YOUR MAILBOX [${email}] AND FIND AN ACTIVATION MAIL\n`);
        }
        throw new Error(reason);
    }
    async getShip(uuid, system) {
        const { token } = this;
        const sector = await Play.connect(token, system);
        try {
            const ship = await sector.get(uuid);
            if (ship instanceof Ship)
                return ship;
            throw new Error('UNEXPECTED RESULT');
        }
        catch (e) {
            sector.dispose();
            throw e;
        }
    }
    async getPlanet(uuid, system) {
        const { token } = this;
        const sector = await Play.connect(token, system);
        try {
            const planet = await sector.get(uuid);
            if (planet instanceof Planet)
                return planet;
            throw new Error('UNEXPECTED RESULT');
        }
        catch (e) {
            sector.dispose();
            throw e;
        }
    }
    // --- SECTION [METHODS] -------------------------------------------------------------------------------------------
    async search(uuidOrName) {
        return {
            type: SignalType.SEARCH,
            payload: { uuidOrName },
            emitter: [],
            catcher: [],
            direction: 'out'
        };
    }
    async rankings(count, offset) {
        return {
            type: SignalType.RANKINGS,
            payload: { count, offset },
            emitter: [],
            catcher: [],
            direction: 'out'
        };
    }
    async starmap(quadrant) {
        return {
            type: 'STARMAP',
            payload: { quadrant },
            emitter: [],
            catcher: [],
            direction: 'out'
        };
    }
    // --- SECURED -----------------------------------------------------------------------------------------------------
    async objects(count, offset) {
        const { token } = this;
        return {
            type: SignalType.OBJECTS,
            payload: { count, offset },
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async update(email, name, role, twitter, selected, password, newPassword) {
        const { token } = this;
        return {
            type: SignalType.UPDATE,
            payload: { email, name, role, twitter, selected, password, newPassword },
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async profile() {
        const { token } = this;
        return {
            type: SignalType.PROFILE,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async assemble() {
        const { token } = this;
        return {
            type: SignalType.ASSEMBLY,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    // --- METHODS [PRIVATE OPEN] --------------------------------------------------------------------------------------
    async details(uuid) {
        const { token } = this;
        return {
            direction: 'out',
            type: 'DETAILS',
            payload: { uuid },
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async upload(base64) {
        const { token } = this;
        return {
            type: SignalType.UPLOAD,
            payload: { base64 },
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async online() {
        return {
            type: SignalType.ONLINE,
            payload: {},
            emitter: [],
            catcher: [],
            direction: 'out'
        };
    }
    async bonus() {
        const { token } = this;
        return {
            type: SignalType.BONUS,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    // --- METHODS [PRIVATE SECURED] -----------------------------------------------------------------------------------
    async signup(email, name, password, selected, token) {
        return {
            type: SignalType.SIGNUP,
            payload: { email, name, password, selected, token },
            emitter: [],
            catcher: [],
            direction: 'out'
        };
    }
    async resend(email, password, token) {
        return {
            type: SignalType.RESEND,
            payload: { email, password, token },
            emitter: [],
            catcher: [],
            direction: 'out'
        };
    }
    async activate(email, code) {
        return {
            type: SignalType.ACTIVATE,
            payload: { email, code },
            emitter: [],
            catcher: [],
            direction: 'out'
        };
    }
    async recovery(email, token) {
        return {
            type: SignalType.RECOVERY,
            payload: { email, token },
            emitter: [],
            catcher: [],
            direction: 'out'
        };
    }
    async unlock(email, password, code, token) {
        return {
            type: SignalType.UNLOCK,
            payload: { email, password, code, token },
            emitter: [],
            catcher: [],
            direction: 'out'
        };
    }
    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------
    static async connect() {
        // --- CHECK COMPETITION SIGNATURE -----------------------------------------------------------------------------
        let response = {};
        if (!Utils.disableCheck) {
            try {
                const admin = await Admin.connect();
                response = await admin.last();
                await admin.dispose();
            }
            catch (e) {
                console.log('SERVICE IS TEMPORARILY UNAVAILABLE');
                process.exit();
            }
            const { competition: { id, version, start, finish } } = response;
            console.log(`VERSION: [${version}]`);
            console.log(`COMPETITION: SPRINT ${id}`);
            console.log(`DEPLOY [${start}] CET TIME`);
            console.log(`FINISH [${finish}] CET TIME`);
            console.log('\n');
            const json = require('../../../../../../package.json');
            if (json.version !== version)
                throw new Error(`ERROR: PLEASE UPDATE @CYBERSPACE-DEV/SDK FROM ${json.version} TO ${version}`);
        }
        // -------------------------------------------------------------------------------------------------------------
        const { socket, subject } = await Base.connect('SERVICE', 'AUTH');
        const { competition } = response;
        return new Account(socket, subject, competition);
    }
}
__decorate([
    Base.request(SignalType.RECEIVE_SEARCH),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "search", null);
__decorate([
    Base.request(SignalType.RECEIVE_RANKINGS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], Account.prototype, "rankings", null);
__decorate([
    Base.request('STARMAP'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "starmap", null);
__decorate([
    Base.request(SignalType.RECEIVE_OBJECTS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], Account.prototype, "objects", null);
__decorate([
    Base.request(SignalType.UPDATE_PROFILE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, Number, String, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "update", null);
__decorate([
    Base.request(SignalType.RECEIVE_PROFILE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Account.prototype, "profile", null);
__decorate([
    Base.request(SignalType.ASSEMBLY_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Account.prototype, "assemble", null);
__decorate([
    Base.request('DETAILS'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "details", null);
__decorate([
    Base.request(SignalType.UPLOAD_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "upload", null);
__decorate([
    Base.request(SignalType.ONLINE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Account.prototype, "online", null);
__decorate([
    Base.request(SignalType.BONUS_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Account.prototype, "bonus", null);
__decorate([
    Base.request(SignalType.SIGNUP_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "signup", null);
__decorate([
    Base.request(SignalType.RESEND_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "resend", null);
__decorate([
    Base.request(SignalType.ACTIVATION_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "activate", null);
__decorate([
    Base.request(SignalType.RECOVERY_TOKEN_SENT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "recovery", null);
__decorate([
    Base.request(SignalType.UNLOCK_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "unlock", null);
