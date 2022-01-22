/// <reference types="node" />
import { EventEmitter } from 'events';
import { ISignal } from '../signal/signal';
export interface IStrategy {
    onSignal?: EventEmitter;
    initialize(): Promise<void>;
    send(signal: ISignal): Promise<ISignal>;
    dispose(): Promise<void>;
}
