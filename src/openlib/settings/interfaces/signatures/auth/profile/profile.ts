export interface IProfile {

    uuid        : string;
    email       : string;
    name        : string,
    avatar      : string;
    assembly    : number;
    isActive    : boolean;

    role?       : number;
    place?      : number;
    balance?    : number;
    score?      : number;
    bonus?      : number;
    country?    : string;
    company?    : string;
    twitter?    : string;

}