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
exports.Ship = void 0;
const base_1 = require("../../base/base");
const base_2 = require("../../../../../base/base");
const utils_1 = require("../../../../../../utils/utils");
const openlib_1 = require("../../../../../../../openlib");
const openlib_2 = require("../../../../../../../openlib");
class Ship extends base_1.NodeBase {
    // --- SECTION [ANYWHERE] ------------------------------------------------------------------------------------------
    async radar() {
        const { socket, subject, uuid, secure } = this;
        const signal = {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.RADAR,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        };
        const response = await utils_1.Utils.promisify(socket, subject, signal);
        if (response.type === openlib_1.SignalType.RADAR_SUCCESS) {
            const { payload } = response;
            const [uuid, owner, type, view, x, y, a, nodes] = payload;
            return {
                uuid, owner, type, view, body: { vector: { x, y, a } },
                nodes: nodes.map((node) => Ship.transform(node))
            };
        }
        throw new Error(response.payload.reason);
    }
    async scan(uuid) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.SCAN,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async equip(slot, uuid) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.EQUIP,
            payload: { slot, uuid },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async unequip(slot) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.UNEQUIP,
            payload: { slot },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async learn(type) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: 'LEARN',
            payload: { type },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async skill(type, payload) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: 'SKILL',
            payload: { type, payload: JSON.stringify(payload) },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    // --- SECTION [IN SPACE] ------------------------------------------------------------------------------------------
    async landing(uuid) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.LANDING,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async move(x, y) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.MOVE,
            payload: { x, y },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async grab(uuid) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.GRAB,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async drop(uuid) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.DROP,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async warp(uuid) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.WARP,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async attack(target, weapons) {
        const { secure } = this;
        const signal = {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.ATTACK,
            payload: { target },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
        weapons.forEach((index) => signal.payload['weapon' + index] = true);
        return signal;
    }
    // --- SECTION [ON PLANET] -----------------------------------------------------------------------------------------
    async escape() {
        const { uuid, secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.ESCAPE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        };
    }
    async fuel() {
        const { uuid, secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.FUEL,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        };
    }
    async repair() {
        const { uuid, secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.REPAIR,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        };
    }
    async accept(uuid, count) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.ACCEPT,
            payload: { uuid, count },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async overview() {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: 'OVERVIEW',
            payload: {},
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    async answer(selected) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: 'ANSWER',
            payload: { selected },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    // --- SECTION [ONLY ON YOUR OWN PLANET] ---------------------------------------------------------------------------
    async transfer(uuid, type) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.TRANSFER,
            payload: { uuid, type },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    // --- SECTION [IN SPECIFIC PLACE] ---------------------------------------------------------------------------------
    async apply(...payload) {
        const { uuid, secure } = this;
        const type = payload.shift();
        const inline = payload.join(',');
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.APPLY,
            payload: { type, payload: inline },
            emitter: [],
            catcher: [uuid],
            secure
        };
    }
    // --- SECTION [CHEATS] --------------------------------------------------------------------------------------------
    async cheat(code) {
        const { secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: 'CHEAT',
            payload: { code },
            emitter: [],
            catcher: [this.uuid],
            secure
        };
    }
    // --- SECTION [PRIVATE STATIC] ------------------------------------------------------------------------------------
    static transform(body) {
        const [uuid, owner, type, view, x, y, a] = body;
        return {
            uuid, owner, type, view,
            body: { vector: { x, y, a } },
            nodes: []
        };
    }
}
__decorate([
    base_2.Base.request(openlib_1.SignalType.SCAN_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "scan", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.EQUIP_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "equip", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.UNEQUIP_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "unequip", null);
__decorate([
    base_2.Base.request('LEARN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "learn", null);
__decorate([
    base_2.Base.request('SKILL'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "skill", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.LANDING_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "landing", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.MOVE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "move", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.GRAB_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "grab", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.DROP_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "drop", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.WARP_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "warp", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.ATTACK_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "attack", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.ESCAPE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Ship.prototype, "escape", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.FUEL_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Ship.prototype, "fuel", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.REPAIR_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Ship.prototype, "repair", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.ACCEPT_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "accept", null);
__decorate([
    base_2.Base.request('OVERVIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Ship.prototype, "overview", null);
__decorate([
    base_2.Base.request('ANSWER'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "answer", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.TRANSFER_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "transfer", null);
__decorate([
    base_2.Base.request(openlib_1.SignalType.APPLY_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "apply", null);
__decorate([
    base_2.Base.request('CHEAT'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "cheat", null);
exports.Ship = Ship;
