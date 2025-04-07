"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const index_1 = require("../index");
const index_2 = require("../index");
class Config {
    // --- MEMBERS [PRIVATE STATIC] ------------------------------------------------------------------------------------
    static cache = {};
    // --- METHODS [PUBLIC STATIC] -------------------------------------------------------------------------------------
    static initialize() {
        const signatures = [
            '1-SLOTS/61', '1-SLOTS/62', '1-SLOTS/63', '1-SLOTS/64', '1-SLOTS/65', '1-SLOTS/66', '1-SLOTS/67',
            '1-SLOTS/68', '1-SLOTS/621', '1-SLOTS/622', '1-SLOTS/631', '1-SLOTS/632', '1-SLOTS/641', '1-SLOTS/642',
            '1-SLOTS/651', '1-SLOTS/652', '1-SLOTS/661', '1-SLOTS/662', '1-SLOTS/671', '1-SLOTS/672', '2-GRADE/GRADE',
            '3-ABILITIES/62', '3-ABILITIES/63', '3-ABILITIES/64', '3-ABILITIES/65', '3-ABILITIES/66', '3-ABILITIES/67',
            '3-ABILITIES/621', '3-ABILITIES/622', '3-ABILITIES/631', '3-ABILITIES/632', '3-ABILITIES/641',
            '3-ABILITIES/642', '3-ABILITIES/651', '3-ABILITIES/652', '3-ABILITIES/661', '3-ABILITIES/662',
            '3-ABILITIES/671', '3-ABILITIES/672', '4-EQUIPMENTS/2201', '4-EQUIPMENTS/2202', '4-EQUIPMENTS/2203',
            '4-EQUIPMENTS/2204', '4-EQUIPMENTS/2205', '4-EQUIPMENTS/2206', '4-EQUIPMENTS/2207', '4-EQUIPMENTS/2208',
            '4-EQUIPMENTS/22091', '4-EQUIPMENTS/22092', '4-EQUIPMENTS/22093', '5-QUESTS/quests', 'DSI', 'FEDERATION',
            'SETTINGS'
        ];
        for (const signature of signatures) {
            this.cache[signature] = require(`./signatures/${signature.toLowerCase()}.json`);
        }
    }
    static load(type) {
        return this.cache[type.toUpperCase()];
    }
    static settings(type, value) {
        if (value)
            value = String(value);
        const data = Config.load('SETTINGS');
        const field = data[type];
        if (field)
            return value ? field[value] : field;
    }
    static view(size, type) {
        const config = Config.settings(type);
        const item = config.find((item) => item.min <= size && (item.max ? size <= item.max : true));
        if (item)
            return item.view;
    }
    static generate(type, level) {
        const config = this.load(`4-EQUIPMENTS/${type}`);
        const target = config.configs.find((item) => item.level === level);
        if (!target)
            throw new Error(`Unable to find config for: ${type}, ${level}`);
        const sizes = Config.settings('GENERATIONS', level);
        const size = type === index_1.T22Equipment.HULL ? 0 : index_2.Utils.random(sizes.min, sizes.max);
        const view = Config.view(size, 'CRGO');
        const model = {
            uuid: index_2.Utils.uuidv4(),
            type, view,
            body: {
                vector: { x: 0, y: 0, a: 0 },
                size,
                effects: { _v: 0 },
                modifiers: { _v: 0 },
                generation: level
            }
        };
        if (type === 2202)
            model.body.ability = 100;
        if (type === 2206)
            model.body.ability = 200;
        for (const modifier of target.modifiers)
            model.body.modifiers[modifier.name] = index_2.Utils.random(modifier.min, modifier.max);
        return model;
    }
    static distance(quadrant, constellation, source, destination) {
        const config = Config.load(quadrant);
        const current = config.constellations.find((item) => item.name === constellation);
        const star1 = current.systems.find((system) => system.uuid === source);
        const star2 = current.systems.find((system) => system.uuid === destination);
        if (!star1 || !star2)
            return null;
        const x1 = star1.body.vector.x;
        const y1 = star1.body.vector.y;
        const x2 = star2.body.vector.x;
        const y2 = star2.body.vector.y;
        const x = Math.abs(x1 - x2);
        const y = Math.abs(y1 - y2);
        const delta = Math.sqrt(x * x + y * y);
        let angle = Math.atan2(y2 - y1, x2 - x1);
        if (angle < 0)
            angle = Math.PI - Math.abs(angle) + Math.PI;
        return { delta, angle };
    }
    static checkType(type) {
        return !!this.load(`4-EQUIPMENTS/${type}`);
    }
}
exports.Config = Config;
