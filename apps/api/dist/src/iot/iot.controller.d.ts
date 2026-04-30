import { IotService } from './iot.service';
export declare class IotController {
    private readonly iotService;
    constructor(iotService: IotService);
    findAll(): string;
}
