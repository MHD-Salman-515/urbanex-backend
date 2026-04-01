import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { CreosPrismaModule } from 'src/prisma/creos-prisma.module';

@Module({
  imports: [CreosPrismaModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
