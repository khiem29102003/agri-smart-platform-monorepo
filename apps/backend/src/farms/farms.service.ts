
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FarmsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return `This action returns all farms`;
  }
}
