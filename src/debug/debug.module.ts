import { Module } from '@nestjs/common';
import { DebugController } from './debug.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [AuthModule, MailModule],
  controllers: [DebugController],
})
export class DebugModule {}
