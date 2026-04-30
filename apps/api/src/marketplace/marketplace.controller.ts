
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('marketplace')
@ApiBearerAuth()
@Controller('marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  @Get()
  findAll() {
    return this.marketplaceService.findAll();
  }
}
