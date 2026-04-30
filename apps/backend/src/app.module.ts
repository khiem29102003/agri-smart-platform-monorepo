import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FarmsModule } from './farms/farms.module';
import { AiModule } from './ai/ai.module';
import { IotModule } from './iot/iot.module';
import { MarketplaceModule } from './marketplace/marketplace.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    FarmsModule,
    AiModule,
    IotModule,
    MarketplaceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
