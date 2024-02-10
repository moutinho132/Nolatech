import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Backend API')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  initBackend(): object {
    return this.appService.initBackend();
  }
}
