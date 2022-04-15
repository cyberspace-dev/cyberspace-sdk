export interface IRule {

    canExecute()    : Promise<boolean>;
    execute()       : Promise<void>;

}