
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AiService } from './ai.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('ai')
@ApiBearerAuth()
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Get()
  findAll() {
    return this.aiService.findAll();
  }
}
