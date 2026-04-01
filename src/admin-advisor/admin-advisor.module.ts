import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CreosPrismaModule } from 'src/prisma/creos-prisma.module';
import { AdminAdvisorController } from './admin-advisor.controller';
import { AdminAdvisorService } from './admin-advisor.service';

@Module({
  imports: [AuthModule, CreosPrismaModule],
  controllers: [AdminAdvisorController],
  providers: [AdminAdvisorService, RolesGuard],
})
export class AdminAdvisorModule {}
