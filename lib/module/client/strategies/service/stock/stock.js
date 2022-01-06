var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Base } from '../../../base/base';
import { SignalType } from '../../../../../openlib';
export class Stock extends Base {
    socket;
    subject;
    token;
    // --- [CONSTRUCTOR] -------------------------------------------------------------------------------------------
    constructor(socket, subject, token) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
        this.token = token;
    }
    // --- METHODS [PUBLIC] ----------------------------------------------------------------------------------------
    async bids() {
        return {
            type: SignalType.BIDS,
            payload: {},
            emitter: [],
            catcher: [],
            direction: 'out'
        };
    }
    async charge(coins) {
        const { token } = this;
        return {
            type: SignalType.CHARGE,
            payload: { coins },
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async balance() {
        const { token } = this;
        return {
            type: SignalType.BALANCE,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async history(count, offset) {
        const { token } = this;
        return {
            type: SignalType.HISTORY,
            payload: { count, offset },
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async withdraw(coins, address) {
        const { token } = this;
        return {
            type: SignalType.WITHDRAW,
            payload: { coins, address },
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async info() {
        const { token } = this;
        return {
            type: SignalType.DEPOSIT_INFO,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async exchange(target, coins) {
        const { token } = this;
        return {
            type: SignalType.EXCHANGE,
            payload: { target, coins },
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async cancel(target) {
        const { token } = this;
        return {
            type: SignalType.EXCHANGE_CANCEL,
            payload: { target },
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async apply(uuid) {
        const { token } = this;
        return {
            type: SignalType.APPLY,
            payload: { uuid },
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    async profit() {
        const { token } = this;
        return {
            type: SignalType.PROFIT,
            payload: {},
            emitter: [],
            catcher: [],
            secure: token,
            direction: 'out'
        };
    }
    // --- METHODS [STATIC] ----------------------------------------------------------------------------------------
    static async connect(token) {
        const { socket, subject } = await Base.connect('SERVICE', 'STOCK');
        return new Stock(socket, subject, token);
    }
}
__decorate([
    Base.request(SignalType.BIDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stock.prototype, "bids", null);
__decorate([
    Base.request(SignalType.CHARGE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "charge", null);
__decorate([
    Base.request(SignalType.BALANCE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stock.prototype, "balance", null);
__decorate([
    Base.request(SignalType.HISTORY),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "history", null);
__decorate([
    Base.request(SignalType.WITHDRAW_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "withdraw", null);
__decorate([
    Base.request(SignalType.DEPOSIT_INFO_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stock.prototype, "info", null);
__decorate([
    Base.request(SignalType.EXCHANGE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "exchange", null);
__decorate([
    Base.request(SignalType.EXCHANGE_CANCELED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "cancel", null);
__decorate([
    Base.request(SignalType.APPLY_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stock.prototype, "apply", null);
__decorate([
    Base.request(SignalType.PROFIT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stock.prototype, "profit", null);
