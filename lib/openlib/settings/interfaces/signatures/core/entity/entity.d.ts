import { IShipStructure } from './signatures/nodes/ship/ship';
import { ICargoStructure } from './signatures/nodes/cargo/cargo';
import { IAsteroidStructure } from './signatures/nodes/asteroid/asteroid';
import { IPlanetStructure } from './signatures/nodes/dockable/signatures/planet/planet';
import { IBusinessStationStructure } from './signatures/nodes/dockable/signatures/station/signatures/business';
import { IScientificStationStructure } from './signatures/nodes/dockable/signatures/station/signatures/scientific';
export interface IEntityModel {
    uuid: string;
    type: number;
    owner: string;
    body: IShipStructure | IPlanetStructure | IAsteroidStructure | ICargoStructure | IBusinessStationStructure | IScientificStationStructure;
    nodes?: Array<IEntityModel>;
    parent?: {
        uuid: string;
        type: string;
    };
    system: string;
}
