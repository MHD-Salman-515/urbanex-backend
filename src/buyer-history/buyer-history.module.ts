import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BuyerHistoryController } from './buyer-history.controller';
import { BuyerHistoryService } from './buyer-history.service';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [BuyerHistoryController],
  providers: [BuyerHistoryService],
  exports: [BuyerHistoryService],
})
export class BuyerHistoryModule {}
