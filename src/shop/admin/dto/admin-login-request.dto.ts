import { IsNotEmpty, IsString } from 'class-validator';

export class AdminLoginRequestDto {
  @IsString()
  @IsNotEmpty()
  AdminId: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
