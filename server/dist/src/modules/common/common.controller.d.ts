import { UploadUrlResponse } from './common.dto';
import { CommonService } from './common.service';
export declare class CommonController {
    private readonly commonService;
    constructor(commonService: CommonService);
    uploadUrl(): Promise<UploadUrlResponse>;
}
