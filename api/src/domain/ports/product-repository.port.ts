import { Product, CreateProductDto, UpdateProductDto } from '../models/product.model';

export interface ProductRepositoryPort {
  create(productData: CreateProductDto): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  update(id: string, updateData: UpdateProductDto): Promise<Product>;
  delete(id: string): Promise<void>;
}