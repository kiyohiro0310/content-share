import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ContentItemDTO } from './dtos/content-item.dto';
import { PostCommentDTO } from './dtos/post-comment.dto';

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

  @Post(':id')
  async postComment(@Param('id') id: string, @Body() req: PostCommentDTO) {
    await this.appService.updateContentComment(req);
  }
}
