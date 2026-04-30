import { PrismaService } from '../prisma/prisma.service';
export declare class FarmsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): string;
}
