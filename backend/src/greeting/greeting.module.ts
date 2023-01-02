import { Module } from '@nestjs/common';
import { GreetingController } from './greeting.controller';
import { GreetingService } from './greeting.service';

@Module({ providers: [GreetingService], controllers: [GreetingController] })
export class GreetingModule {}
