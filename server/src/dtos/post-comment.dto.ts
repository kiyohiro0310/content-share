import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class PostCommentDTO {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  date: string;

  @IsNotEmpty()
  @IsString()
  comment: string;
}
