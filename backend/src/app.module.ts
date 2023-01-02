import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingModule } from './greeting/greeting.module';

@Module({
  imports: [
    GreetingModule,
    RouterModule.register([
      {
        path: '/api',
        children: [{ path: '/greeting', module: GreetingModule }],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}