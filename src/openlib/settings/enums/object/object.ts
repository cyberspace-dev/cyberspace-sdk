// --- ROOT ------------------------------------------------------------------------------------------------------------

export enum TObject {
    SYSTEM = 1,
    CARGO = 2,
    ASTEROID = 3,
    PLANET = 4,
    STATION = 5,
    SHIP = 6,
    TRAP = 7,
    ROCKET = 8,
    DRONE = 9
}

// --- LEVEL 2 TYPES ---------------------------------------------------------------------------------------------------

export enum T2Cargo {
    MINERAL = 21,
    EQUIPMENT = 22,
    LOOT = 23
}

export enum T5Station {
    PILOTS = 51,
    BUSINESS = 52,
    SCIENTIFIC = 53,
    MEDICAL = 54,
    MILITARY = 55,
    PIRATE = 56,
    STARGATE = 57,
    STARGATE_TEMPORARILY = 58,
    DREADNOUGHT = 59
}

export enum T6Ship {
    SHUTTLE = 61,
    DESTROYER = 62,
    FRIGATE = 63,
    CRUISER = 64,
    DREADNOUGHT = 65,
    INTERCEPTOR = 66,
    CORVETTE = 67,
    CORSAIR = 68
}

// --- LEVEL 3 TYPES ---------------------------------------------------------------------------------------------------

export enum T22Equipment {
    HULL = 2201,
    ENGINE = 2202,
    TANK = 2203,
    RADAR = 2204,
    SCANNER = 2205,
    DROID = 2206,
    GRIPPER = 2207,
    PROTECTOR = 2208,
    WEAPON = 2209,
    ARTIFACT = 2210
}

export enum T23Loot {
    EMBRYO = 231,
    VIRUS = 232,
    CPU = 233,
    CONTAINER = 234
}

export enum T62Destroyer {
    DESTROYER_HEAVY = 621,
    DESTROYER_DEFENSIVE = 622
}

export enum T63Frigate {
    FRIGATE_TACTICAL = 631,
    FRIGATE_IMPULSIVE = 632
}

export enum T64Cruiser {
    CRUISER_BATTLE = 641,
    CRUISER_COMMAND = 642
}

export enum T65Dreadnought {
    DREADNOUGHT_MASSIVE = 651,
    WARSHIP = 652
}

export enum T66Interceptor {
    DEMOLISHER = 661,
    CHASER = 662
}

export enum T67Corvette {
    CORVETTE_CELESTIAL = 671,
    EXTERMINATOR = 672
}

// --- LEVEL 4 TYPES ---------------------------------------------------------------------------------------------------

export enum T2209Weapon {
    FRAGMENTARY = 22091,
    LASER = 22092,
    ROCKET = 22093
}