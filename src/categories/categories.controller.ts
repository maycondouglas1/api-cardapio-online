import { Controller, Get } from '@nestjs/common';
import { Category } from './categories.category.model';
import { CategoriesService } from './categories.service';

@Controller('category')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }
}
