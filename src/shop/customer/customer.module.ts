import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer } from './entity/customer.entity';
import { CustomerMapper } from './mapper/customer.mapper';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), ProductModule],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerMapper],
  exports: [CustomerService]
})
export class CustomerModule {}
