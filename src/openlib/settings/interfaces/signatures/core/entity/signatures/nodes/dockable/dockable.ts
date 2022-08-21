import {IBBillable} from '../../base/3-billable';
import {IDeal}      from '../../../parts/deal/deal';

export interface IBDockable extends IBBillable {

    deals   : Array<IDeal>;

}