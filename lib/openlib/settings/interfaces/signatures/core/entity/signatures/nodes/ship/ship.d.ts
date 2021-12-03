import { IBillableStructure } from '../../base/billable';
import { ISlot } from '../../../parts/slot/slot';
export interface IShipStructure extends IBillableStructure {
    hull: ISlot;
    engine: ISlot;
    tank: ISlot;
    radar: ISlot;
    scanner: ISlot;
    droid: ISlot;
    gripper: ISlot;
    protector: ISlot;
    weapon1: ISlot;
    weapon2: ISlot;
    weapon3: ISlot;
    weapon4: ISlot;
    weapon5: ISlot;
    artifact1: ISlot;
    artifact2: ISlot;
    artifact3: ISlot;
    artifact4: ISlot;
    target: any;
    boost: number;
}
