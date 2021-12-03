export interface IProfile {
    uuid: string;
    email: string;
    name: string;
    avatar: string;
    isActive: boolean;
    assembly: number;
    role?: number;
    place?: number;
    balance?: number;
    score?: number;
    country?: string;
    company?: string;
    twitter?: string;
    bonus?: number;
}
