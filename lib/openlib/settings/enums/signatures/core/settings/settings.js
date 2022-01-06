"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = void 0;
var Settings;
(function (Settings) {
    Settings[Settings["RADIUS"] = 200] = "RADIUS";
    // DAY = 86400000
    Settings[Settings["DAY"] = 21600000] = "DAY";
    Settings[Settings["INTERPOLATION"] = 75] = "INTERPOLATION";
    Settings[Settings["FAKE_LAG"] = 0] = "FAKE_LAG";
    Settings[Settings["EXPIRED_ENTITY_CHECK_RATE"] = 60] = "EXPIRED_ENTITY_CHECK_RATE";
    Settings[Settings["BUFFER_MASK"] = 64] = "BUFFER_MASK";
    Settings[Settings["MAX_INTERPOLATION_SO"] = 22500] = "MAX_INTERPOLATION_SO";
})(Settings = exports.Settings || (exports.Settings = {}));
