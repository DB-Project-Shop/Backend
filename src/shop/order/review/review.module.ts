import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { Review } from './entity/review.entity';
import { Customer } from '../../customer/entity/customer.entity';
import { Order } from '../entity/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Customer, Order])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
