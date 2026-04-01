import { Module } from '@nestjs/common';
import { CreosPrismaModule } from 'src/prisma/creos-prisma.module';
import { AdminExternalMarketController } from './admin-external-market.controller';
import { AdminExternalMarketService } from './admin-external-market.service';

@Module({
  imports: [CreosPrismaModule],
  controllers: [AdminExternalMarketController],
  providers: [AdminExternalMarketService],
  exports: [AdminExternalMarketService],
})
export class AdminExternalMarketModule {}
