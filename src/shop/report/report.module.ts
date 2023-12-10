import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { CustomerModule } from '../customer/customer.module';
import { ProductModule } from '../product/product.module';
import { OrderModule } from '../order/order.module';
import { ReviewModule } from '../order/review/review.module';

@Module({
  imports: [
    CustomerModule,
    ProductModule,
    OrderModule,
    ReviewModule
  ],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}
