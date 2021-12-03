import { IBaseStructure } from '../../base/base';
import { SecurityLevel } from '../../../../../../../enums/signatures/web/security/level';
export interface ISystemStructure extends IBaseStructure {
    security: SecurityLevel;
    copulative: boolean;
}
