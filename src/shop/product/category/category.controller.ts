import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './entity/category.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // 카테고리 목록 제공
  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }
}
