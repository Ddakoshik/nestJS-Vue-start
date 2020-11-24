import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiBearerAuth()
@ApiTags('appData')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('constants')
  @ApiOperation({ summary: 'Get App Constatns' })
  getConstants(): any {  // TODO: add constant type model
    return this.appService.getConstants();
  }
}
