import { Module } from '@nestjs/common';
import { AiModule } from 'src/ai/ai.module';
import { AdvisorModule } from 'src/advisor/advisor.module';
import { ChatModule } from 'src/chat/chat.module';
import { MarketIntelligenceModule } from 'src/market-intelligence/market-intelligence.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PropertyModule } from 'src/property/property.module';
import { OwnerChatController } from './owner-chat.controller';
import { OwnerChatService } from './owner-chat.service';

@Module({
  imports: [
    PrismaModule,
    AdvisorModule,
    PropertyModule,
    AiModule,
    MarketIntelligenceModule,
    ChatModule,
  ],
  controllers: [OwnerChatController],
  providers: [OwnerChatService],
})
export class OwnerChatModule {}
