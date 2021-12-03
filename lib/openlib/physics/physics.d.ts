import { IVector } from './interfaces/vector';
export declare class Physics {
    private static instance;
    direction(angle1: any, angle2: any): number;
    distance(vector: IVector, target: IVector, squared?: boolean): number;
    point(angle: number, radius: number): IVector;
    orbital(vector: IVector, radius: number): IVector;
    gravity(vector: IVector, target: IVector, speed: number, force?: boolean): IVector;
    move(vector: IVector, target: IVector, speed: number): IVector;
    angle(vector: IVector, target: IVector): number;
    private normalize;
    private compress;
    static get(): Physics;
}
