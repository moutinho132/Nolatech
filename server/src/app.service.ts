import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  initBackend(): object {
    return {
      "Init":"Welcome Backend Prueba técnica Nolatech",
      Backend: 'Backend Node.Js',
      Framework: 'Nest.Js',
    };
  }
}
