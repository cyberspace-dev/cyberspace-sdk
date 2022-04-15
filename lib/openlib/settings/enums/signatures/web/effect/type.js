"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectType = void 0;
var EffectType;
(function (EffectType) {
    EffectType[EffectType["DESTROY"] = 1] = "DESTROY";
    EffectType[EffectType["WARPIN"] = 2] = "WARPIN";
    EffectType[EffectType["WARPOUT"] = 3] = "WARPOUT";
    EffectType[EffectType["LANDING"] = 4] = "LANDING";
    EffectType[EffectType["ESCAPE"] = 5] = "ESCAPE";
    EffectType[EffectType["DAMAGE"] = 6] = "DAMAGE";
    EffectType[EffectType["ATTACK"] = 7] = "ATTACK";
    EffectType[EffectType["STANDBY"] = 8] = "STANDBY";
    EffectType[EffectType["START"] = 9] = "START";
    EffectType[EffectType["MOVE"] = 10] = "MOVE";
    EffectType[EffectType["STOP"] = 11] = "STOP";
})(EffectType = exports.EffectType || (exports.EffectType = {}));
