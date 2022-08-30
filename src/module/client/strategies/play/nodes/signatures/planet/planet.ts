import {NodeBase}           from '../../base/base';
import {Base}               from '../../../../../base/base';
import {T22Equipment}       from '../../../../../../../openlib';
import {SignalDirection}    from '../../../../../../../openlib';
import {SignalType}         from '../../../../../../../openlib';

export class Planet extends NodeBase {

    // --- METHODS [PUBLIC] ----------------------------------------------------------------------------------------

    @Base.request(SignalType.MAKE_SUCCESS)
    public async make(type: T22Equipment, level: number): Promise<{uuid: string}> {
        const {uuid, secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.MAKE,
            payload: {type, level},
            emitter: [],
            catcher: [uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.OPEN_SUCCESS)
    public async sell(uuid: string, price: number): Promise<{uuid: string}> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.OPEN,
            payload: {type: 'SELL', uuid, price},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.OPEN_SUCCESS)
    public async buy(expected: T22Equipment, price: number, count?: number): Promise<{uuid: string}> {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.OPEN,
            payload: {type: 'BUY', expected, price, count},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

    @Base.request(SignalType.CLOSE_SUCCESS)
    public async close(uuid: string) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.CLOSE,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

}