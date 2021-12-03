import { DealType } from '../../../../../../enums/signatures/core/deal/type';
import { CargoType } from '../../../../../../enums/signatures/core/cargo/type';
export interface IDeal {
    uuid: string;
    type: DealType;
    price: number;
    expected?: CargoType;
    target?: string;
    count?: number;
}
