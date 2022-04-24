"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const admin_1 = require("../admin/admin");
const play_1 = require("../../play/play");
const ship_1 = require("../../play/nodes/signatures/ship/ship");
const planet_1 = require("../../play/nodes/signatures/planet/planet");
const base_1 = require("../../../base/base");
const utils_1 = require("../../../../utils/utils");
const openlib_1 = require("../../../../../openlib");
const openlib_2 = require("../../../../../openlib");
const openlib_3 = require("../../../../../openlib");
class Account extends base_1.Base {
    socket;
    subject;
    competition;
    // --- MEMBERS [PUBLIC] --------------------------------------------------------------------------------------------
    secure;
    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------
    constructor(socket, subject, competition) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
        this.competition = competition;
    }
    // --- SECTION [API] -----------------------------------------------------------------------------------------------
    async signin(email, password) {
        if (!utils_1.Utils.disableCheck) {
            const { competition: { start, finish } } = this;
            const now = Date.now();
            if (now < start)
                return console.log(`COMPETITION IS NOT STARTED YET, PLEASE TRY AT ${start}`);
            if (now > finish)
                return console.log(`COMPETITION IS ALREADY FINISHED ${finish}`);
        }
        const signal = {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.SIGNIN,
            payload: { email, password },
            emitter: [],
            catcher: []
        };
        const { socket, subject } = this;
        const response = await utils_1.Utils.promisify(socket, subject, signal);
        const { type, payload: { token, reason } } = response;
        if (type === openlib_2.SignalType.SIGNIN_SUCCESS)
            return this.secure = token;
        if (reason === 'CUSTOMER_NOT_ACTIVATED') {
            console.log(`PLEASE VISIT YOUR MAILBOX [${email}] AND FIND AN ACTIVATION MAIL\n`);
        }
        throw new Error(reason);
    }
    async getShip(uuid, system) {
        const { secure } = this;
        const sector = await play_1.Play.connect(secure, system);
        try {
            const ship = await sector.get(uuid);
            if (ship instanceof ship_1.Ship)
                return ship;
            throw new Error('UNEXPECTED RESULT');
        }
        catch (e) {
            sector.dispose();
            throw e;
        }
    }
    async getPlanet(uuid, system) {
        const { secure } = this;
        const sector = await play_1.Play.connect(secure, system);
        try {
            const planet = await sector.get(uuid);
            if (planet instanceof planet_1.Planet)
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
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.SEARCH,
            payload: { uuidOrName },
            emitter: [],
            catcher: []
        };
    }
    async rankings(count, offset) {
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.RANKINGS,
            payload: { count, offset },
            emitter: [],
            catcher: []
        };
    }
    async starmap(quadrant) {
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.STARMAP,
            payload: { quadrant },
            emitter: [],
            catcher: []
        };
    }
    async skills() {
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: 'SKILLS',
            payload: {},
            emitter: [],
            catcher: []
        };
    }
    // --- SECURED -----------------------------------------------------------------------------------------------------
    async objects(count, offset) {
        const { secure } = this;
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.OBJECTS,
            payload: { count, offset },
            emitter: [],
            catcher: [],
            secure
        };
    }
    async update(email, name, role, twitter, selected, password, newPassword) {
        const { secure } = this;
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.UPDATE,
            payload: { email, name, role, twitter, selected, password, newPassword },
            emitter: [],
            catcher: [],
            secure
        };
    }
    async profile() {
        const { secure } = this;
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.PROFILE,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        };
    }
    async assemble() {
        const { secure } = this;
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.ASSEMBLY,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        };
    }
    // --- METHODS [PRIVATE OPEN] --------------------------------------------------------------------------------------
    async details(uuid) {
        const { secure } = this;
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.DETAILS,
            payload: { uuid },
            emitter: [],
            catcher: [],
            secure
        };
    }
    async upload(base64) {
        const { secure } = this;
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.UPLOAD,
            payload: { base64 },
            emitter: [],
            catcher: [],
            secure
        };
    }
    async online() {
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.ONLINE,
            payload: {},
            emitter: [],
            catcher: []
        };
    }
    async bonus() {
        const { secure } = this;
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.BONUS,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        };
    }
    // --- METHODS [PRIVATE SECURED] -----------------------------------------------------------------------------------
    async signup(email, name, password, selected, token) {
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.SIGNUP,
            payload: { email, name, password, selected, token },
            emitter: [],
            catcher: []
        };
    }
    async resend(email, password, token) {
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.RESEND,
            payload: { email, password, token },
            emitter: [],
            catcher: []
        };
    }
    async activate(email, code) {
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.ACTIVATE,
            payload: { email, code },
            emitter: [],
            catcher: []
        };
    }
    async recovery(email, token) {
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.RECOVERY,
            payload: { email, token },
            emitter: [],
            catcher: []
        };
    }
    async unlock(email, password, code, token) {
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.UNLOCK,
            payload: { email, password, code, token },
            emitter: [],
            catcher: []
        };
    }
    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------
    static async connect() {
        // --- CHECK COMPETITION SIGNATURE -----------------------------------------------------------------------------
        let response = {};
        if (!utils_1.Utils.disableCheck) {
            try {
                const admin = await admin_1.Admin.connect();
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
        const { socket, subject } = await base_1.Base.connect('SERVICE', 'AUTH');
        const { competition } = response;
        return new Account(socket, subject, competition);
    }
}
__decorate([
    base_1.Base.request(openlib_2.SignalType.RECEIVE_SEARCH),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "search", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.RECEIVE_RANKINGS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], Account.prototype, "rankings", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.STARMAP),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "starmap", null);
__decorate([
    base_1.Base.request('SKILLS'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Account.prototype, "skills", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.RECEIVE_OBJECTS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], Account.prototype, "objects", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.UPDATE_PROFILE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, Number, String, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "update", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.RECEIVE_PROFILE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Account.prototype, "profile", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.ASSEMBLY_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Account.prototype, "assemble", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.DETAILS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "details", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.UPLOAD_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "upload", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.ONLINE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Account.prototype, "online", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.BONUS_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Account.prototype, "bonus", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.SIGNUP_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "signup", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.RESEND_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "resend", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.ACTIVATION_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "activate", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.RECOVERY_TOKEN_SENT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "recovery", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.UNLOCK_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "unlock", null);
exports.Account = Account;
