import { Controller, Post, Body, Param } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review } from './entity/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('shop/orders')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('/:orderId/reviews')
  async createReview(
    @Param('orderId') orderId: number,
    @Body() createReviewDto: CreateReviewDto,
  ): Promise<Review> {
    createReviewDto.orderId = orderId;
    return this.reviewService.createReview(createReviewDto);
  }
}
