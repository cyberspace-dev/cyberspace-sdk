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
exports.Admin = void 0;
const base_1 = require("../../../base/base");
const utils_1 = require("../../../../utils/utils");
const openlib_1 = require("../../../../../openlib");
const openlib_2 = require("../../../../../openlib");
class Admin extends base_1.Base {
    socket;
    subject;
    // --- MEMBERS [PUBLIC] --------------------------------------------------------------------------------------------
    token;
    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------
    constructor(socket, subject) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
    }
    // --- SECTION [METHODS] -------------------------------------------------------------------------------------------
    async get(id) {
        return {
            type: openlib_1.SignalType.GET_BY_ID,
            payload: { id },
            emitter: [],
            catcher: [],
            direction: openlib_2.SignalDirection.OUT
        };
    }
    async last() {
        return {
            type: openlib_1.SignalType.GET_LAST_ID,
            payload: {},
            emitter: [],
            catcher: [],
            direction: openlib_2.SignalDirection.OUT
        };
    }
    // --- METHODS [PRIVATE OPEN] --------------------------------------------------------------------------------------
    async inject(fund, start, finish, version, companies) {
        const { token } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.INJECT,
            payload: { fund, start, finish, version, companies },
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async action(type) {
        const { token } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.ACTION,
            payload: { type },
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async feed() {
        const { token } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.FEED,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async withdrawl() {
        const { token } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.WITHDRAWL,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async confirm(uuid, confirmation) {
        const { token } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.CONFIRM,
            payload: { uuid, confirmation },
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async leads() {
        const { token } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.LEADS,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async process(type) {
        const { token } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.PROCESS,
            payload: { type },
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async create(url) {
        const { token } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.CREATE,
            payload: { url },
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async upload(lead) {
        const { token } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.UPLOAD,
            payload: { lead },
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------
    static async connect() {
        const { socket, subject } = await base_1.Base.connect('SERVICE', 'ADMIN');
        return new Admin(socket, subject);
    }
}
__decorate([
    utils_1.Utils.request(openlib_1.SignalType.GET_BY_ID),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "get", null);
__decorate([
    utils_1.Utils.request(openlib_1.SignalType.GET_LAST_ID),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Admin.prototype, "last", null);
__decorate([
    utils_1.Utils.request(openlib_1.SignalType.INJECT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String, Array]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "inject", null);
__decorate([
    utils_1.Utils.request(openlib_1.SignalType.ACTION),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "action", null);
__decorate([
    utils_1.Utils.request(openlib_1.SignalType.FEED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Admin.prototype, "feed", null);
__decorate([
    utils_1.Utils.request(openlib_1.SignalType.WITHDRAWL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Admin.prototype, "withdrawl", null);
__decorate([
    utils_1.Utils.request(openlib_1.SignalType.CONFIRM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "confirm", null);
__decorate([
    utils_1.Utils.request(openlib_1.SignalType.LEADS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Admin.prototype, "leads", null);
__decorate([
    utils_1.Utils.request(openlib_1.SignalType.PROCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "process", null);
__decorate([
    utils_1.Utils.request(openlib_1.SignalType.CREATE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "create", null);
__decorate([
    utils_1.Utils.request(openlib_1.SignalType.UPLOAD),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "upload", null);
exports.Admin = Admin;
