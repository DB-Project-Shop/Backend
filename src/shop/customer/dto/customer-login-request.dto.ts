import { IsNotEmpty, IsString } from 'class-validator';

export class CustomerLoginRequestDto {
  @IsString()
  @IsNotEmpty()
  CustomerId: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
