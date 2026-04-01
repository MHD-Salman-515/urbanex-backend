import { Module } from '@nestjs/common';
import { AiModule } from 'src/ai/ai.module';
import { AdvisorModule } from 'src/advisor/advisor.module';
import { MarketIntelligenceModule } from 'src/market-intelligence/market-intelligence.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ChatIntentService } from './chat-intent.service';
import { OllamaOrchestratorService } from './ollama-orchestrator.service';

@Module({
  imports: [PrismaModule, AdvisorModule, MarketIntelligenceModule, AiModule],
  providers: [ChatIntentService, OllamaOrchestratorService],
  exports: [ChatIntentService, OllamaOrchestratorService],
})
export class ChatModule {}
