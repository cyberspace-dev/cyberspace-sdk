var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NodeBase } from '../../base/base';
import { Base } from '../../../../../base/base';
import { CargoType } from '../../../../../../../openlib';
import { SignalType } from '../../../../../../../openlib';
export class Planet extends NodeBase {
    // --- METHODS [PUBLIC] ----------------------------------------------------------------------------------------
    async make(type, level) {
        const { uuid, token } = this;
        return {
            type: SignalType.MAKE,
            payload: { type, level },
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        };
    }
    async sell(uuid, price) {
        const { token } = this;
        return {
            type: SignalType.OPEN,
            payload: { type: 'SELL', uuid, price },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    async buy(expected, price, count) {
        const { token } = this;
        return {
            type: SignalType.OPEN,
            payload: { type: 'BUY', expected, price, count },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    async close(uuid) {
        const { token } = this;
        return {
            type: SignalType.CLOSE,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
}
__decorate([
    Base.request(SignalType.MAKE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Planet.prototype, "make", null);
__decorate([
    Base.request(SignalType.OPEN_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Planet.prototype, "sell", null);
__decorate([
    Base.request(SignalType.OPEN_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], Planet.prototype, "buy", null);
__decorate([
    Base.request(SignalType.CLOSE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Planet.prototype, "close", null);
