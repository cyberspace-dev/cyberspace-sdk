export var ModifierType;
(function (ModifierType) {
    /* --- HULL1 ---------------------------------------------------------------------------------------------------- */
    ModifierType["TOTAL_HP"] = "total_hp";
    ModifierType["CURRENT_HP"] = "current_hp";
    ModifierType["DEFENSE"] = "defense";
    /* --- ENGINE --------------------------------------------------------------------------------------------------- */
    ModifierType["SPEED"] = "speed";
    ModifierType["WARP"] = "warp";
    /* --- SCANNER -------------------------------------------------------------------------------------------------- */
    ModifierType["POWER"] = "power";
    /* --- DROID ---------------------------------------------------------------------------------------------------- */
    ModifierType["RECOVERY"] = "recovery";
    /* --- PROTECTOR ------------------------------------------------------------------------------------------------ */
    ModifierType["REDUCE"] = "reduce";
    /* --- GRIPPER -------------------------------------------------------------------------------------------------- */
    ModifierType["TRACTION"] = "traction";
    /* --- RADAR ---------------------------------------------------------------------------------------------------- */
    ModifierType["RADIUS"] = "radius";
    /* --- TANK ----------------------------------------------------------------------------------------------------- */
    ModifierType["TOTAL_FUEL"] = "total_fuel";
    ModifierType["CURRENT_FUEL"] = "current_fuel";
    /* --- WEAPON --------------------------------------------------------------------------------------------------- */
    ModifierType["RANGE"] = "range";
    ModifierType["DAMAGE"] = "damage";
})(ModifierType || (ModifierType = {}));
