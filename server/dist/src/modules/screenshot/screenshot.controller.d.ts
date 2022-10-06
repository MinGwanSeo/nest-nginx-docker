import { ScreenShot } from 'src/libs/entities/screenshot.entity';
import { CreateScreenShotRequest, ScreenShotsRequest } from './screenshot.dto';
import { ScreenShotService } from './screenshot.service';
export declare class ScreenShotController {
    private readonly screenShotService;
    constructor(screenShotService: ScreenShotService);
    screenShots(screenShotsRequest: ScreenShotsRequest): Promise<ScreenShot[]>;
    save(createScreenShotRequest: CreateScreenShotRequest): Promise<string>;
}
