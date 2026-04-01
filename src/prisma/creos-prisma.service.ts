import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { loadLocalEnvFiles } from 'src/config/runtime-env';

@Injectable()
export class CreosPrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    loadLocalEnvFiles();

    const creosDatabaseUrl = process.env.CREOS_DATABASE_URL;
    if (!creosDatabaseUrl) {
      throw new Error(
        'CREOS_DATABASE_URL is required for CreosPrismaService',
      );
    }

    super({
      datasourceUrl: creosDatabaseUrl,
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
