import { PrismaService } from '../prisma/prisma.service';
export declare class IotService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): string;
}
