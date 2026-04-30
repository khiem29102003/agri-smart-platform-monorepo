
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('farms')
@ApiBearerAuth()
@Controller('farms')
export class FarmsController {
  constructor(private readonly farmsService: FarmsService) {}

  @Get()
  findAll() {
    return this.farmsService.findAll();
  }
}
