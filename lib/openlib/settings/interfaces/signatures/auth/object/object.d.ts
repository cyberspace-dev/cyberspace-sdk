import { IBaseStructure } from '../../core/entity/signatures/base/base';
export interface IObject {
    uuid: string;
    type: string;
    parent: string;
    system: string;
    body: IBaseStructure;
}
