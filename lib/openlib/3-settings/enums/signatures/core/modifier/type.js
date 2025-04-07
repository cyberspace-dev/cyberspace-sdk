"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifierType = exports.ModifierCompiled = void 0;
var ModifierCompiled;
(function (ModifierCompiled) {
    /* --- HULL ----------------------------------------------------------------------------------------------------- */
    ModifierCompiled["COMPILED_HULL_STRUCTURE_TOTAL"] = "COMPILED_HULL_STRUCTURE_TOTAL";
    ModifierCompiled["COMPILED_HULL_STRUCTURE_CURRENT"] = "COMPILED_HULL_STRUCTURE_CURRENT";
    ModifierCompiled["COMPILED_HULL_DEFENSE"] = "COMPILED_HULL_DEFENSE";
    /* --- ENGINE --------------------------------------------------------------------------------------------------- */
    ModifierCompiled["COMPILED_ENGINE_SPEED"] = "COMPILED_ENGINE_SPEED";
    ModifierCompiled["COMPILED_ENGINE_WARP"] = "COMPILED_ENGINE_WARP";
    /* --- SCANNER -------------------------------------------------------------------------------------------------- */
    ModifierCompiled["COMPILED_SCANNER_POWER"] = "COMPILED_SCANNER_POWER";
    /* --- DROID ---------------------------------------------------------------------------------------------------- */
    ModifierCompiled["COMPILED_DROID_POWER_RECOVERY"] = "COMPILED_DROID_POWER_RECOVERY";
    ModifierCompiled["COMPILED_DROID_STRUCTURE_RECOVERY"] = "COMPILED_DROID_STRUCTURE_RECOVERY";
    /* --- PROTECTOR ------------------------------------------------------------------------------------------------ */
    ModifierCompiled["COMPILED_PROTECTOR_POWER_TOTAL"] = "COMPILED_PROTECTOR_POWER_TOTAL";
    ModifierCompiled["COMPILED_PROTECTOR_POWER_CURRENT"] = "COMPILED_PROTECTOR_POWER_CURRENT";
    ModifierCompiled["COMPILED_PROTECTOR_REDUCE"] = "COMPILED_PROTECTOR_REDUCE";
    /* --- GRIPPER -------------------------------------------------------------------------------------------------- */
    ModifierCompiled["COMPILED_GRIPPER_TRACTION"] = "COMPILED_GRIPPER_TRACTION";
    /* --- RADAR ---------------------------------------------------------------------------------------------------- */
    ModifierCompiled["COMPILED_RADAR_RANGE"] = "COMPILED_RADAR_RANGE";
    /* --- TANK ----------------------------------------------------------------------------------------------------- */
    ModifierCompiled["COMPILED_TANK_FUEL_TOTAL"] = "COMPILED_TANK_FUEL_TOTAL";
    ModifierCompiled["COMPILED_TANK_FUEL_CURRENT"] = "COMPILED_TANK_FUEL_CURRENT";
    /* --- WEAPON --------------------------------------------------------------------------------------------------- */
    ModifierCompiled["COMPILED_WEAPON_RANGE"] = "COMPILED_WEAPON_RANGE";
    ModifierCompiled["COMPILED_WEAPON_DAMAGE"] = "COMPILED_WEAPON_DAMAGE";
    ModifierCompiled["COMPILED_WEAPON_DELAY"] = "COMPILED_WEAPON_DELAY";
    /* --- WEIGHT --------------------------------------------------------------------------------------------------- */
    ModifierCompiled["COMPILED_WEIGHT"] = "COMPILED_WEIGHT";
    /* --- OTHER ---------------------------------------------------------------------------------------------------- */
    ModifierCompiled["COMPILED_MISS_CHANCE"] = "COMPILED_MISS_CHANCE";
})(ModifierCompiled || (exports.ModifierCompiled = ModifierCompiled = {}));
var ModifierType;
(function (ModifierType) {
    /* --- HULL ----------------------------------------------------------------------------------------------------- */
    ModifierType["HULL_STRUCTURE_TOTAL"] = "HULL_STRUCTURE_TOTAL";
    ModifierType["HULL_STRUCTURE_CURRENT"] = "HULL_STRUCTURE_CURRENT";
    ModifierType["HULL_DEFENSE"] = "HULL_DEFENSE";
    ModifierType["HULL_STRUCTURE_TOTAL_INC"] = "HULL_STRUCTURE_TOTAL_INC";
    ModifierType["HULL_DEFENSE_INC"] = "HULL_DEFENSE_INC";
    ModifierType["HULL_DEFENSE_DEC"] = "HULL_DEFENSE_DEC";
    /* --- ENGINE --------------------------------------------------------------------------------------------------- */
    ModifierType["ENGINE_SPEED"] = "ENGINE_SPEED";
    ModifierType["ENGINE_WARP"] = "ENGINE_WARP";
    ModifierType["ENGINE_SPEED_INC"] = "ENGINE_SPEED_INC";
    ModifierType["ENGINE_SPEED_DEC"] = "ENGINE_SPEED_DEC";
    ModifierType["ENGINE_WARP_INC"] = "ENGINE_WARP_INC";
    /* --- SCANNER -------------------------------------------------------------------------------------------------- */
    ModifierType["SCANNER_POWER"] = "SCANNER_POWER";
    ModifierType["SCANNER_POWER_INC"] = "SCANNER_POWER_INC";
    /* --- DROID ---------------------------------------------------------------------------------------------------- */
    ModifierType["DROID_POWER_RECOVERY"] = "DROID_POWER_RECOVERY";
    ModifierType["DROID_STRUCTURE_RECOVERY"] = "DROID_STRUCTURE_RECOVERY";
    ModifierType["DROID_POWER_RECOVERY_INC"] = "DROID_POWER_RECOVERY_INC";
    ModifierType["DROID_POWER_RECOVERY_DEC"] = "DROID_POWER_RECOVERY_DEC";
    ModifierType["DROID_STRUCTURE_RECOVERY_INC"] = "DROID_STRUCTURE_RECOVERY_INC";
    ModifierType["DROID_STRUCTURE_RECOVERY_DEC"] = "DROID_STRUCTURE_RECOVERY_DEC";
    /* --- PROTECTOR ------------------------------------------------------------------------------------------------ */
    ModifierType["PROTECTOR_POWER_TOTAL"] = "PROTECTOR_POWER_TOTAL";
    ModifierType["PROTECTOR_POWER_CURRENT"] = "PROTECTOR_POWER_CURRENT";
    ModifierType["PROTECTOR_REDUCE"] = "PROTECTOR_REDUCE";
    ModifierType["PROTECTOR_POWER_TOTAL_INC"] = "PROTECTOR_POWER_TOTAL_INC";
    ModifierType["PROTECTOR_POWER_TOTAL_DEC"] = "PROTECTOR_POWER_TOTAL_DEC";
    ModifierType["PROTECTOR_REDUCE_INC"] = "PROTECTOR_REDUCE_INC";
    /* --- GRIPPER -------------------------------------------------------------------------------------------------- */
    ModifierType["GRIPPER_TRACTION"] = "GRIPPER_TRACTION";
    ModifierType["GRIPPER_TRACTION_INC"] = "GRIPPER_TRACTION_INC";
    /* --- RADAR ---------------------------------------------------------------------------------------------------- */
    ModifierType["RADAR_RANGE"] = "RADAR_RANGE";
    ModifierType["RADAR_RANGE_INC"] = "RADAR_RANGE_INC";
    /* --- TANK ----------------------------------------------------------------------------------------------------- */
    ModifierType["TANK_FUEL_TOTAL"] = "TANK_FUEL_TOTAL";
    ModifierType["TANK_FUEL_CURRENT"] = "TANK_FUEL_CURRENT";
    ModifierType["TANK_FUEL_TOTAL_INC"] = "TANK_FUEL_TOTAL_INC";
    /* --- WEAPON --------------------------------------------------------------------------------------------------- */
    ModifierType["WEAPON_RANGE"] = "WEAPON_RANGE";
    ModifierType["WEAPON_DAMAGE"] = "WEAPON_DAMAGE";
    ModifierType["WEAPON_DELAY"] = "WEAPON_DELAY";
    ModifierType["WEAPON_RANGE_INC"] = "WEAPON_RANGE_INC";
    ModifierType["WEAPON_DAMAGE_INC"] = "WEAPON_DAMAGE_INC";
    ModifierType["WEAPON_DAMAGE_DEC"] = "WEAPON_DAMAGE_DEC";
    ModifierType["WEAPON_DELAY_INC"] = "WEAPON_DELAY_INC";
    /* --- OTHER ---------------------------------------------------------------------------------------------------- */
    ModifierType["MISS_CHANCE"] = "MISS_CHANCE";
})(ModifierType || (exports.ModifierType = ModifierType = {}));
