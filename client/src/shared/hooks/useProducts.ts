import { useCallback } from 'react';
import type { Product, CreateProductDto, UpdateProductDto, ApiError, LoadingState, CrudState } from '../../features/products/types';
import ProductService from '../services/product.service';

interface UseProductsReturn extends CrudState<Product[]> {
  createProduct: (dto: CreateProductDto) => Promise<Product | null>;
  getProduct: (id: string) => Promise<Product | null>;
  updateProduct: (id: string, dto: UpdateProductDto) => Promise<Product | null>;
  deleteProduct: (id: string) => Promise<boolean>;
  refetch: () => Promise<void>;
}

export function useProducts(service: ProductService = new ProductService()): UseProductsReturn {
  const createProduct = useCallback(
    async (dto: CreateProductDto): Promise<Product | null> => {
      try {
        return await service.createProduct(dto);
      } catch (err) {
        const apiError = err as ApiError;
        throw apiError;
      }
    },
    [service]
  );

  const getProduct = useCallback(
    async (id: string): Promise<Product | null> => {
      try {
        return await service.getProduct(id);
      } catch (err) {
        const apiError = err as ApiError;
        throw apiError;
      }
    },
    [service]
  );

  const updateProduct = useCallback(
    async (id: string, dto: UpdateProductDto): Promise<Product | null> => {
      try {
        return await service.updateProduct(id, dto);
      } catch (err) {
        const apiError = err as ApiError;
        throw apiError;
      }
    },
    [service]
  );

  const deleteProduct = useCallback(
    async (id: string): Promise<boolean> => {
      try {
        await service.deleteProduct(id);
        return true;
      } catch (err) {
        const apiError = err as ApiError;
        throw apiError;
      }
    },
    [service]
  );

  const refetch = useCallback(async () => {
    await service.getAllProducts();
  }, [service]);

  return {
    data: null,
    loading: 'idle' as LoadingState,
    error: null,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    refetch,
  };
}

export default useProducts;