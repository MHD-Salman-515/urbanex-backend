import { Module } from '@nestjs/common';
import { CreosPrismaService } from './creos-prisma.service';

@Module({
  providers: [CreosPrismaService],
  exports: [CreosPrismaService],
})
export class CreosPrismaModule {}
