import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Admin } from 'src/shop/admin/entity/admin.entity';
import { Customer } from 'src/shop/customer/entity/customer.entity';
import { Category } from 'src/shop/product/category/entity/category.entity';
import { Product } from 'src/shop/product/entity/product.entity';

config();

const configService = new ConfigService();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: +configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [Customer, Admin, Product, Category],
  synchronize: false,
};
