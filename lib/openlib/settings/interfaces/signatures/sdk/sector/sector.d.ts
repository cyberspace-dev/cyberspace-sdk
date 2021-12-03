import { IEntityModel } from '../../core/entity/entity';
export interface ISector {
    name: string;
    nodes: Array<IEntityModel>;
    links: Array<{
        type: string;
        payload: {
            x: {
                from: number;
                to: number;
            };
            y: {
                from: number;
                to: number;
            };
        };
    }>;
}
