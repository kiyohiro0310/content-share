import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { ContentItemDTO } from './dtos/content-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from './entity/content.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}
  async getAllContents() {
    let contents = [] as Content[];

    try {
      contents = await this.contentRepository.find();
    } catch (error) {
      throw new RequestTimeoutException(error);
    }

    return contents;
  }
  async storeContent(content: ContentItemDTO) {
    let newContent = null as Content | null;

    try {
      newContent = this.contentRepository.create(content);
    } catch (error) {
      throw new BadRequestException(error);
    }

    try {
      await this.contentRepository.save(newContent);
    } catch (error) {
      throw new RequestTimeoutException(error);
    }

    return { created: true, id: newContent.id };
  }
}
