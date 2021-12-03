import { IBaseStructure } from '../../base/base';
import { IModifier } from '../../../parts/modifier/modifier';
import { CargoType } from '../../../../../../../enums/signatures/core/cargo/type';
export interface ICargoStructure extends IBaseStructure {
    gen: number;
    type: CargoType;
    mods: Array<IModifier>;
}
