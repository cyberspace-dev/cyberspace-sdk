import { NodeBase } from '../../base/base';
import { T22Equipment } from '../../../../../../../openlib';
export declare class Planet extends NodeBase {
    make(type: T22Equipment, level: number): Promise<string>;
    sell(uuid: string, price: number): Promise<string>;
    buy(expected: T22Equipment, price: number, count?: number): Promise<string>;
    close(uuid: string): Promise<any>;
}
