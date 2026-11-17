// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable, Inject } from '@nestjs/common';
import { Product, CreateProductDto, UpdateProductDto } from '../../domain/models/product.model';
import { ProductRepositoryPort } from '../../domain/ports/product-repository.port';

@Injectable()
export class ProductService {
  constructor(
    @Inject('DYNAMODB_REPOSITORY') private readonly repository: ProductRepositoryPort
  ) {}

  async createProduct(productData: CreateProductDto): Promise<Product> {
    throw new Error('TODO(reto): createProduct');
  }

  async getProduct(id: string): Promise<Product> {
    throw new Error('TODO(reto): getProduct');
  }

  async updateProduct(id: string, updateData: UpdateProductDto): Promise<Product> {
    throw new Error('TODO(reto): updateProduct');
  }

  async deleteProduct(id: string): Promise<void> {
    throw new Error('TODO(reto): deleteProduct');
  }
}