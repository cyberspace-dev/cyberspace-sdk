import {IBBase}         from '../../base/2-base';
import {SecurityLevel}  from '../../../../../../../enums/signatures/web/security/level';
import {Quadrants}      from '../../../../../../../enums/signatures/web/quadrants/quadrants';

export interface IBSystem extends IBBase {

    security        : SecurityLevel;
    copulative      : boolean;

    quadrant        : Quadrants;
    constellation   : string;

}
