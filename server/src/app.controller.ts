import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ContentItemDTO } from './dtos/content-item.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllContents() {
    return this.appService.getAllContents();
  }

  @Post()
  storeContent(@Body() req: ContentItemDTO) {
    return this.appService.storeContent(req);
  }
}
