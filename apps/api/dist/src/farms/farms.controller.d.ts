import { FarmsService } from './farms.service';
export declare class FarmsController {
    private readonly farmsService;
    constructor(farmsService: FarmsService);
    findAll(): string;
}
