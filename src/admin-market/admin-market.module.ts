import { Module } from '@nestjs/common';
import { ConfidenceService } from 'src/advisor/confidence/confidence.service';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CreosPrismaModule } from 'src/prisma/creos-prisma.module';
import { AdminMarketController } from './admin-market.controller';
import { AdminMarketService } from './admin-market.service';

@Module({
  imports: [AuthModule, CreosPrismaModule],
  controllers: [AdminMarketController],
  providers: [AdminMarketService, RolesGuard, ConfidenceService],
})
export class AdminMarketModule {}
