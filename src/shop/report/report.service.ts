import { Injectable } from '@nestjs/common';
import { CustomerService } from '../customer/customer.service';
import { ProductService } from '../product/product.service';
import { OrderService } from '../order/order.service';
import { ReviewService } from '../order/review/review.service';

@Injectable()
export class ReportService {
  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    private orderService: OrderService,
    private reviewService: ReviewService
  ) {}

  async generateReport() {
    const customers = await this.customerService.findAllCustomers();
    const products = await this.productService.findAllProducts();
    const orders = await this.orderService.findAllOrders();
    const reviews = await this.reviewService.findAllReviews();

    return {
      customers,
      products,
      orders,
      reviews
    };
  }
}
