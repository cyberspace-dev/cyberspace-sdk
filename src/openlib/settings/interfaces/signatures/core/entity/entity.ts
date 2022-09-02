export interface IEntityModel {

    uuid        : string;
    owner       : string;
    type        : number;
    view        : number;
    parent      : string;

    body        : any;
    nodes?      : Array<IEntityModel>;
    metadata?   : any;

}