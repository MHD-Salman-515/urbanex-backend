import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreosPrismaService } from '../prisma/creos-prisma.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly creosPrisma: CreosPrismaService,
  ) {}

  async getHousingDbStatus(): Promise<'ok' | 'fail'> {
    try {
      await this.prisma.$queryRaw(Prisma.sql`SELECT 1`);
      return 'ok';
    } catch {
      return 'fail';
    }
  }

  async getCreosDbStatus(): Promise<'ok' | 'fail'> {
    try {
      await this.creosPrisma.$queryRaw(Prisma.sql`SELECT 1`);
      return 'ok';
    } catch {
      return 'fail';
    }
  }
}
