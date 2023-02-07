import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { GreetingModule } from './greeting/greeting.module';
import { ViewModule } from './views/view.module';

@Module({
  imports: [
    GreetingModule,
    ViewModule,
    RouterModule.register([
      {
        path: '/api',
        children: [{ path: '/greeting', module: GreetingModule }],
      },
      {
        path: '/app',
        children: [{ path: '/logout', module: ViewModule }],
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
