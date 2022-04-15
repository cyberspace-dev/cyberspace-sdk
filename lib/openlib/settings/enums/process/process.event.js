"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessEvent = void 0;
var ProcessEvent;
(function (ProcessEvent) {
    ProcessEvent["EXCEPTION"] = "uncaughtException";
    ProcessEvent["REJECTION"] = "unhandledRejection";
    ProcessEvent["DISCONNECTED"] = "disconnected";
    ProcessEvent["ERROR"] = "error";
})(ProcessEvent = exports.ProcessEvent || (exports.ProcessEvent = {}));
