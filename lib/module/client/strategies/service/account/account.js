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
const play_1 = require("../../play/play");
const ship_1 = require("../../play/nodes/signatures/ship/ship");
const base_1 = require("../../../base/base");
const utils_1 = require("../../../../utils/utils");
const openlib_1 = require("../../../../../openlib");
const openlib_2 = require("../../../../../openlib");
const openlib_3 = require("../../../../../openlib");
class Account extends base_1.Base {
    socket;
    subject;
    // --- MEMBERS [PUBLIC] --------------------------------------------------------------------------------------------
    secure;
    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------
    constructor(socket, subject) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
        openlib_1.Config.initialize();
    }
    // --- SECTION [API] -----------------------------------------------------------------------------------------------
    async signin(email, password) {
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
    async getShip(uuid) {
        const { secure } = this;
        const { point: { system } } = await this.location(uuid);
        const instance = await play_1.Play.connect(secure, system);
        try {
            const ship = await instance.get(uuid);
            if (ship instanceof ship_1.Ship)
                return ship;
            throw new Error('UNEXPECTED RESULT');
        }
        catch (e) {
            instance.dispose();
            throw e;
        }
    }
    // --- SECTION [CONFIGURATION] -------------------------------------------------------------------------------------
    async starmap() {
        const { constellations: constellations1 } = await openlib_1.Config.load('FEDERATION');
        const { constellations: constellations2 } = await openlib_1.Config.load('DSI');
        const constellations = constellations1.concat(constellations2);
        const quadrants = { FEDERATION: constellations1, DSI: constellations2 };
        return { starmap: { constellations, quadrants } };
    }
    async skills(type) {
        if (type === 61 || type === 68) {
            return { skills: [] };
        }
        else {
            const { abilities: skills } = await openlib_1.Config.load(`3-abilities/${type}`);
            return { skills };
        }
    }
    async slots(type) {
        const { slots } = await openlib_1.Config.load(`1-slots/${type}`);
        return { slots };
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
    async location(uuid) {
        const { secure } = this;
        return {
            direction: openlib_3.SignalDirection.OUT,
            type: openlib_2.SignalType.LOCATION,
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
        // -------------------------------------------------------------------------------------------------------------
        const { socket, subject } = await base_1.Base.connect('SERVICE', 'AUTH');
        return new Account(socket, subject);
    }
}
exports.Account = Account;
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
    base_1.Base.request(openlib_2.SignalType.LOCATION),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Account.prototype, "location", null);
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
