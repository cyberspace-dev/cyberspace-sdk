"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessEvent = void 0;
var ProcessEvent;
(function (ProcessEvent) {
    ProcessEvent["EXCEPTION"] = "uncaughtException";
    ProcessEvent["REJECTION"] = "unhandledRejection";
    ProcessEvent["DISCONNECTED"] = "disconnected";
    ProcessEvent["ERROR"] = "error";
    ProcessEvent["SIGTERM"] = "SIGTERM";
    ProcessEvent["SIGINT"] = "SIGINT";
})(ProcessEvent || (exports.ProcessEvent = ProcessEvent = {}));
