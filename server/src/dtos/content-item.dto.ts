import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { ContentType } from '../enums/content-type.enum';

export class ContentItemDTO {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(512)
  name: string;

  @IsEnum(ContentType)
  @IsNotEmpty()
  type: ContentType;

  @IsString()
  @IsOptional()
  @MaxLength(512)
  @IsUrl()
  url?: string;

  @IsString()
  @MaxLength(512)
  @IsNotEmpty()
  image: string;

  @IsOptional()
  @IsArray()
  comments: CommentDTO[];

  @IsNotEmpty()
  @IsString()
  user: string;
}

class CommentDTO {
  date: string;
  comment: string;
}
