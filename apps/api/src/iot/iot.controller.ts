
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { IotService } from './iot.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('iot')
@ApiBearerAuth()
@Controller('iot')
export class IotController {
  constructor(private readonly iotService: IotService) {}

  @Get()
  findAll() {
    return this.iotService.findAll();
  }
}
