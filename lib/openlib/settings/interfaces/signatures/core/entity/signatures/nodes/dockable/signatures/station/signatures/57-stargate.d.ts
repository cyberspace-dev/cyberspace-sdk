import { IBStation } from '../station';
export interface IBStationStargate extends IBStation {
    system: string;
    stargate: string;
}
