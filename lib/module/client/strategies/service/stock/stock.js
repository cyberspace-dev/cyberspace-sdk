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
exports.Stock = void 0;
const base_1 = require("../../../base/base");
const openlib_1 = require("../../../../../openlib");
const openlib_2 = require("../../../../../openlib");
class Stock extends base_1.Base {
    socket;
    subject;
    secure;
    // --- [CONSTRUCTOR] -------------------------------------------------------------------------------------------
    constructor(socket, subject, secure) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
        this.secure = secure;
    }
    // --- METHODS [PUBLIC] ----------------------------------------------------------------------------------------
    async bids() {
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: openlib_2.SignalType.BIDS,
            payload: {},
            emitter: [],
            catcher: []
        };
    }
    async charge(coins) {
        const { secure } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: openlib_2.SignalType.CHARGE,
            payload: { coins },
            emitter: [],
            catcher: [],
            secure
        };
    }
    async balance() {
        const { secure } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: openlib_2.SignalType.BALANCE,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        };
    }
    async history(count, offset) {
        const { secure } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: openlib_2.SignalType.HISTORY,
            payload: { count, offset },
            emitter: [],
            catcher: [],
            secure
        };
    }
    async withdraw(coins) {
        const { secure } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: openlib_2.SignalType.WITHDRAW,
            payload: { coins },
            emitter: [],
            catcher: [],
            secure
        };
    }
    async info() {
        const { secure } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: openlib_2.SignalType.DEPOSIT_INFO,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        };
    }
    async exchange(uuid, coins) {
        const { secure } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: openlib_2.SignalType.EXCHANGE,
            payload: { uuid, coins },
            emitter: [],
            catcher: [],
            secure
        };
    }
    async cancel(uuid) {
        const { secure } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: openlib_2.SignalType.EXCHANGE_CANCEL,
            payload: { uuid },
            emitter: [],
            catcher: [],
            secure
        };
    }
    async apply(uuid) {
        const { secure } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: openlib_2.SignalType.APPLY,
            payload: { uuid },
            emitter: [],
            catcher: [],
            secure
        };
    }
    async profit() {
        const { secure } = this;
        return {
            direction: openlib_1.SignalDirection.OUT,
            type: openlib_2.SignalType.PROFIT,
            payload: {},
            emitter: [],
            catcher: [],
            secure
        };
    }
    // --- METHODS [STATIC] ----------------------------------------------------------------------------------------
    static async connect(token) {
        const { socket, subject } = await base_1.Base.connect('SERVICE', 'STOCK');
        return new Stock(socket, subject, token);
    }
}
exports.Stock = Stock;
__decorate([
    base_1.Base.request(openlib_2.SignalType.BIDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stock.prototype, "bids", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.CHARGE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "charge", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.BALANCE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stock.prototype, "balance", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.HISTORY),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "history", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.WITHDRAW_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "withdraw", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.DEPOSIT_INFO_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stock.prototype, "info", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.EXCHANGE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "exchange", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.EXCHANGE_CANCELED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "cancel", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.APPLY_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "apply", null);
__decorate([
    base_1.Base.request(openlib_2.SignalType.PROFIT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stock.prototype, "profit", null);
