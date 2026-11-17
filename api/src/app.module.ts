import { Module } from '@nestjs/common';
import { ProductController } from './infrastructure/controllers/product.controller';
import { ProductService } from './application/services/product-mongodb.service';
import { DynamoDBProductRepository } from './infrastructure/repositories/dynamodb/dynamodb-product.repository';
import { MongoDBProductRepository } from './infrastructure/repositories/mongodb/mongodb-product.repository';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { MongoClient } from 'mongodb';

@Module({
  controllers: [ProductController],
  providers: [
    {
      provide: 'DYNAMODB_CLIENT',
      useFactory: () => {
        const client = new DynamoDBClient({
          region: process.env.AWS_REGION || 'us-east-1',
          endpoint: process.env.DYNAMODB_ENDPOINT,
          credentials: process.env.AWS_ACCESS_KEY_ID
            ? {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
              }
            : undefined,
        });
        return DynamoDBDocumentClient.from(client);
      },
    },
    {
      provide: 'DYNAMODB_REPOSITORY',
      useFactory: (client: DynamoDBClient) => {
        return new DynamoDBProductRepository(client);
      },
      inject: ['DYNAMODB_CLIENT'],
    },
    {
      provide: 'MONGODB_CLIENT',
      useFactory: () => {
        const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
        const client = new MongoClient(uri);
        return client;
      },
    },
    {
      provide: 'MONGODB_REPOSITORY',
      useFactory: (client: MongoClient) => {
        return new MongoDBProductRepository(
          client,
          process.env.MONGODB_DB_NAME || 'products_db',
        );
      },
      inject: ['MONGODB_CLIENT'],
    },
    {
      provide: ProductService,
      useFactory: (dynamoRepo: DynamoDBProductRepository) => {
        const repositoryType = process.env.REPOSITORY_TYPE || 'dynamodb';
        if (repositoryType === 'mongodb') {
          const mongoRepo = new MongoDBProductRepository(
            new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017'),
            process.env.MONGODB_DB_NAME || 'products_db',
          );
          return new ProductService(mongoRepo);
        }
        return new ProductService(dynamoRepo);
      },
      inject: ['DYNAMODB_REPOSITORY', 'MONGODB_REPOSITORY'],
    },
  ],
})
export class AppModule {}