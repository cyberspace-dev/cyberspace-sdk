import {NodeBase}       from '../../base/base';
import {Base}           from '../../../../../base/base';
import {Utils}          from '../../../../../../utils/utils';
import {SignalType}     from '../../../../../../../openlib';
import {IEntityModel}   from '../../../../../../../openlib';

export class Ship extends NodeBase {

    // --- SECTION [ANYWHERE] ------------------------------------------------------------------------------------------

    public async radar(): Promise<IEntityModel> {
        const {socket, subject, uuid, token} = this;

        const signal = {
            type: SignalType.RADAR,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        } as any;

        const response: any = await Utils.promisify(socket, subject, signal);
        if (response.type === SignalType.RADAR_SUCCESS) {
            const {payload} = response;
            const [zip, uuid, owner, x, y, a, view, nodes] = payload;

            return {
                type: this.unzip(zip),
                uuid, owner, body: {vector: {x, y, a}, view},
                nodes: nodes.map((node: any) => this.transform(node))
            } as any;
        }

        throw new Error(response.payload.reason);
    }

    @Base.request(SignalType.SCAN_SUCCESS)
    public async scan(uuid: string): Promise<IEntityModel> {
        const {token} = this;

        return {
            type: SignalType.SCAN,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.EQUIP_SUCCESS)
    public async equip(slot: string, uuid: string) {
        const {token} = this;

        return {
            type: SignalType.EQUIP,
            payload: {slot, uuid},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.UNEQUIP_SUCCESS)
    public async unequip(slot: string) {
        const {token} = this;

        return {
            type: SignalType.UNEQUIP,
            payload: {slot},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    // --- SECTION [IN SPACE] ------------------------------------------------------------------------------------------

    @Base.request(SignalType.LANDING_SUCCESS)
    public async landing(uuid: string) {
        const {token} = this;

        return {
            type: SignalType.LANDING,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.MOVE_SUCCESS)
    public async move(x: number, y: number) {
        const {token} = this;

        return {
            type: SignalType.MOVE,
            payload: {x, y},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.GRAB_SUCCESS)
    public async grab(uuid: string) {
        const {token} = this;

        return {
            type: SignalType.GRAB,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.DROP_SUCCESS)
    public async drop(uuid: string) {
        const {token} = this;

        return {
            type: SignalType.DROP,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.WARP_SUCCESS)
    public async warp(uuid: string) {
        const {token} = this;

        return {
            type: SignalType.WARP,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.ATTACK_SUCCESS)
    public async attack(target: string, weapons: Array<number>): Promise<Array<{status: boolean, reason: string}>> {
        const {token} = this;

        const signal = {
            type: SignalType.ATTACK,
            payload: {target},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;

        weapons.forEach((index: number) => signal.payload['weapon' + index] = true);

        return signal;
    }

    // --- SECTION [ON PLANET] -----------------------------------------------------------------------------------------

    @Base.request(SignalType.ESCAPE_SUCCESS)
    public async escape() {
        const {uuid, token} = this;

        return {
            type: SignalType.ESCAPE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.FUEL_SUCCESS)
    public async fuel() {
        const {uuid, token} = this;

        return {
            type: SignalType.FUEL,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.REPAIR_SUCCESS)
    public async repair() {
        const {uuid, token} = this;

        return {
            type: SignalType.REPAIR,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.ACCEPT_SUCCESS)
    public async accept(uuid: string, count?: number) {
        const {token} = this;

        return {
            type: SignalType.ACCEPT,
            payload: {uuid, count},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    // --- SECTION [ONLY ON YOUR OWN PLANET] ---------------------------------------------------------------------------

    @Base.request(SignalType.TRANSFER_SUCCESS)
    public async transfer(uuid: string, type: string) {
        const {token} = this;

        return {
            type: SignalType.TRANSFER,
            payload: {uuid, type},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    // --- SECTION [IN SPECIFIC PLACE] ---------------------------------------------------------------------------------

    @Base.request(SignalType.APPLY_SUCCESS)
    public async apply(...payload: any[]): Promise<any> {
        const {uuid, token} = this;

        const type = payload.shift();
        const inline = payload.join(',');

        return {
            type: SignalType.APPLY,
            payload: {type, payload: inline},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    // --- SECTION [PRIVATE] -------------------------------------------------------------------------------------------

    private unzip(zip: number) {
        switch (zip) {
            case 1:return 'System';
            case 2:return 'Planet';
            case 3:return 'ScientificStation';
            case 4:return 'BusinessStation';
            case 5:return 'Ship';
            case 6:return 'Asteroid';
            case 7:return 'Cargo';
        }
    }

    private transform(body: any) {
        const [zip, uuid, owner, x, y, a, view] = body;

        const item = {
            type: this.unzip(zip),
            uuid, owner,
            body: {vector:{x, y, a}, view},
            nodes: []
        } as any;

        if (item.type === 'Cargo') {
            item.owner = '';
            item.body.type = owner;
        }

        return item;
    }

}