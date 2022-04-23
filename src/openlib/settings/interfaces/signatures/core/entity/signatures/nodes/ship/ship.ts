import {IBBillable} from '../../base/3-billable';
import {Slot}       from '../../../parts/slot/slot';
import {ISlot}      from '../../../parts/slot/slot';

export interface IBShip extends IBBillable {

    shield: number;

    grade: {
        level               : number;
        exp_current         : number;
        exp_required        : number;
        _v                  : number;
    }

    skills: {
        points: Array<any>,
        abilities: {
            [key: string]   : number;
            _v              : number;
        }
        _v                  : number;
    }

    slots: {
        [Slot.HULL]         : ISlot;
        [Slot.ENGINE]       : ISlot;
        [Slot.TANK]         : ISlot;
        [Slot.RADAR]        : ISlot;
        [Slot.SCANNER]      : ISlot;
        [Slot.DROID]        : ISlot;
        [Slot.GRIPPER]      : ISlot;
        [Slot.PROTECTOR]    : ISlot;
        [Slot.WEAPON1]      : ISlot;
        [Slot.WEAPON2]      : ISlot;
        [Slot.WEAPON3]      : ISlot;
        [Slot.WEAPON4]      : ISlot;
        [Slot.WEAPON5]      : ISlot;
        [Slot.ARTIFACT1]    : ISlot;
        [Slot.ARTIFACT2]    : ISlot;
        [Slot.ARTIFACT3]    : ISlot;
        [Slot.ARTIFACT4]    : ISlot;
        _v                  : number;
    }

    target?     : any;
    ensurance?  : string;

}