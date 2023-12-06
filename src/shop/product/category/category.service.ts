import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  // 모든 카테고리 조회
  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  // 초기 카테고리 설정
  async initializeCategories(): Promise<void> {
    const categories = [
      { name: '아우터' },
      { name: '상의' },
      { name: '바지'},
      { name: '원피스'},
      { name: '스커트'},
      {name: '신발'}
    ];
  
    for (const categoryData of categories) {
      let category = await this.categoryRepository.findOne({ where: { name: categoryData.name } });
      if (!category) {
        category = this.categoryRepository.create(categoryData);
        await this.categoryRepository.save(category);
      }
    }
  }
}
