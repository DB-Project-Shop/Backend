import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entity/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { Customer } from '../../customer/entity/customer.entity';
import { Order } from '../entity/order.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createReview(createReviewDto: CreateReviewDto): Promise<any> {
    const customer = await this.customerRepository.findOne({
      where: { id: createReviewDto.customerId },
    });
    const order = await this.orderRepository.findOne({
      where: { id: createReviewDto.orderId },
    });

    if (!customer || !order) {
      throw new NotFoundException('Customer or Order not found');
    }

    const { rating, content } = createReviewDto;

    // 리뷰 객체 생성 및 저장
    const review = this.reviewRepository.create({
      customer: customer,
      order: order,
      rating: rating,
      content: content,
    });

    await this.reviewRepository.save(review);

    return {
      customer: customer.nickname,
      order: order.productName,
      review: {
        reviewId: review.id,
        rating: rating,
        content: content,
      },
    };
  }
}
