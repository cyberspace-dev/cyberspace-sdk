export declare class Config {
    private static cache;
    static initialize(): void;
    static load(type: string): any;
    static settings(type: string, value?: any): any;
    static view(size: number, type: string): string;
    static generate(type: number, level: number): any;
    static distance(quadrant: string, constellation: string, source: string, destination: string): {
        delta: number;
        angle: number;
    };
    static checkType(type: any): boolean;
}
