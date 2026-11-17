import axios, { AxiosInstance, AxiosError } from 'axios';
import type { Product, CreateProductDto, UpdateProductDto, ApiError, ApiResponse } from '../../features/products/types';

const API_BASE_URL = 'http://localhost:3000';

class ProductService {
  private client: AxiosInstance;

  constructor(baseUrl: string = API_BASE_URL) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ApiError>) => {
        const apiError: ApiError = {
          message: error.response?.data?.message || error.message || 'Error de conexión',
          statusCode: error.response?.status || 500,
          details: error.response?.data?.details,
        };
        return Promise.reject(apiError);
      }
    );
  }

  async createProduct(dto: CreateProductDto): Promise<Product> {
    const response = await this.client.post<Product>('/products', dto);
    return response.data;
  }

  async getProduct(id: string): Promise<Product> {
    const response = await this.client.get<Product>(`/products/${id}`);
    return response.data;
  }

  async updateProduct(id: string, dto: UpdateProductDto): Promise<Product> {
    const response = await this.client.put<Product>(`/products/${id}`, dto);
    return response.data;
  }

  async deleteProduct(id: string): Promise<void> {
    await this.client.delete(`/products/${id}`);
  }

  async getAllProducts(): Promise<Product[]> {
    const response = await this.client.get<Product[]>('/products');
    return response.data;
  }
}

export const productService = new ProductService();
export default ProductService;