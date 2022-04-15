import { SignalType } from '../../enums/signal/type';
import { SignalDirection } from '../../enums/signal/direction';
export interface ISignal {
    direction: SignalDirection;
    type: SignalType;
    payload: any;
    emitter: Array<string>;
    catcher: Array<string>;
    key: string;
    secure?: string;
}
