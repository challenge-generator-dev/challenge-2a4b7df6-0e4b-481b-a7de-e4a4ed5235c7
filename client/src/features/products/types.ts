/**
 * Tipos y esquemas relacionados con productos para la gestión de operaciones CRUD.
 * Estos tipos son utilizados por los componentes y hooks para interactuar con la API.
 */

import { z } from 'zod';

/**
 * Esquema de validación para un producto.
 */
export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre no puede exceder 100 caracteres'),
  description: z.string().max(500, 'La descripción no puede exceder 500 caracteres').optional(),
  price: z.number().positive('El precio debe ser un número positivo'),
  stock: z.number().int().nonnegative('El stock debe ser un número entero no negativo'),
});

/**
 * Tipo inferido del esquema ProductSchema.
 */
export type Product = z.infer<typeof ProductSchema>;

/**
 * Esquema de validación para la creación de un producto (sin ID).
 */
export const CreateProductDtoSchema = ProductSchema.omit({ id: true });

/**
 * Tipo inferido del esquema CreateProductDtoSchema.
 */
export type CreateProductDto = z.infer<typeof CreateProductDtoSchema>;

/**
 * Esquema de validación para la actualización de un producto (campos opcionales).
 */
export const UpdateProductDtoSchema = ProductSchema.partial().omit({ id: true });

/**
 * Tipo inferido del esquema UpdateProductDtoSchema.
 */
export type UpdateProductDto = z.infer<typeof UpdateProductDtoSchema>;

/**
 * Tipo para las respuestas de error de la API.
 */
export interface ApiError {
  message: string;
  statusCode: number;
  details?: unknown;
}

/**
 * Tipo para las respuestas exitosas de la API.
 */
export interface ApiSuccess<T> {
  data: T;
  message?: string;
}

/**
 * Tipo para las respuestas de la API (éxito o error).
 */
export type ApiResponse<T> = ApiSuccess<T> | ApiError;

/**
 * Tipos para los estados de carga de las operaciones CRUD.
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Tipo para el estado de una operación CRUD.
 */
export interface CrudState<T> {
  data: T | null;
  loading: LoadingState;
  error: ApiError | null;
}