import { NodeBase } from '../../base/base';
import { CargoType } from '../../../../../../../openlib';
export declare class Planet extends NodeBase {
    make(type: CargoType, level: number): Promise<string>;
    sell(uuid: string, price: number): Promise<string>;
    buy(expected: CargoType, price: number, count?: number): Promise<string>;
    close(uuid: string): Promise<any>;
}
