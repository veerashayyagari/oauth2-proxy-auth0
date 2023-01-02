import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getHello(): string {
    return `Hello from ${process.env.HOSTNAME || 'Non Container Environment'}`;
  }
}
