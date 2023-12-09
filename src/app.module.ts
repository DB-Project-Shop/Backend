import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './shop/customer/customer.module';
import { MysqlModule } from './config/mysql/mysql.module';
import { AdminModule } from './shop/admin/admin.module';
import { CategoryModule } from './shop/product/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeOrm.config';
import { OrderModule } from './shop/order/order.module';
import { ReviewModule } from './shop/order/review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    CustomerModule,
    MysqlModule,
    AdminModule,
    CategoryModule,
    OrderModule,
    ReviewModule,
  ],
})
export class AppModule {}
