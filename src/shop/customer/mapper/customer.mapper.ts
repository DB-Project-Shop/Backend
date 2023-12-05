import { Injectable } from '@nestjs/common';
import { Customer } from '../entity/customer.entity';
import { CustomerRegisterRequestDto } from '../dto/customer-register-request.dto';
import { CustomerRegisterResponseDto } from '../dto/customer-register-response.dto';

@Injectable()
export class CustomerMapper {
  DtoToEntity({ CustomerId, password }: CustomerRegisterRequestDto): Customer {
    const customer = new Customer();

    customer.CustomerId = CustomerId;
    customer.password = password;

    return customer;
  }

  EntityToDto(customer: Customer): CustomerRegisterResponseDto {
    return {
      CustomerId: customer.CustomerId,
    };
  }
}
