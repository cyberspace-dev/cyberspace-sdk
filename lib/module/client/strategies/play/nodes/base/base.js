var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Base } from '../../../../base/base';
import { SignalType } from '../../../../../../openlib';
export class NodeBase extends Base {
    socket;
    subject;
    uuid;
    token;
    // --- [CONSTRUCTOR] -----------------------------------------------------------------------------------------------
    constructor(socket, subject, uuid, token) {
        super(socket, subject);
        this.socket = socket;
        this.subject = subject;
        this.uuid = uuid;
        this.token = token;
    }
    // --- METHODS [PUBLIC ASYNC] --------------------------------------------------------------------------------------
    async explore() {
        const { uuid, token } = this;
        return {
            type: SignalType.EXPLORE,
            payload: {},
            emitter: [],
            catcher: [uuid],
            secure: token,
            direction: 'out'
        };
    }
}
__decorate([
    Base.request(SignalType.EXPLORE_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NodeBase.prototype, "explore", null);
