import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { Repository } from 'typeorm';
import { CustomerMapper } from './mapper/customer.mapper';
import { CustomerRegisterRequestDto } from './dto/customer-register-request.dto';
import { CustomerLoginResponseDto } from './dto/customer-login-response.dto';
import { CustomerLoginRequestDto } from './dto/customer-login-request.dto';
import { NotFoundUserException } from '../../global/exception/userException/NotFoundUserException';
import { LoginInvalidPasswordException } from '../../global/exception/userException/LoginInvalidPasswordException';
import { UserIdAlreadyExistsException } from '../../global/exception/userException/UserIdAlreadyExistsException';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,

    private readonly customerMapper: CustomerMapper,
  ) {}

  async registerUCustomer(
    customerRegisterRequestDto: CustomerRegisterRequestDto,
  ): Promise<Customer> {
    const isCustomerIDExist = await this.customerRepository.findOne({
      where: { CustomerId: customerRegisterRequestDto.CustomerId },
    });
    if (isCustomerIDExist) {
      throw new UserIdAlreadyExistsException();
    }

    // Directly assign the password without encryption
    const newCustomerEntity = this.customerMapper.DtoToEntity(
      customerRegisterRequestDto,
    );
    newCustomerEntity.nickname = customerRegisterRequestDto.nickname;
    newCustomerEntity.address = customerRegisterRequestDto.address;
    newCustomerEntity.paymentCard = customerRegisterRequestDto.paymentCard;
    newCustomerEntity.accountNumber = customerRegisterRequestDto.accountNumber;
    return await this.customerRepository.save(newCustomerEntity);
  }

  async loginCustomer(
    customerLoginRequestDto: CustomerLoginRequestDto,
  ): Promise<CustomerLoginResponseDto> {
    // 유저 유효성 체크
    const customer = await this.customerRepository.findOne({
      where: { CustomerId: customerLoginRequestDto.CustomerId },
    });
    if (!customer) {
      throw new NotFoundUserException();
    }
    // 로그인 체크 (Directly compare the plain text passwords)
    if (customer && customerLoginRequestDto.password === customer.password) {
      const response: CustomerLoginResponseDto = {
        CustomerId: customer.id,
        nickname: customer.nickname,
      };
      return response;
    } else {
      throw new LoginInvalidPasswordException();
    }
  }
}
