import { ProductService } from '../application/services/product-mongodb.service';
import { Product, CreateProductDto, UpdateProductDto } from '../domain/models/product.model';
import { ProductRepositoryPort } from '../domain/ports/product-repository.port';

describe('ProductService (f2)', () => {
  let service: ProductService;
  let mockRepository: jest.Mocked<ProductRepositoryPort>;

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    service = new ProductService(mockRepository);
  });

  describe('should create a product', () => {
    it('should create a product with valid data', async () => {
      const createDto: CreateProductDto = {
        name: 'Test Product',
        description: 'Test Description',
        price: 100,
        stock: 10,
      };

      const mockProduct = new Product('123', 'Test Product', 100, 10, 'Test Description');
      mockRepository.create.mockResolvedValue(mockProduct);

      const result = await service.createProduct(createDto);

      expect(result).toBeInstanceOf(Product);
      expect(result.name).toBe(createDto.name);
      expect(mockRepository.create).toHaveBeenCalledWith(createDto);
    });

    it('should throw error when name is empty', async () => {
      const createDto: CreateProductDto = {
        name: '',
        description: 'Test Description',
        price: 100,
        stock: 10,
      };

      await expect(service.createProduct(createDto)).rejects.toThrow('Product name is required');
    });

    it('should throw error when price is negative', async () => {
      const createDto: CreateProductDto = {
        name: 'Test Product',
        description: 'Test Description',
        price: -10,
        stock: 10,
      };

      await expect(service.createProduct(createDto)).rejects.toThrow('Product price cannot be negative');
    });

    it('should throw error when stock is negative', async () => {
      const createDto: CreateProductDto = {
        name: 'Test Product',
        description: 'Test Description',
        price: 100,
        stock: -5,
      };

      await expect(service.createProduct(createDto)).rejects.toThrow('Product stock cannot be negative');
    });
  });

  describe('should get a product by id', () => {
    it('should get a product by id', async () => {
      const mockProduct = new Product('123', 'Test Product', 100, 10, 'Description');
      mockRepository.findById.mockResolvedValue(mockProduct);

      const result = await service.getProduct('123');

      expect(result).toBeInstanceOf(Product);
      expect(result.id).toBe('123');
      expect(mockRepository.findById).toHaveBeenCalledWith('123');
    });

    it('should throw error when product not found', async () => {
      mockRepository.findById.mockResolvedValue(null);

      await expect(service.getProduct('nonexistent')).rejects.toThrow('Product with id nonexistent not found');
    });

    it('should throw error when id is empty', async () => {
      await expect(service.getProduct('')).rejects.toThrow('Product ID is required');
    });
  });

  describe('should update a product', () => {
    it('should update a product with valid data', async () => {
      const existingProduct = new Product('123', 'Old Name', 50, 5, 'Old Description');
      const updateData: UpdateProductDto = {
        name: 'New Name',
        price: 150,
      };
      const updatedProduct = new Product('123', 'New Name', 150, 5, 'Old Description');

      mockRepository.findById.mockResolvedValue(existingProduct);
      mockRepository.update.mockResolvedValue(updatedProduct);

      const result = await service.updateProduct('123', updateData);

      expect(result).toBeInstanceOf(Product);
      expect(result.name).toBe('New Name');
      expect(result.price).toBe(150);
    });

    it('should throw error when price is negative', async () => {
      const updateData: UpdateProductDto = {
        price: -10,
      };

      await expect(service.updateProduct('123', updateData)).rejects.toThrow('Product price cannot be negative');
    });

    it('should throw error when stock is negative', async () => {
      const updateData: UpdateProductDto = {
        stock: -5,
      };

      await expect(service.updateProduct('123', updateData)).rejects.toThrow('Product stock cannot be negative');
    });
  });

  describe('should delete a product', () => {
    it('should delete a product', async () => {
      const mockProduct = new Product('123', 'Test Product', 100, 10);
      mockRepository.findById.mockResolvedValue(mockProduct);
      mockRepository.delete.mockResolvedValue();

      await service.deleteProduct('123');

      expect(mockRepository.delete).toHaveBeenCalledWith('123');
    });

    it('should throw error when product not found', async () => {
      mockRepository.findById.mockResolvedValue(null);

      await expect(service.deleteProduct('nonexistent')).rejects.toThrow('Product with id nonexistent not found');
    });

    it('should throw error when id is empty', async () => {
      await expect(service.deleteProduct('')).rejects.toThrow('Product ID is required');
    });
  });
});