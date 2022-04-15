import { NodeBase } from '../../base/base';
import { IEntityModel } from '../../../../../../../openlib';
export declare class Ship extends NodeBase {
    radar(): Promise<IEntityModel>;
    scan(uuid: string): Promise<IEntityModel>;
    equip(slot: string, uuid: string): Promise<any>;
    unequip(slot: string): Promise<any>;
    landing(uuid: string): Promise<any>;
    move(x: number, y: number): Promise<any>;
    grab(uuid: string): Promise<any>;
    drop(uuid: string): Promise<any>;
    warp(uuid: string): Promise<any>;
    attack(target: string, weapons: Array<number>): Promise<Array<{
        status: boolean;
        reason: string;
    }>>;
    escape(): Promise<any>;
    fuel(): Promise<any>;
    repair(): Promise<any>;
    accept(uuid: string, count?: number): Promise<any>;
    transfer(uuid: string, type: string): Promise<any>;
    apply(...payload: any[]): Promise<any>;
    cheat(code: string): Promise<any>;
    private static unzip;
    private static transform;
}
