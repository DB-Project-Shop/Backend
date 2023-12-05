import { IsNotEmpty } from 'class-validator';

export class CustomerRegisterRequestDto {
  @IsNotEmpty()
  CustomerId: string;

  @IsNotEmpty()
  password: string;
}
