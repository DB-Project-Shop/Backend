import { IsNotEmpty } from 'class-validator';

export class CustomerRegisterRequestDto {
  @IsNotEmpty()
  CustomerId: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  paymentCard: string;

  @IsNotEmpty()
  accountNumber: string;
}
