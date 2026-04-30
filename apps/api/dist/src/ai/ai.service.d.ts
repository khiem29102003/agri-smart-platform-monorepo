import { PrismaService } from '../prisma/prisma.service';
export declare class AiService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): string;
}
