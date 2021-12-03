export interface ISocketChannel {
    tick(clock: number, snapshot: any): any;
}
