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
exports.CommonService = void 0;
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const aws_1 = require("../../libs/entities/aws");
let CommonService = class CommonService {
    constructor() { }
    async getUploadUrl() {
        const fileName = (0, uuid_1.v4)();
        const Bucket = 'elasticbeanstalk-ap-northeast-2-915776836431';
        const fullPath = `resources/${fileName}`;
        const cdn = 'https://elasticbeanstalk-ap-northeast-2-915776836431.s3.ap-northeast-2.amazonaws.com/';
        try {
            const url = await aws_1.awsS3.getSignedUrlPromise('putObject', {
                Bucket,
                Key: fullPath,
                Expires: 60 * 5,
            });
            return { url, cdn: `${cdn}${fullPath}` };
        }
        catch (e) {
            console.log(e);
            throw new Error('업로드 URL 조회 에러');
        }
    }
};
CommonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CommonService);
exports.CommonService = CommonService;
