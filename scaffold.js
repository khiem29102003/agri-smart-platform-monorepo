const fs = require('fs');
const path = require('path');

const backendSrcPath = path.join(__dirname, 'apps', 'backend', 'src');

const modules = ['auth', 'users', 'farms', 'ai', 'iot', 'marketplace'];

modules.forEach(mod => {
    const dir = path.join(backendSrcPath, mod);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const Name = mod.charAt(0).toUpperCase() + mod.slice(1);

    // Module
    fs.writeFileSync(path.join(dir, `${mod}.module.ts`), `
import { Module } from '@nestjs/common';
import { ${Name}Controller } from './${mod}.controller';
import { ${Name}Service } from './${mod}.service';

@Module({
  controllers: [${Name}Controller],
  providers: [${Name}Service],
  exports: [${Name}Service]
})
export class ${Name}Module {}
`);

    // Controller
    fs.writeFileSync(path.join(dir, `${mod}.controller.ts`), `
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ${Name}Service } from './${mod}.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('${mod}')
@ApiBearerAuth()
@Controller('${mod}')
export class ${Name}Controller {
  constructor(private readonly ${mod}Service: ${Name}Service) {}

  @Get()
  findAll() {
    return this.${mod}Service.findAll();
  }
}
`);

    // Service
    fs.writeFileSync(path.join(dir, `${mod}.service.ts`), `
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ${Name}Service {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return \`This action returns all ${mod}\`;
  }
}
`);
});

console.log("Scaffolding complete");
