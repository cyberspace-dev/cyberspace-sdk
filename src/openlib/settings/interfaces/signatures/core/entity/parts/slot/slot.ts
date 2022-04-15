import {T22Equipment} from '../../../../../../enums/object/object';

export interface ISlot {
    uuid    : string;
    type    : T22Equipment;

    max     : number;
    blocked : boolean;
}

export enum Slot {
    HULL = 'HULL',
    ENGINE = 'ENGINE',
    TANK = 'TANK',
    RADAR = 'RADAR',
    SCANNER = 'SCANNER',
    DROID = 'DROID',
    GRIPPER = 'GRIPPER',
    PROTECTOR = 'PROTECTOR',
    WEAPON1 = 'WEAPON1',
    WEAPON2 = 'WEAPON2',
    WEAPON3 = 'WEAPON3',
    WEAPON4 = 'WEAPON4',
    WEAPON5 = 'WEAPON5',
    ARTIFACT1 = 'ARTIFACT1',
    ARTIFACT2 = 'ARTIFACT2',
    ARTIFACT3 = 'ARTIFACT3',
    ARTIFACT4 = 'ARTIFACT4'
}