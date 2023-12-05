import { IsNotEmpty } from 'class-validator';

export class RegisterUserRequestDto {
  @IsNotEmpty()
  userid: string;

  @IsNotEmpty()
  password: string;
}
