"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = exports.A672Exterminator = exports.A671CorvetteCelestial = exports.A67Corvette = exports.A662Chaser = exports.A661Demolisher = exports.A66Interceptor = exports.A652Warship = exports.A651DreadnoughtMassive = exports.A65Dreadnought = exports.A642CruiserCommand = exports.A641CruiserBattle = exports.A64Cruiser = exports.A632FrigateImpulsive = exports.A631FrigateTactical = exports.A63Frigate = exports.A622DestroyerDefensive = exports.A621DestroyerHeavy = exports.A62Destroyer = exports.T2209Weapon = exports.T67Corvette = exports.T66Interceptor = exports.T65Dreadnought = exports.T64Cruiser = exports.T63Frigate = exports.T62Destroyer = exports.T23Loot = exports.T22Equipment = exports.T6Ship = exports.T5Station = exports.T2Cargo = exports.TObject = exports.SecurityLevel = exports.Quadrants = exports.EffectType = exports.Direction = exports.ModifierType = exports.DealType = exports.Settings = exports.SocketEvent = exports.CommandType = exports.SignalDirection = exports.SignalType = exports.StrategyType = exports.ProcessEvent = exports.SoundType = exports.LL = exports.Utils = exports.Config = exports.Physics = void 0;
exports.Slot = void 0;
var physics_1 = require("./1-physics/physics");
Object.defineProperty(exports, "Physics", { enumerable: true, get: function () { return physics_1.Physics; } });
var config_1 = require("./2-configs/config");
Object.defineProperty(exports, "Config", { enumerable: true, get: function () { return config_1.Config; } });
var utils_1 = require("./3-settings/utils/utils");
Object.defineProperty(exports, "Utils", { enumerable: true, get: function () { return utils_1.Utils; } });
var level_1 = require("./3-settings/enums/logs/level");
Object.defineProperty(exports, "LL", { enumerable: true, get: function () { return level_1.LL; } });
var type_1 = require("./3-settings/enums/sound/type");
Object.defineProperty(exports, "SoundType", { enumerable: true, get: function () { return type_1.SoundType; } });
var process_event_1 = require("./3-settings/enums/process/process.event");
Object.defineProperty(exports, "ProcessEvent", { enumerable: true, get: function () { return process_event_1.ProcessEvent; } });
var strategy_1 = require("./3-settings/enums/strategy/strategy");
Object.defineProperty(exports, "StrategyType", { enumerable: true, get: function () { return strategy_1.StrategyType; } });
var type_2 = require("./3-settings/enums/signal/type");
Object.defineProperty(exports, "SignalType", { enumerable: true, get: function () { return type_2.SignalType; } });
var direction_1 = require("./3-settings/enums/signal/direction");
Object.defineProperty(exports, "SignalDirection", { enumerable: true, get: function () { return direction_1.SignalDirection; } });
var type_3 = require("./3-settings/enums/signatures/sdk/command/type");
Object.defineProperty(exports, "CommandType", { enumerable: true, get: function () { return type_3.CommandType; } });
var event_1 = require("./3-settings/enums/signatures/shared/socket/event");
Object.defineProperty(exports, "SocketEvent", { enumerable: true, get: function () { return event_1.SocketEvent; } });
var settings_1 = require("./3-settings/enums/signatures/core/settings/settings");
Object.defineProperty(exports, "Settings", { enumerable: true, get: function () { return settings_1.Settings; } });
var type_4 = require("./3-settings/enums/signatures/core/deal/type");
Object.defineProperty(exports, "DealType", { enumerable: true, get: function () { return type_4.DealType; } });
var type_5 = require("./3-settings/enums/signatures/core/modifier/type");
Object.defineProperty(exports, "ModifierType", { enumerable: true, get: function () { return type_5.ModifierType; } });
var direction_2 = require("./3-settings/enums/signatures/web/direction/direction");
Object.defineProperty(exports, "Direction", { enumerable: true, get: function () { return direction_2.Direction; } });
var type_6 = require("./3-settings/enums/signatures/web/effect/type");
Object.defineProperty(exports, "EffectType", { enumerable: true, get: function () { return type_6.EffectType; } });
var quadrants_1 = require("./3-settings/enums/signatures/web/quadrants/quadrants");
Object.defineProperty(exports, "Quadrants", { enumerable: true, get: function () { return quadrants_1.Quadrants; } });
var level_2 = require("./3-settings/enums/signatures/web/security/level");
Object.defineProperty(exports, "SecurityLevel", { enumerable: true, get: function () { return level_2.SecurityLevel; } });
var object_1 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "TObject", { enumerable: true, get: function () { return object_1.TObject; } });
var object_2 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T2Cargo", { enumerable: true, get: function () { return object_2.T2Cargo; } });
var object_3 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T5Station", { enumerable: true, get: function () { return object_3.T5Station; } });
var object_4 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T6Ship", { enumerable: true, get: function () { return object_4.T6Ship; } });
var object_5 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T22Equipment", { enumerable: true, get: function () { return object_5.T22Equipment; } });
var object_6 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T23Loot", { enumerable: true, get: function () { return object_6.T23Loot; } });
var object_7 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T62Destroyer", { enumerable: true, get: function () { return object_7.T62Destroyer; } });
var object_8 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T63Frigate", { enumerable: true, get: function () { return object_8.T63Frigate; } });
var object_9 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T64Cruiser", { enumerable: true, get: function () { return object_9.T64Cruiser; } });
var object_10 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T65Dreadnought", { enumerable: true, get: function () { return object_10.T65Dreadnought; } });
var object_11 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T66Interceptor", { enumerable: true, get: function () { return object_11.T66Interceptor; } });
var object_12 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T67Corvette", { enumerable: true, get: function () { return object_12.T67Corvette; } });
var object_13 = require("./3-settings/enums/object/object");
Object.defineProperty(exports, "T2209Weapon", { enumerable: true, get: function () { return object_13.T2209Weapon; } });
var ability_1 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A62Destroyer", { enumerable: true, get: function () { return ability_1.A62Destroyer; } });
var ability_2 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A621DestroyerHeavy", { enumerable: true, get: function () { return ability_2.A621DestroyerHeavy; } });
var ability_3 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A622DestroyerDefensive", { enumerable: true, get: function () { return ability_3.A622DestroyerDefensive; } });
var ability_4 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A63Frigate", { enumerable: true, get: function () { return ability_4.A63Frigate; } });
var ability_5 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A631FrigateTactical", { enumerable: true, get: function () { return ability_5.A631FrigateTactical; } });
var ability_6 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A632FrigateImpulsive", { enumerable: true, get: function () { return ability_6.A632FrigateImpulsive; } });
var ability_7 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A64Cruiser", { enumerable: true, get: function () { return ability_7.A64Cruiser; } });
var ability_8 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A641CruiserBattle", { enumerable: true, get: function () { return ability_8.A641CruiserBattle; } });
var ability_9 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A642CruiserCommand", { enumerable: true, get: function () { return ability_9.A642CruiserCommand; } });
var ability_10 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A65Dreadnought", { enumerable: true, get: function () { return ability_10.A65Dreadnought; } });
var ability_11 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A651DreadnoughtMassive", { enumerable: true, get: function () { return ability_11.A651DreadnoughtMassive; } });
var ability_12 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A652Warship", { enumerable: true, get: function () { return ability_12.A652Warship; } });
var ability_13 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A66Interceptor", { enumerable: true, get: function () { return ability_13.A66Interceptor; } });
var ability_14 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A661Demolisher", { enumerable: true, get: function () { return ability_14.A661Demolisher; } });
var ability_15 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A662Chaser", { enumerable: true, get: function () { return ability_15.A662Chaser; } });
var ability_16 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A67Corvette", { enumerable: true, get: function () { return ability_16.A67Corvette; } });
var ability_17 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A671CorvetteCelestial", { enumerable: true, get: function () { return ability_17.A671CorvetteCelestial; } });
var ability_18 = require("./3-settings/enums/ability/ability");
Object.defineProperty(exports, "A672Exterminator", { enumerable: true, get: function () { return ability_18.A672Exterminator; } });
var events_1 = require("./3-settings/enums/signatures/web/events/events");
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return events_1.Events; } });
var slot_1 = require("./3-settings/interfaces/signatures/core/entity/parts/slot/slot");
Object.defineProperty(exports, "Slot", { enumerable: true, get: function () { return slot_1.Slot; } });
