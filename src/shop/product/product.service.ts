import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from './category/entity/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  // 상품 등록
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const category = await this.categoryRepository.findOne({ 
        where: { id: createProductDto.categoryId } 
      });
      if (!category) {
        throw new Error('Category not found');
      }

    const product = this.productRepository.create({
      ...createProductDto,
      category: category,
    });
    return this.productRepository.save(product);
  }

}
