import {NodeBase}   from '../../base/base';
import {Base}       from '../../../../../base/base';
import {CargoType}  from '../../../../../../../openlib';
import {SignalType} from '../../../../../../../openlib';

export class Planet extends NodeBase {

    // --- METHODS [PUBLIC] ----------------------------------------------------------------------------------------

    @Base.request(SignalType.MAKE_SUCCESS)
    public async make(type: CargoType, level: number): Promise<string> {
        const {uuid, token} = this;

        return {
            type: SignalType.MAKE,
            payload: {type, level},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.OPEN_SUCCESS)
    public async sell(uuid: string, price: number): Promise<string> {
        const {token} = this;

        return {
            type: SignalType.OPEN,
            payload: {type: 'SELL', uuid, price},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.OPEN_SUCCESS)
    public async buy(expected: CargoType, price: number, count?: number): Promise<string> {
        const {token} = this;

        return {
            type: SignalType.OPEN,
            payload: {type: 'BUY', expected, price, count},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

    @Base.request(SignalType.CLOSE_SUCCESS)
    public async close(uuid: string) {
        const {token} = this;

        return {
            type: SignalType.CLOSE,
            payload: {uuid},
            emitter: [],
            catcher: [this.uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

}