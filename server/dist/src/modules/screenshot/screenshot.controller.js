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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenShotController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const screenshot_entity_1 = require("../../libs/entities/screenshot.entity");
const screenshot_dto_1 = require("./screenshot.dto");
const screenshot_service_1 = require("./screenshot.service");
let ScreenShotController = class ScreenShotController {
    constructor(screenShotService) {
        this.screenShotService = screenShotService;
    }
    async screenShots(screenShotsRequest) {
        return this.screenShotService.findAll(screenShotsRequest);
    }
    async save(createScreenShotRequest) {
        await this.screenShotService.save(createScreenShotRequest);
        return 'OK';
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ type: [screenshot_entity_1.ScreenShot] }),
    (0, swagger_1.ApiOperation)({ summary: '스크린샷을 조회합니다.' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [screenshot_dto_1.ScreenShotsRequest]),
    __metadata("design:returntype", Promise)
], ScreenShotController.prototype, "screenShots", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ type: String }),
    (0, swagger_1.ApiOperation)({
        summary: '스크린샷 저장',
        description: '스크린샷을 저장합니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [screenshot_dto_1.CreateScreenShotRequest]),
    __metadata("design:returntype", Promise)
], ScreenShotController.prototype, "save", null);
ScreenShotController = __decorate([
    (0, common_1.Controller)('screenshots'),
    (0, swagger_1.ApiTags)('스크린샷 API'),
    __metadata("design:paramtypes", [screenshot_service_1.ScreenShotService])
], ScreenShotController);
exports.ScreenShotController = ScreenShotController;
