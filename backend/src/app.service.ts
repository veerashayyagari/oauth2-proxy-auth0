import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello From NestJS app. You are authenticated using OAuth2 Proxy';
  }
}
