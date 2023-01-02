import { Controller, Get, Req, Headers } from '@nestjs/common';
import { GreetingService } from './greeting.service';
import { Request } from 'express';

@Controller()
export class GreetingController {
  constructor(private readonly greetingService: GreetingService) {}

  @Get()
  getHello(): string {
    return this.greetingService.getHello();
  }

  @Get('headers')
  getHeaders(@Req() request: Request) {
    return request.headers;
  }

  @Get('claims')
  getClaims(@Headers('Authorization') token: string) {
    if (token && token.length > 0) {
      const payload = token.split('.')[1];
      if (payload && payload.length > 0) {
        return JSON.parse(Buffer.from(payload, 'base64').toString('utf8'));
      } else {
        return 'Payload Not Found';
      }
    } else {
      return 'Token Not Found';
    }
  }
}
