"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifierType = void 0;
var ModifierType;
(function (ModifierType) {
    /* --- HULL ----------------------------------------------------------------------------------------------------- */
    ModifierType[ModifierType["HULL_STRUCTURE_TOTAL"] = 0] = "HULL_STRUCTURE_TOTAL";
    ModifierType[ModifierType["HULL_STRUCTURE_CURRENT"] = 1] = "HULL_STRUCTURE_CURRENT";
    ModifierType[ModifierType["HULL_DEFENSE"] = 2] = "HULL_DEFENSE";
    /* --- ENGINE --------------------------------------------------------------------------------------------------- */
    ModifierType[ModifierType["ENGINE_SPEED"] = 3] = "ENGINE_SPEED";
    ModifierType[ModifierType["ENGINE_WARP"] = 4] = "ENGINE_WARP";
    /* --- SCANNER -------------------------------------------------------------------------------------------------- */
    ModifierType[ModifierType["SCANNER_POWER"] = 5] = "SCANNER_POWER";
    /* --- DROID ---------------------------------------------------------------------------------------------------- */
    ModifierType[ModifierType["DROID_POWER_RECOVERY"] = 6] = "DROID_POWER_RECOVERY";
    ModifierType[ModifierType["DROID_STRUCTURE_RECOVERY"] = 7] = "DROID_STRUCTURE_RECOVERY";
    /* --- PROTECTOR ------------------------------------------------------------------------------------------------ */
    ModifierType[ModifierType["PROTECTOR_POWER_TOTAL"] = 8] = "PROTECTOR_POWER_TOTAL";
    ModifierType[ModifierType["PROTECTOR_POWER_CURRENT"] = 9] = "PROTECTOR_POWER_CURRENT";
    ModifierType[ModifierType["PROTECTOR_REDUCE"] = 10] = "PROTECTOR_REDUCE";
    /* --- GRIPPER -------------------------------------------------------------------------------------------------- */
    ModifierType[ModifierType["GRIPPER_TRACTION"] = 11] = "GRIPPER_TRACTION";
    /* --- RADAR ---------------------------------------------------------------------------------------------------- */
    ModifierType[ModifierType["RADAR_RANGE"] = 12] = "RADAR_RANGE";
    /* --- TANK ----------------------------------------------------------------------------------------------------- */
    ModifierType[ModifierType["TANK_FUEL_TOTAL"] = 13] = "TANK_FUEL_TOTAL";
    ModifierType[ModifierType["TANK_FUEL_CURRENT"] = 14] = "TANK_FUEL_CURRENT";
    /* --- WEAPON --------------------------------------------------------------------------------------------------- */
    ModifierType[ModifierType["WEAPON_TYPE"] = 15] = "WEAPON_TYPE";
    ModifierType[ModifierType["WEAPON_RANGE"] = 16] = "WEAPON_RANGE";
    ModifierType[ModifierType["WEAPON_DAMAGE"] = 17] = "WEAPON_DAMAGE";
    ModifierType[ModifierType["WEAPON_DELAY"] = 18] = "WEAPON_DELAY";
})(ModifierType = exports.ModifierType || (exports.ModifierType = {}));
