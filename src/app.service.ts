import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello I am Learnning NestJS with TypeScript version 6.0.3 and NodeNext module system!';
  }
}
