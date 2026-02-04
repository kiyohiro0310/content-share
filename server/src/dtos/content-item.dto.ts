import {
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
  @IsNotEmpty()
  @MaxLength(512)
  @IsUrl()
  url: string;

  @IsString()
  @MaxLength(512)
  @IsNotEmpty()
  image: string;
}
