import { Injectable } from '@nestjs/common';
import { Customer } from '../entity/customer.entity';
import { CustomerRegisterRequestDto } from '../dto/customer-register-request.dto';
import { CustomerRegisterResponseDto } from '../dto/customer-register-response.dto';

@Injectable()
export class CustomerMapper {
  DtoToEntity(dto: CustomerRegisterRequestDto): Customer {
    const customer = new Customer();

    customer.CustomerId = dto.CustomerId;
    customer.password = dto.password;
    customer.nickname = dto.nickname;
    customer.address = dto.address;
    customer.paymentCard = dto.paymentCard;
    customer.accountNumber = dto.accountNumber;

    return customer;
  }

  EntityToDto(customer: Customer): CustomerRegisterResponseDto {
    return {
      CustomerId: customer.CustomerId,
    };
  }
}
