import { IBillableStructure } from '../../base/billable';
import { IDeal } from '../../../parts/deal/deal';
export interface IDockableStructure extends IBillableStructure {
    deals: Array<IDeal>;
}
