import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  async getHealth(): Promise<{
    status: 'ok';
    db_housing: 'ok' | 'fail';
    db_creos: 'ok' | 'fail';
    time: string;
  }> {
    const [dbHousing, dbCreos] = await Promise.all([
      this.healthService.getHousingDbStatus(),
      this.healthService.getCreosDbStatus(),
    ]);

    return {
      status: 'ok',
      db_housing: dbHousing,
      db_creos: dbCreos,
      time: new Date().toISOString(),
    };
  }
}
