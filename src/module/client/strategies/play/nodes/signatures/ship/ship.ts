import {NodeBase}           from '../../base/base';
import {Base}               from '../../../../../base/base';
import {Utils}              from '../../../../../../utils/utils';
import {SignalType}         from '../../../../../../../openlib';
import {SignalDirection}    from '../../../../../../../openlib';
import {IEntityModel}       from '../../../../../../../openlib';

export class Ship extends NodeBase {

    // --- SECTION [ANYWHERE] ------------------------------------------------------------------------------------------

    public async radar(): Promise<IEntityModel> {
        const {socket, subject, uuid, secure} = this;

        const signal = {
            direction: SignalDirection.OUT,
            type: SignalType.RADAR,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        } as any;

        const response: any = await Utils.promisify(socket, subject, signal);
        if (response.type === SignalType.RADAR_SUCCESS) {
            const {payload} = response;
            const [uuid, owner, type, view, x, y, a, nodes] = payload;

            return {
                uuid, owner, type, view, body: {vector: {x, y, a}},
                nodes: nodes.map((node: any) => Ship.transform(node))
            } as any;
        }

        throw new Error(response.payload.reason);
    }

    @Base.request(SignalType.SCAN_SUCCESS)
    public async scan(uuid: string): Promise<IEntityModel> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.SCAN,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.EQUIP_SUCCESS)
    public async equip(slot: string, uuid: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.EQUIP,
            payload: {slot, uuid},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.UNEQUIP_SUCCESS)
    public async unequip(slot: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.UNEQUIP,
            payload: {slot},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request('LEARN' as SignalType)
    public async learn(type: number) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'LEARN' as SignalType,
            payload: {type},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request('SKILL' as SignalType)
    public async skill(type: number, payload: any) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'SKILL' as SignalType,
            payload: {type, payload: JSON.stringify(payload)},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    // --- SECTION [IN SPACE] ------------------------------------------------------------------------------------------

    @Base.request(SignalType.LANDING_SUCCESS)
    public async landing(uuid: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.LANDING,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.MOVE_SUCCESS)
    public async move(x: number, y: number) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.MOVE,
            payload: {x, y},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.GRAB_SUCCESS)
    public async grab(uuid: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.GRAB,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.DROP_SUCCESS)
    public async drop(uuid: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.DROP,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.WARP_SUCCESS)
    public async warp(uuid: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.WARP,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.ATTACK_SUCCESS)
    public async attack(target: string, weapons: Array<number>): Promise<Array<{status: boolean, reason: string}>> {
        const {secure} = this;

        const signal = {
            direction: SignalDirection.OUT,
            type: SignalType.ATTACK,
            payload: {target},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;

        weapons.forEach((index: number) => signal.payload['WEAPON' + index] = true);

        return signal;
    }

    // --- SECTION [ON PLANET] -----------------------------------------------------------------------------------------

    @Base.request(SignalType.ESCAPE_SUCCESS)
    public async escape() {
        const {uuid, secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.ESCAPE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.FUEL_SUCCESS)
    public async fuel() {
        const {uuid, secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.FUEL,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.REPAIR_SUCCESS)
    public async repair() {
        const {uuid, secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.REPAIR,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.ACCEPT_SUCCESS)
    public async accept(uuid: string, count?: number) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.ACCEPT,
            payload: {uuid, count},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request('OVERVIEW' as SignalType)
    public async overview() {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'OVERVIEW' as SignalType,
            payload: {},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request('ANSWER' as SignalType)
    public async answer(selected: number) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'ANSWER' as SignalType,
            payload: {selected},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    // --- SECTION [ONLY ON YOUR OWN PLANET] ---------------------------------------------------------------------------

    @Base.request(SignalType.TRANSFER_SUCCESS)
    public async transfer(uuid: string, type: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.TRANSFER,
            payload: {uuid, type},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    // --- SECTION [IN SPECIFIC PLACE] ---------------------------------------------------------------------------------

    @Base.request(SignalType.APPLY_SUCCESS)
    public async apply(...payload: any[]): Promise<any> {
        const {uuid, secure} = this;

        const type = payload.shift();
        const inline = payload.join(',');

        return {
            direction: SignalDirection.OUT,
            type: SignalType.APPLY,
            payload: {type, payload: inline},
            emitter: [],
            catcher: [uuid],
            secure
        } as any;
    }

    // --- SECTION [CHEATS] --------------------------------------------------------------------------------------------

    @Base.request('CHEAT' as SignalType)
    public async cheat(code: string): Promise<any> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: 'CHEAT' as SignalType,
            payload: {code},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    // --- SECTION [PRIVATE STATIC] ------------------------------------------------------------------------------------

    private static transform(body: any) {
        const [uuid, owner, type, view, x, y, a] = body;

        return {
            uuid, owner, type, view,
            body: {vector:{x, y, a}},
            nodes: []
        } as any;
    }

}