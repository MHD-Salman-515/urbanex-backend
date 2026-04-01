import { Module } from '@nestjs/common';
import { ConfidenceService } from '../advisor/confidence/confidence.service';
import { AuthModule } from '../auth/auth.module';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreosPrismaModule } from '../prisma/creos-prisma.module';
import { AdminMarketController } from './admin-market.controller';
import { AdminMarketService } from './admin-market.service';

@Module({
  imports: [AuthModule, CreosPrismaModule],
  controllers: [AdminMarketController],
  providers: [AdminMarketService, RolesGuard, ConfidenceService],
})
export class AdminMarketModule {}
