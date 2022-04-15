import { T2Cargo } from '../../../../../../enums/object/object';
import { DealType } from '../../../../../../enums/signatures/core/deal/type';
export interface IDeal {
    uuid: string;
    type: DealType;
    price: number;
    target: number | T2Cargo;
    count?: number;
    generation?: number;
}
