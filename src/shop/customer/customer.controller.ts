import { Body, Controller, HttpStatus, Post, Res, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerMapper } from './mapper/customer.mapper';
import { CustomerRegisterRequestDto } from './dto/customer-register-request.dto';
import { CustomerLoginRequestDto } from './dto/customer-login-request.dto';
import { Response } from 'express';
import { ProductService } from '../product/product.service';

@Controller('shop/customers')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly customerMapper: CustomerMapper,
    private readonly productService: ProductService,
  ) {}

  @Post('/register')
  async registerCutomer(
    @Body() customerRegisterRequestDto: CustomerRegisterRequestDto,
    @Res() res: Response,
  ): Promise<void> {
    const newCustomer = await this.customerService.registerUCustomer(
      customerRegisterRequestDto,
    );
    const response = this.customerMapper.EntityToDto(newCustomer);
    res.status(HttpStatus.CREATED).json(response);
  }

  @Post('/login')
  async loginCustomer(
    @Body() customerLoginRequestDto: CustomerLoginRequestDto,
    @Res() res: Response,
  ): Promise<void> {
    const response = await this.customerService.loginCustomer(
      customerLoginRequestDto,
    );
    res.status(HttpStatus.OK).send(response);
  }

  @Get('/products')
  async getAllProducts(@Res() res: Response) {
    const products = await this.productService.findAllProducts();
    res.status(HttpStatus.OK).json(products);
  }
}
