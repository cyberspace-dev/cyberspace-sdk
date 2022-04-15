"use strict";
// --- ROOT ------------------------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.T2209Weapon = exports.T67Corvette = exports.T66Interceptor = exports.T65Dreadnought = exports.T64Cruiser = exports.T63Frigate = exports.T62Destroyer = exports.T23Loot = exports.T22Equipment = exports.T6Ship = exports.T5Station = exports.T2Cargo = exports.TObject = void 0;
var TObject;
(function (TObject) {
    TObject[TObject["SYSTEM"] = 1] = "SYSTEM";
    TObject[TObject["CARGO"] = 2] = "CARGO";
    TObject[TObject["ASTEROID"] = 3] = "ASTEROID";
    TObject[TObject["PLANET"] = 4] = "PLANET";
    TObject[TObject["STATION"] = 5] = "STATION";
    TObject[TObject["SHIP"] = 6] = "SHIP";
    TObject[TObject["TRAP"] = 7] = "TRAP";
    TObject[TObject["ROCKET"] = 8] = "ROCKET";
    TObject[TObject["DROID"] = 9] = "DROID";
})(TObject = exports.TObject || (exports.TObject = {}));
// --- LEVEL 2 TYPES ---------------------------------------------------------------------------------------------------
var T2Cargo;
(function (T2Cargo) {
    T2Cargo[T2Cargo["LOOT"] = 21] = "LOOT";
    T2Cargo[T2Cargo["MINERAL"] = 22] = "MINERAL";
    T2Cargo[T2Cargo["EQUIPMENT"] = 23] = "EQUIPMENT";
})(T2Cargo = exports.T2Cargo || (exports.T2Cargo = {}));
var T5Station;
(function (T5Station) {
    T5Station[T5Station["PILOTS"] = 51] = "PILOTS";
    T5Station[T5Station["BUSINESS"] = 52] = "BUSINESS";
    T5Station[T5Station["SCIENTIFIC"] = 53] = "SCIENTIFIC";
    T5Station[T5Station["MEDICAL"] = 54] = "MEDICAL";
    T5Station[T5Station["MILITARY"] = 55] = "MILITARY";
    T5Station[T5Station["PIRATE"] = 56] = "PIRATE";
    T5Station[T5Station["DREADNOUGHT"] = 57] = "DREADNOUGHT";
})(T5Station = exports.T5Station || (exports.T5Station = {}));
var T6Ship;
(function (T6Ship) {
    T6Ship[T6Ship["SHUTTLE"] = 61] = "SHUTTLE";
    T6Ship[T6Ship["CORSAIR"] = 62] = "CORSAIR";
    T6Ship[T6Ship["DESTROYER"] = 63] = "DESTROYER";
    T6Ship[T6Ship["FRIGATE"] = 64] = "FRIGATE";
    T6Ship[T6Ship["CRUISER"] = 65] = "CRUISER";
    T6Ship[T6Ship["DREADNOUGHT"] = 66] = "DREADNOUGHT";
    T6Ship[T6Ship["INTERCEPTOR"] = 67] = "INTERCEPTOR";
    T6Ship[T6Ship["CORVETTE"] = 68] = "CORVETTE";
})(T6Ship = exports.T6Ship || (exports.T6Ship = {}));
// --- LEVEL 3 TYPES ---------------------------------------------------------------------------------------------------
var T22Equipment;
(function (T22Equipment) {
    T22Equipment[T22Equipment["HULL"] = 2201] = "HULL";
    T22Equipment[T22Equipment["ENGINE"] = 2202] = "ENGINE";
    T22Equipment[T22Equipment["TANK"] = 2203] = "TANK";
    T22Equipment[T22Equipment["RADAR"] = 2204] = "RADAR";
    T22Equipment[T22Equipment["SCANNER"] = 2205] = "SCANNER";
    T22Equipment[T22Equipment["DROID"] = 2206] = "DROID";
    T22Equipment[T22Equipment["GRIPPER"] = 2207] = "GRIPPER";
    T22Equipment[T22Equipment["PROTECTOR"] = 2208] = "PROTECTOR";
    T22Equipment[T22Equipment["WEAPON"] = 2209] = "WEAPON";
    T22Equipment[T22Equipment["ARTIFACT"] = 2210] = "ARTIFACT";
})(T22Equipment = exports.T22Equipment || (exports.T22Equipment = {}));
var T23Loot;
(function (T23Loot) {
    T23Loot[T23Loot["EMBRYO"] = 231] = "EMBRYO";
    T23Loot[T23Loot["VIRUS"] = 232] = "VIRUS";
})(T23Loot = exports.T23Loot || (exports.T23Loot = {}));
var T62Destroyer;
(function (T62Destroyer) {
    T62Destroyer[T62Destroyer["DESTROYER_HEAVY"] = 621] = "DESTROYER_HEAVY";
    T62Destroyer[T62Destroyer["DESTROYER_DEFENSIVE"] = 622] = "DESTROYER_DEFENSIVE";
})(T62Destroyer = exports.T62Destroyer || (exports.T62Destroyer = {}));
var T63Frigate;
(function (T63Frigate) {
    T63Frigate[T63Frigate["FRIGATE_TACTICAL"] = 631] = "FRIGATE_TACTICAL";
    T63Frigate[T63Frigate["FRIGATE_IMPULSIVE"] = 632] = "FRIGATE_IMPULSIVE";
})(T63Frigate = exports.T63Frigate || (exports.T63Frigate = {}));
var T64Cruiser;
(function (T64Cruiser) {
    T64Cruiser[T64Cruiser["CRUISER_BATTLE"] = 641] = "CRUISER_BATTLE";
    T64Cruiser[T64Cruiser["CRUISER_COMMAND"] = 642] = "CRUISER_COMMAND";
})(T64Cruiser = exports.T64Cruiser || (exports.T64Cruiser = {}));
var T65Dreadnought;
(function (T65Dreadnought) {
    T65Dreadnought[T65Dreadnought["DREADNOUGHT_MASSIVE"] = 651] = "DREADNOUGHT_MASSIVE";
    T65Dreadnought[T65Dreadnought["WARSHIP"] = 652] = "WARSHIP";
})(T65Dreadnought = exports.T65Dreadnought || (exports.T65Dreadnought = {}));
var T66Interceptor;
(function (T66Interceptor) {
    T66Interceptor[T66Interceptor["DEMOLISHER"] = 661] = "DEMOLISHER";
    T66Interceptor[T66Interceptor["CHASER"] = 662] = "CHASER";
})(T66Interceptor = exports.T66Interceptor || (exports.T66Interceptor = {}));
var T67Corvette;
(function (T67Corvette) {
    T67Corvette[T67Corvette["CORVETTE_CELESTIAL"] = 671] = "CORVETTE_CELESTIAL";
    T67Corvette[T67Corvette["EXTERMINATOR"] = 672] = "EXTERMINATOR";
})(T67Corvette = exports.T67Corvette || (exports.T67Corvette = {}));
// --- LEVEL 4 TYPES ---------------------------------------------------------------------------------------------------
var T2209Weapon;
(function (T2209Weapon) {
    T2209Weapon[T2209Weapon["FRAGMENTAL"] = 22091] = "FRAGMENTAL";
    T2209Weapon[T2209Weapon["LASER"] = 22092] = "LASER";
    T2209Weapon[T2209Weapon["ROCKET"] = 22093] = "ROCKET";
})(T2209Weapon = exports.T2209Weapon || (exports.T2209Weapon = {}));
