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
const openlib_1 = require("../../../../../openlib");
class Admin extends base_1.Base {
    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------
    constructor(socket, subject) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
    }
    // --- SECTION [METHODS] -------------------------------------------------------------------------------------------
    async get(id) {
        return {
            type: 'GET_BY_ID',
            payload: { id },
            emitter: [],
            catcher: [],
            direction: openlib_1.SignalDirection.OUT
        };
    }
    async last() {
        return {
            type: 'GET_LAST_ID',
            payload: {},
            emitter: [],
            catcher: [],
            direction: openlib_1.SignalDirection.OUT
        };
    }
    // --- METHODS [PRIVATE OPEN] --------------------------------------------------------------------------------------
    async inject(fund, start, finish, version, companies) {
        const { token } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: 'INJECT',
            payload: { fund, start, finish, version, companies },
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async action(type) {
        const { token } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: 'ACTION',
            payload: { type },
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async feed() {
        const { token } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: 'FEED',
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async withdrawl() {
        const { token } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: 'WITHDRAWL',
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async confirm(uuid, confirmation) {
        const { token } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: 'CONFIRM',
            payload: { uuid, confirmation },
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async leads() {
        const { token } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: 'LEADS',
            payload: {},
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async process(type) {
        const { token } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: 'PROCESS',
            payload: { type },
            emitter: [],
            catcher: [],
            secure: token
        };
    }
    async create(url) {
        const { token } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: 'CREATE',
            payload: { url },
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
    base_1.Base.request('GET_BY_ID'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "get", null);
__decorate([
    base_1.Base.request('GET_LAST_ID'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Admin.prototype, "last", null);
__decorate([
    base_1.Base.request('INJECT'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String, Array]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "inject", null);
__decorate([
    base_1.Base.request('ACTION'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "action", null);
__decorate([
    base_1.Base.request('FEED'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Admin.prototype, "feed", null);
__decorate([
    base_1.Base.request('WITHDRAWL'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Admin.prototype, "withdrawl", null);
__decorate([
    base_1.Base.request('CONFIRM'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "confirm", null);
__decorate([
    base_1.Base.request('LEADS'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Admin.prototype, "leads", null);
__decorate([
    base_1.Base.request('PROCESS'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "process", null);
__decorate([
    base_1.Base.request('CREATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Admin.prototype, "create", null);
exports.Admin = Admin;
