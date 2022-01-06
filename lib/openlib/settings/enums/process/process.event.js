export var ProcessEvent;
(function (ProcessEvent) {
    ProcessEvent["EXCEPTION"] = "uncaughtException";
    ProcessEvent["REJECTION"] = "unhandledRejection";
    ProcessEvent["DISCONNECTED"] = "disconnected";
    ProcessEvent["ERROR"] = "error";
})(ProcessEvent || (ProcessEvent = {}));
