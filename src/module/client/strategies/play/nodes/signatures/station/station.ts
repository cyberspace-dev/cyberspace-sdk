import {NodeBase}           from '../../base/base';
import {Base}               from '../../../../../base/base';
import {SignalType}         from '../../../../../../../openlib';
import {SignalDirection}    from '../../../../../../../openlib';

export class Station extends NodeBase {

    // --- METHODS [PUBLIC] ----------------------------------------------------------------------------------------

    @Base.request(SignalType.SKILL)
    public async skill(type: number, payload: any) {
        const {secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.SKILL,
            payload: {type, payload: JSON.stringify(payload)},
            emitter: [],
            catcher: [this.uuid],
            secure
        } as any;
    }

}