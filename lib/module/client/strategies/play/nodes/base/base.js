"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeBase = void 0;
const base_1 = require("../../../../base/base");
const openlib_1 = require("../../../../../../openlib");
const openlib_2 = require("../../../../../../openlib");
class NodeBase extends base_1.Base {
    socket;
    subject;
    uuid;
    secure;
    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------
    constructor(socket, subject, uuid, secure) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
        this.uuid = uuid;
        this.secure = secure;
    }
    // --- METHODS [PUBLIC ASYNC] --------------------------------------------------------------------------------------
    async explore() {
        const { uuid, secure } = this;
        return {
            direction: openlib_2.SignalDirection.OUT,
            type: openlib_1.SignalType.EXPLORE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure
        };
    }
}
__decorate([
    base_1.Base.request(openlib_1.SignalType.EXPLORE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NodeBase.prototype, "explore", null);
exports.NodeBase = NodeBase;
