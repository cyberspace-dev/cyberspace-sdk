import {Subject}        from 'rxjs';
import {Base}           from '../../../../base/base';
import {SignalType}     from '../../../../../../openlib';
import {IEntityModel}   from '../../../../../../openlib';

export class NodeBase extends Base {

    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------

    constructor(
        public socket   : any,
        public subject  : Subject<any>,
        public uuid     : string,
        public token    : string
    ) {
        super(socket, subject);
    }

    // --- METHODS [PUBLIC ASYNC] --------------------------------------------------------------------------------------

    @Base.request(SignalType.EXPLORE_SUCCESS)
    public async explore(): Promise<IEntityModel> {
        const {uuid, token} = this;

        return {
            type: SignalType.EXPLORE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        } as any;
    }

}