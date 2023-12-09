import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CategoryService } from './shop/product/category/category.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const categoryService = app.get(CategoryService);
  await categoryService.initializeCategories(); // 카테고리 초기화
  await app.listen(8080);
}
bootstrap();
