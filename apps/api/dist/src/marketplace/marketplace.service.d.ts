import { PrismaService } from '../prisma/prisma.service';
export declare class MarketplaceService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): string;
}
