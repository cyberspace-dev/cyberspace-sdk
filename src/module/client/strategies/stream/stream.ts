import {Subject}    from 'rxjs';

import {Base}       from '../../base/base';

export class Stream extends Base {

    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------

    constructor(
        public socket   : any,
        public subject  : Subject<any>
    ) {
        super(socket, subject);
    }

    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------

    public static async connect(system: string = ''): Promise<Stream> {
        const {socket, subject} = await Base.connect('STREAM', system.toUpperCase());

        return new Stream(socket, subject);
    }

}