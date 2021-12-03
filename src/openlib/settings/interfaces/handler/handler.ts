import {SignalType} from '../../enums/signal/type';

export interface IHandler {
    type: SignalType,
    method: Function,
    secured?: boolean
}