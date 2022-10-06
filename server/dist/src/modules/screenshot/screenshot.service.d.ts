import { ScreenShot } from 'src/libs/entities/screenshot.entity';
import { Repository } from 'typeorm';
import { CreateScreenShotRequest, ScreenShotsRequest } from './screenshot.dto';
export declare class ScreenShotService {
    private readonly screenShotRepository;
    constructor(screenShotRepository: Repository<ScreenShot>);
    findAll(screenShotsRequest: ScreenShotsRequest): Promise<ScreenShot[]>;
    save(createScreenShotRequest: CreateScreenShotRequest): Promise<void>;
}
