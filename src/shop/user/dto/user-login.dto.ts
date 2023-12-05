import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  userid: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
