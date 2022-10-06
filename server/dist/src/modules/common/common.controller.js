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
exports.CommonController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_dto_1 = require("./common.dto");
const common_service_1 = require("./common.service");
let CommonController = class CommonController {
    constructor(commonService) {
        this.commonService = commonService;
    }
    async uploadUrl() {
        return this.commonService.getUploadUrl();
    }
};
__decorate([
    (0, common_1.Get)('upload'),
    (0, swagger_1.ApiResponse)({ type: common_dto_1.UploadUrlResponse }),
    (0, swagger_1.ApiOperation)({ summary: '이미지 업로드 URL조회' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "uploadUrl", null);
CommonController = __decorate([
    (0, common_1.Controller)('commons'),
    (0, swagger_1.ApiTags)('Common API'),
    __metadata("design:paramtypes", [common_service_1.CommonService])
], CommonController);
exports.CommonController = CommonController;
