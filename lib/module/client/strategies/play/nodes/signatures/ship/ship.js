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
import { Utils } from '../../../../../../utils/utils';
import { SignalType } from '../../../../../../../openlib';
export class Ship extends NodeBase {
    // --- SECTION [ANYWHERE] ------------------------------------------------------------------------------------------
    async radar() {
        const { socket, subject, uuid, token } = this;
        const signal = {
            type: SignalType.RADAR,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        };
        const response = await Utils.promisify(socket, subject, signal);
        if (response.type === SignalType.RADAR_SUCCESS) {
            const { payload } = response;
            const [zip, uuid, owner, x, y, a, view, nodes] = payload;
            return {
                type: this.unzip(zip),
                uuid, owner, body: { vector: { x, y, a }, view },
                nodes: nodes.map((node) => this.transform(node))
            };
        }
        throw new Error(response.payload.reason);
    }
    async scan(uuid) {
        const { token } = this;
        return {
            type: SignalType.SCAN,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    async equip(slot, uuid) {
        const { token } = this;
        return {
            type: SignalType.EQUIP,
            payload: { slot, uuid },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    async unequip(slot) {
        const { token } = this;
        return {
            type: SignalType.UNEQUIP,
            payload: { slot },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    // --- SECTION [IN SPACE] ------------------------------------------------------------------------------------------
    async landing(uuid) {
        const { token } = this;
        return {
            type: SignalType.LANDING,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    async move(x, y) {
        const { token } = this;
        return {
            type: SignalType.MOVE,
            payload: { x, y },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    async grab(uuid) {
        const { token } = this;
        return {
            type: SignalType.GRAB,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    async drop(uuid) {
        const { token } = this;
        return {
            type: SignalType.DROP,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    async warp(uuid) {
        const { token } = this;
        return {
            type: SignalType.WARP,
            payload: { uuid },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    async attack(target, weapons) {
        const { token } = this;
        const signal = {
            type: SignalType.ATTACK,
            payload: { target },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
        weapons.forEach((index) => signal.payload['weapon' + index] = true);
        return signal;
    }
    // --- SECTION [ON PLANET] -----------------------------------------------------------------------------------------
    async escape() {
        const { uuid, token } = this;
        return {
            type: SignalType.ESCAPE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        };
    }
    async fuel() {
        const { uuid, token } = this;
        return {
            type: SignalType.FUEL,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        };
    }
    async repair() {
        const { uuid, token } = this;
        return {
            type: SignalType.REPAIR,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        };
    }
    async accept(uuid, count) {
        const { token } = this;
        return {
            type: SignalType.ACCEPT,
            payload: { uuid, count },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    // --- SECTION [ONLY ON YOUR OWN PLANET] ---------------------------------------------------------------------------
    async transfer(uuid, type) {
        const { token } = this;
        return {
            type: SignalType.TRANSFER,
            payload: { uuid, type },
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        };
    }
    // --- SECTION [IN SPECIFIC PLACE] ---------------------------------------------------------------------------------
    async apply(...payload) {
        const { uuid, token } = this;
        const type = payload.shift();
        const inline = payload.join(',');
        return {
            type: SignalType.APPLY,
            payload: { type, payload: inline },
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        };
    }
    // --- SECTION [PRIVATE] -------------------------------------------------------------------------------------------
    unzip(zip) {
        switch (zip) {
            case 1: return 'System';
            case 2: return 'Planet';
            case 3: return 'ScientificStation';
            case 4: return 'BusinessStation';
            case 5: return 'Ship';
            case 6: return 'Asteroid';
            case 7: return 'Cargo';
        }
    }
    transform(body) {
        const [zip, uuid, owner, x, y, a, view] = body;
        const item = {
            type: this.unzip(zip),
            uuid, owner,
            body: { vector: { x, y, a }, view },
            nodes: []
        };
        if (item.type === 'Cargo') {
            item.owner = '';
            item.body.type = owner;
        }
        return item;
    }
}
__decorate([
    Base.request(SignalType.SCAN_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "scan", null);
__decorate([
    Base.request(SignalType.EQUIP_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "equip", null);
__decorate([
    Base.request(SignalType.UNEQUIP_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "unequip", null);
__decorate([
    Base.request(SignalType.LANDING_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "landing", null);
__decorate([
    Base.request(SignalType.MOVE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "move", null);
__decorate([
    Base.request(SignalType.GRAB_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "grab", null);
__decorate([
    Base.request(SignalType.DROP_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "drop", null);
__decorate([
    Base.request(SignalType.WARP_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "warp", null);
__decorate([
    Base.request(SignalType.ATTACK_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "attack", null);
__decorate([
    Base.request(SignalType.ESCAPE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Ship.prototype, "escape", null);
__decorate([
    Base.request(SignalType.FUEL_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Ship.prototype, "fuel", null);
__decorate([
    Base.request(SignalType.REPAIR_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Ship.prototype, "repair", null);
__decorate([
    Base.request(SignalType.ACCEPT_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "accept", null);
__decorate([
    Base.request(SignalType.TRANSFER_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "transfer", null);
__decorate([
    Base.request(SignalType.APPLY_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Ship.prototype, "apply", null);
