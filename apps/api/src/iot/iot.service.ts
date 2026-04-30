
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IotService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return `This action returns all iot`;
  }
}
