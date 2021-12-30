import {IVector} from './interfaces/vector';

const ANGLE_CHANGE      : number = 0.036;
const ROUND_POSITION    : number = 10000;

export class Physics {

    // --- MEMBERS [PRIVATE STATIC] ------------------------------------------------------------------------------------

    private static instance: Physics;

    // --- METHODS [PUBLIC] --------------------------------------------------------------------------------------------

    public direction(angle1: any, angle2: any, original: number) {
        const source = Math.abs(angle1 - angle2);

        let start = angle1;
        let diff = Math.abs(start - angle2);
        let counter1 = 0;
        while (diff > 0.05) {
            start += 0.025;

            if (start > Math.PI) start = -Math.PI;

            diff = Math.abs(start - angle2);
            counter1++;

            if (counter1 >= 125) break;
        }

        start = angle1;
        diff = Math.abs(start - angle2);
        let counter2 = 0;
        while (diff > 0.05) {
            start -= 0.025;

            if (start < -Math.PI) start = Math.PI;
            diff = Math.abs(start - angle2);
            counter2++;

            if (counter2 >= 125) break;
        }

        const ORG = original / 1000;
        const CHANGE = source > 0.72 ? (ORG > 0.036 ? (ORG + 0.018) : 0.036) : 0.036;

        if (counter1 > counter2) return -CHANGE;

        return CHANGE;
    }

    public distance(vector: IVector, target: IVector, squared?: boolean): number {
        const x = squared ? vector.x - target.x : Math.abs(vector.x - target.x);
        const y = squared ? vector.y - target.y : Math.abs(vector.y - target.y);

        return squared ? (x * x) + (y * y) : Math.sqrt(x * x + y * y);
    }

    public point(angle: number, radius: number): IVector {
        return {
            x: Math.round(Math.cos(angle) * radius),
            y: Math.round(Math.sin(angle) * radius),
            a: this.normalize(angle)
        } as IVector;
    }

    public orbital(vector: IVector, radius: number): IVector {
        const factor = ROUND_POSITION / radius;
        const speed = 0.000002 * factor;

        return this.point(vector.a + speed, radius);
    }

    public gravity(vector:IVector, target: IVector, speed: number, force?: boolean): IVector {
        const angle = this.angle(vector, target);
        if (force) vector.a = angle;

        const x = vector.x + Math.cos(angle) * speed;
        const y = vector.y + Math.sin(angle) * speed;

        const point = {x, y, a: vector.a} as IVector;

        return this.compress(point);
    }

    public move(vector: IVector, target: IVector, speed: number, original: number): IVector {
        const angle = this.angle(vector, target);

        const diff = Math.abs(vector.a - angle);
        if (diff > 0.05) vector.a += this.direction(vector.a, angle, original);

        if (vector.a < -Math.PI) vector.a = Math.PI;
        if (vector.a > Math.PI) vector.a = -Math.PI;

        const x = vector.x + Math.cos(vector.a) * speed;
        const y = vector.y + Math.sin(vector.a) * speed;

        const point = {x, y, a: vector.a} as IVector;

        return this.compress(point);
    }

    public angle(vector: IVector, target: IVector): number {
        return Math.atan2(target.y - vector.y, target.x - vector.x)
    }

    // --- METHODS [PRIVATE] -------------------------------------------------------------------------------------------

    private normalize(angle: number) {
        let marker = true;

        if (angle > 0) {
            if (angle > Math.PI * 2) {
                while (marker) {
                    angle = angle - Math.PI * 2;
                    marker = angle > Math.PI * 2;
                }
            }
        } else {
            if (angle < -(Math.PI * 2)) {
                while (marker) {
                    angle = angle + Math.PI * 2;
                    marker = angle < -(Math.PI * 2);
                }
            }
        }

        return angle;
    }

    private compress(point: IVector): IVector {
        point.x = Math.floor(point.x * 1000) / 1000;
        point.y = Math.floor(point.y * 1000) / 1000;
        point.a = Math.floor(point.a * 1000) / 1000;

        return point;
    }

    // --- METHODS [STATIC] --------------------------------------------------------------------------------------------

    static get(): Physics {
        return Physics.instance || new Physics();
    }

}

