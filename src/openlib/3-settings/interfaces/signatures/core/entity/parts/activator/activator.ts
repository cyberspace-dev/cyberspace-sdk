import {IEntityModel} from '../../entity';

export interface IActivator {

    get(model: IEntityModel): any;

}