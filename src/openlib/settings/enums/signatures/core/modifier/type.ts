export enum ModifierCompiled {

    /* --- HULL ----------------------------------------------------------------------------------------------------- */

    COMPILED_HULL_STRUCTURE_TOTAL = 'COMPILED_HULL_STRUCTURE_TOTAL',
    COMPILED_HULL_STRUCTURE_CURRENT = 'COMPILED_HULL_STRUCTURE_CURRENT',

    COMPILED_HULL_DEFENSE = 'COMPILED_HULL_DEFENSE',

    /* --- ENGINE --------------------------------------------------------------------------------------------------- */

    COMPILED_ENGINE_SPEED = 'COMPILED_ENGINE_SPEED',
    COMPILED_ENGINE_WARP = 'COMPILED_ENGINE_WARP',

    /* --- SCANNER -------------------------------------------------------------------------------------------------- */

    COMPILED_SCANNER_POWER = 'COMPILED_SCANNER_POWER',

    /* --- DROID ---------------------------------------------------------------------------------------------------- */

    COMPILED_DROID_POWER_RECOVERY = 'COMPILED_DROID_POWER_RECOVERY',
    COMPILED_DROID_STRUCTURE_RECOVERY = 'COMPILED_DROID_STRUCTURE_RECOVERY',

    /* --- PROTECTOR ------------------------------------------------------------------------------------------------ */

    COMPILED_PROTECTOR_POWER_TOTAL = 'COMPILED_PROTECTOR_POWER_TOTAL',
    COMPILED_PROTECTOR_POWER_CURRENT = 'COMPILED_PROTECTOR_POWER_CURRENT',

    COMPILED_PROTECTOR_REDUCE = 'COMPILED_PROTECTOR_REDUCE',

    /* --- GRIPPER -------------------------------------------------------------------------------------------------- */

    COMPILED_GRIPPER_TRACTION = 'COMPILED_GRIPPER_TRACTION',

    /* --- RADAR ---------------------------------------------------------------------------------------------------- */

    COMPILED_RADAR_RANGE = 'COMPILED_RADAR_RANGE',

    /* --- TANK ----------------------------------------------------------------------------------------------------- */

    COMPILED_TANK_FUEL_TOTAL = 'COMPILED_TANK_FUEL_TOTAL',
    COMPILED_TANK_FUEL_CURRENT = 'COMPILED_TANK_FUEL_CURRENT',

    /* --- WEAPON --------------------------------------------------------------------------------------------------- */

    COMPILED_WEAPON_RANGE = 'COMPILED_WEAPON_RANGE',
    COMPILED_WEAPON_DAMAGE = 'COMPILED_WEAPON_DAMAGE',
    COMPILED_WEAPON_DELAY = 'COMPILED_WEAPON_DELAY',

    /* --- WEIGHT --------------------------------------------------------------------------------------------------- */

    COMPILED_WEIGHT = 'COMPILED_WEIGHT',

    /* --- OTHER ---------------------------------------------------------------------------------------------------- */

    COMPILED_MISS_CHANCE = 'COMPILED_MISS_CHANCE'
}

export enum ModifierType {

    /* --- HULL ----------------------------------------------------------------------------------------------------- */

    HULL_STRUCTURE_TOTAL = 'HULL_STRUCTURE_TOTAL',
    HULL_STRUCTURE_CURRENT = 'HULL_STRUCTURE_CURRENT',
    HULL_DEFENSE = 'HULL_DEFENSE',

    HULL_STRUCTURE_TOTAL_INC = 'HULL_STRUCTURE_TOTAL_INC',
    HULL_DEFENSE_INC = 'HULL_DEFENSE_INC',
    HULL_DEFENSE_DEC = 'HULL_DEFENSE_DEC',

    /* --- ENGINE --------------------------------------------------------------------------------------------------- */

    ENGINE_SPEED = 'ENGINE_SPEED',
    ENGINE_WARP = 'ENGINE_WARP',

    ENGINE_SPEED_INC = 'ENGINE_SPEED_INC',
    ENGINE_SPEED_DEC = 'ENGINE_SPEED_DEC',

    ENGINE_WARP_INC = 'ENGINE_WARP_INC',

    /* --- SCANNER -------------------------------------------------------------------------------------------------- */

    SCANNER_POWER = 'SCANNER_POWER',

    SCANNER_POWER_INC = 'SCANNER_POWER_INC',

    /* --- DROID ---------------------------------------------------------------------------------------------------- */

    DROID_POWER_RECOVERY = 'DROID_POWER_RECOVERY',
    DROID_STRUCTURE_RECOVERY = 'DROID_STRUCTURE_RECOVERY',

    DROID_POWER_RECOVERY_INC = 'DROID_POWER_RECOVERY_INC',
    DROID_POWER_RECOVERY_DEC = 'DROID_POWER_RECOVERY_DEC',

    DROID_STRUCTURE_RECOVERY_INC = 'DROID_STRUCTURE_RECOVERY_INC',
    DROID_STRUCTURE_RECOVERY_DEC = 'DROID_STRUCTURE_RECOVERY_DEC',

    /* --- PROTECTOR ------------------------------------------------------------------------------------------------ */

    PROTECTOR_POWER_TOTAL = 'PROTECTOR_POWER_TOTAL',
    PROTECTOR_POWER_CURRENT = 'PROTECTOR_POWER_CURRENT',
    PROTECTOR_REDUCE = 'PROTECTOR_REDUCE',

    PROTECTOR_POWER_TOTAL_INC = 'PROTECTOR_POWER_TOTAL_INC',
    PROTECTOR_POWER_TOTAL_DEC = 'PROTECTOR_POWER_TOTAL_DEC',

    PROTECTOR_REDUCE_INC = 'PROTECTOR_REDUCE_INC',

    /* --- GRIPPER -------------------------------------------------------------------------------------------------- */

    GRIPPER_TRACTION = 'GRIPPER_TRACTION',

    GRIPPER_TRACTION_INC = 'GRIPPER_TRACTION_INC',

    /* --- RADAR ---------------------------------------------------------------------------------------------------- */

    RADAR_RANGE = 'RADAR_RANGE',

    RADAR_RANGE_INC = 'RADAR_RANGE_INC',

    /* --- TANK ----------------------------------------------------------------------------------------------------- */

    TANK_FUEL_TOTAL = 'TANK_FUEL_TOTAL',
    TANK_FUEL_CURRENT = 'TANK_FUEL_CURRENT',

    TANK_FUEL_TOTAL_INC = 'TANK_FUEL_TOTAL_INC',

    /* --- WEAPON --------------------------------------------------------------------------------------------------- */

    WEAPON_RANGE = 'WEAPON_RANGE',
    WEAPON_DAMAGE = 'WEAPON_DAMAGE',
    WEAPON_DELAY = 'WEAPON_DELAY',

    WEAPON_RANGE_INC = 'WEAPON_RANGE_INC',

    WEAPON_DAMAGE_INC = 'WEAPON_DAMAGE_INC',
    WEAPON_DAMAGE_DEC = 'WEAPON_DAMAGE_DEC',

    WEAPON_DELAY_INC = 'WEAPON_DELAY_INC',

    /* --- OTHER ---------------------------------------------------------------------------------------------------- */

    MISS_CHANCE = 'MISS_CHANCE'

}
