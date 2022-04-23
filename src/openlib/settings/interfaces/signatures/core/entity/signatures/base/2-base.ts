import {IBNode} from './1-node';

export interface IBBase extends IBNode {

    size    : number;
    effects : {
        [key: string]   : any;
        _v              : number;
    }

}