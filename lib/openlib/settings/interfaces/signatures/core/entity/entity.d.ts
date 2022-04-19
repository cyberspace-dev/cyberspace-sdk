import { IBShip } from "./signatures/nodes/ship/ship";
import { IBCargo } from "./signatures/nodes/cargo/cargo";
import { IBAsteroid } from "./signatures/nodes/asteroid/asteroid";
import { IBPlanet } from "./signatures/nodes/dockable/signatures/planet/planet";
import { IBStationBusiness } from "./signatures/nodes/dockable/signatures/station/signatures/business";
import { IBStationScientific } from "./signatures/nodes/dockable/signatures/station/signatures/scientific";
export interface IEntityModel {
    uuid: string;
    owner: string;
    type: number;
    view: number;
    parent?: {
        uuid: string;
        type: string;
    };
    body: IBShip | IBPlanet | IBAsteroid | IBCargo | IBStationBusiness | IBStationScientific;
    nodes?: Array<IEntityModel>;
}
