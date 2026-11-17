// TODO(reto): archivo stubbeado; implementa los cuerpos.
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ProductService } from '../../application/services/product-mongodb.service';
import { Product, CreateProductDto, UpdateProductDto } from '../../domain/models/product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    throw new Error('TODO(reto): Post');
  }

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    throw new Error('TODO(reto): Get');
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    throw new Error('TODO(reto): Put');
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProduct(@Param('id') id: string): Promise<void> {
    throw new Error('TODO(reto): Delete');
  }
}