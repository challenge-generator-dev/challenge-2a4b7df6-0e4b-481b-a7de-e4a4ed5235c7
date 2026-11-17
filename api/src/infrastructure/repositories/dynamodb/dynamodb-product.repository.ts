// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable } from '@nestjs/common';
import { DynamoDBClient, PutItemCommand, GetItemCommand, UpdateItemCommand, DeleteItemCommand, AttributeValue } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { Product, CreateProductDto, UpdateProductDto } from '../../../domain/models/product.model';
import { ProductRepositoryPort } from '../../../domain/ports/product-repository.port';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DynamoDBProductRepository implements ProductRepositoryPort {
  private readonly docClient: DynamoDBDocumentClient;
  private readonly tableName: string;

  constructor(client: DynamoDBClient) {
    if (!client) {
      throw new Error('DynamoDBClient is required');
    }
    this.docClient = DynamoDBDocumentClient.from(client);
    this.tableName = process.env.DYNAMODB_TABLE_NAME || 'products';
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

  private mapToProduct(item: Record<string, AttributeValue>): Product {
    throw new Error('TODO(reto): mapToProduct');
  }
}