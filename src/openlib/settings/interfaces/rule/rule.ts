export interface IRule {
    canExecute(): boolean;
    execute(): void;
}