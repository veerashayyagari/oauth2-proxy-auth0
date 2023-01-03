import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
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
  controllers: [],
  providers: [],
})
export class AppModule {}