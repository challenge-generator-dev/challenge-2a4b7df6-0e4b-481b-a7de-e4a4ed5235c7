// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Product, CreateProductDto, UpdateProductDto } from '../../../domain/models/product.model';
import { ProductRepositoryPort } from '../../../domain/ports/product-repository.port';
import { MongoClient, Db, Collection } from 'mongodb';

export class MongoDBProductRepository implements ProductRepositoryPort {
  private readonly client: MongoClient;
  private readonly dbName: string;
  private readonly collectionName: string = 'products';
  private db: Db | null = null;
  private collection: Collection | null = null;

  constructor(client: MongoClient, dbName: string = 'products_db') {
    if (!client) {
      throw new Error('MongoClient is required');
    }
    this.client = client;
    this.dbName = dbName;
  }

  private async ensureConnection(): Promise<void> {
    throw new Error('TODO(reto): ensureConnection');
  }

  async create(productData: CreateProductDto): Promise<Product> {
    throw new Error('TODO(reto): create');
  }

  async findById(id: string): Promise<Product | null> {
    throw new Error('TODO(reto): findById');
  }

  async update(id: string, updateData: UpdateProductDto): Promise<Product> {
    throw new Error('TODO(reto): update');
  }

  async delete(id: string): Promise<void> {
    throw new Error('TODO(reto): delete');
  }

  private generateId(): string {
    throw new Error('TODO(reto): generateId');
  }
}