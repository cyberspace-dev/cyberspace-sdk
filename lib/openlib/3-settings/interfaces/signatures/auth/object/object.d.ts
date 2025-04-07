import { IBBase } from '../../core/entity/signatures/base/2-base';
export interface IObject {
    uuid: string;
    type: string;
    parent: string;
    system: string;
    body: IBBase;
}
