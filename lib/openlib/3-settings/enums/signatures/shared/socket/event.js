"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketEvent = void 0;
var SocketEvent;
(function (SocketEvent) {
    SocketEvent["CONNECTION"] = "connection";
    SocketEvent["CONNECT"] = "connect";
    SocketEvent["RECONNECT"] = "reconnect";
    SocketEvent["MESSAGE"] = "message";
    SocketEvent["CONNECT_ERROR"] = "connect_error";
    SocketEvent["CONNECT_TIMEOUT"] = "connect_timeout";
    SocketEvent["ERROR"] = "error";
    SocketEvent["DISCONNECT"] = "disconnect";
    SocketEvent["RECONNECT_ERROR"] = "reconnect_error";
    SocketEvent["RECONNECT_FAILED"] = "reconnect_failed";
    SocketEvent["DISPOSE"] = "dispose";
    SocketEvent["SIGNAL"] = "SIGNAL";
    SocketEvent["UPGRADE"] = "UPGRADE";
})(SocketEvent || (exports.SocketEvent = SocketEvent = {}));
