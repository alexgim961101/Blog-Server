import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('API GET /');
    return 'Hello World!';
  }

  healthCheck(): string {
    return 'OK';
  }
}
