import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(512)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(512)
  email: string;
}
