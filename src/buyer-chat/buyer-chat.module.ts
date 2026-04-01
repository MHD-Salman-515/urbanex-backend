import { Module } from '@nestjs/common';
import { AiModule } from 'src/ai/ai.module';
import { AuthModule } from 'src/auth/auth.module';
import { AdvisorModule } from 'src/advisor/advisor.module';
import { ChatModule } from 'src/chat/chat.module';
import { MarketIntelligenceModule } from 'src/market-intelligence/market-intelligence.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BuyerChatController } from './buyer-chat.controller';
import { BuyerChatService } from './buyer-chat.service';
import { PropertyRankingService } from './ranking/property-ranking.service';

@Module({
  imports: [PrismaModule, AuthModule, MarketIntelligenceModule, AdvisorModule, AiModule, ChatModule],
  controllers: [BuyerChatController],
  providers: [BuyerChatService, PropertyRankingService],
  exports: [BuyerChatService],
})
export class BuyerChatModule {}
