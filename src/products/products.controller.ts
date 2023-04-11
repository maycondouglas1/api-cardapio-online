import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { Product } from './products.product.model';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product> {
    return this.productsService.findById(id);
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productsService.create(product);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() product: Product,
  ): Promise<Product> {
    return this.productsService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Product> {
    return this.productsService.delete(id);
  }
}
