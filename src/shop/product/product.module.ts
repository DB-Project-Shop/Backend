import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service'; 
import { ProductController } from './product.controller'; 
import { Product } from './entity/product.entity';
import { Category } from './category/entity/category.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])], 
  controllers: [ProductController], 
  providers: [ProductService], 
  exports: [ProductService] 
})
export class ProductModule {}
