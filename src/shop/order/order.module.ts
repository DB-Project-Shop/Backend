import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './entity/order.entity';
import { Customer } from '../customer/entity/customer.entity';
import { Product } from '../product/entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Customer, Product])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
