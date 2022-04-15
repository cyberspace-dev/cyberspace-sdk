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
exports.Planet = void 0;
const base_1 = require("../../base/base");
const base_2 = require("../../../../../base/base");
const openlib_1 = require("../../../../../../../openlib");
const openlib_2 = require("../../../../../../../openlib");
const openlib_3 = require("../../../../../../../openlib");
class Planet extends base_1.NodeBase {
    // --- METHODS [PUBLIC] ----------------------------------------------------------------------------------------
    async make(type, level) {
        const { uuid, secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_3.SignalType.MAKE,
            payload: { type, level },
            emitter: [],
            catcher: [uuid],
            secure
        };
    }
    async sell(uuid, price) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_3.SignalType.OPEN,
            payload: { type: 'SELL', uuid, price },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async buy(expected, price, count) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_3.SignalType.OPEN,
            payload: { type: 'BUY', expected, price, count },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async close(uuid) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_3.SignalType.CLOSE,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
}
__decorate([
    base_2.Base.request(openlib_3.SignalType.MAKE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], Planet.prototype, "make", null);
__decorate([
    base_2.Base.request(openlib_3.SignalType.OPEN_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Planet.prototype, "sell", null);
__decorate([
    base_2.Base.request(openlib_3.SignalType.OPEN_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], Planet.prototype, "buy", null);
__decorate([
    base_2.Base.request(openlib_3.SignalType.CLOSE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Planet.prototype, "close", null);
exports.Planet = Planet;
