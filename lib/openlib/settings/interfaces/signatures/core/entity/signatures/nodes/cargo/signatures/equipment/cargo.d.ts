import { IBCargo } from "../../cargo";
export interface IBCargoEquipment extends IBCargo {
    modifiers: any;
    generation: number;
    ability?: number;
}
