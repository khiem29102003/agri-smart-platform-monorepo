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
exports.IotController = void 0;
const common_1 = require("@nestjs/common");
const iot_service_1 = require("./iot.service");
const swagger_1 = require("@nestjs/swagger");
let IotController = class IotController {
    iotService;
    constructor(iotService) {
        this.iotService = iotService;
    }
    findAll() {
        return this.iotService.findAll();
    }
};
exports.IotController = IotController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IotController.prototype, "findAll", null);
exports.IotController = IotController = __decorate([
    (0, swagger_1.ApiTags)('iot'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('iot'),
    __metadata("design:paramtypes", [iot_service_1.IotService])
], IotController);
//# sourceMappingURL=iot.controller.js.map