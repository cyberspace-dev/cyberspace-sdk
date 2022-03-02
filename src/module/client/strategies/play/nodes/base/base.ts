import {Subject}            from 'rxjs';
import {Base}               from '../../../../base/base';
import {Utils}              from '../../../../../utils/utils';
import {SignalType}         from '../../../../../../openlib';
import {SignalDirection}    from '../../../../../../openlib';
import {IEntityModel}       from '../../../../../../openlib';

export class NodeBase extends Base {

    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------

    constructor(
        public socket   : any,
        public subject  : Subject<any>,
        public uuid     : string,
        public secure   : string
    ) {
        super(socket, subject);
    }

    // --- METHODS [PUBLIC ASYNC] --------------------------------------------------------------------------------------

    @Utils.request(SignalType.EXPLORE_SUCCESS)
    public async explore(): Promise<IEntityModel> {
        const {uuid, secure} = this;

        return {
            direction: SignalDirection.OUT,
            type: SignalType.EXPLORE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        } as any;
    }

}