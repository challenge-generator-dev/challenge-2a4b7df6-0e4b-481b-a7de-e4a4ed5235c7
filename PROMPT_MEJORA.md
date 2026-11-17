# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `api/src/infrastructure/repositories/dynamodb/dynamodb-product.repository.ts` — La pieza p2 (Implementación de adaptador de salida para DynamoDB, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `api/src/application/services/product-mongodb.service.ts` — La pieza p3 (Implementación de lógica de negocio para operaciones CRUD, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `api/src/infrastructure/repositories/mongodb/mongodb-product.repository.ts` — La pieza p5 (Implementación de adaptador de salida para MongoDB, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- `api/src/infrastructure/controllers/product.controller.ts` — absorbida: fuga de la pieza p3
- `client/src/features/products/ProductTable.tsx` — La pieza p7 (Implementación de interfaz de usuario para operaciones CRUD, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `api` | `api/` | practice | server | Node | DynamoDB, MongoDB |
| `client` | `client/` | chapter, support | client | React | - |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB, MongoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `cd api && npm install --no-audit --no-fund && npm run build` — componente `api` (practice).
3. `cd client && npm install --no-audit --no-fund && npm run build` — componente `client` (chapter, support).

### Contratos entre componentes

- `api` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Herramientas

- **IntelliJ IDEA Debugger**: Depura el componente con la run-config de IntelliJ IDEA (menu Run, carpeta .run/): pone breakpoints donde implementas el reto y arranca en modo debug.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Archivos corruptos — arreglar primero

El contenido no corresponde a la extension. Regeneralos completos:

- `api/tsconfig.json` — El contenido no corresponde a un archivo json. Hay que regenerarlo completo.

### Archivos que la arquitectura del reto declara y no estan

Creálos con implementacion real, en la capa que les corresponde:

- `api/src/acceptance/f1.test.ts`
- `api/src/acceptance/f3.test.ts`

## Como saber que terminaste

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2

### Brecha de conocimiento
Construye operaciones básicas, como crear, obtener, actualizar y eliminar (CRUD), en bases de datos SQL o NoSQL utilizando definición y manipulación de datos (DDL y DML)

### Reto
- Tema: Construye operaciones CRUD en Bases de Datos SQL y NoSQL
- Seniority: trainee-l2
- Tipo: practical
- Título: Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del Entorno y Conexión a la Base de Datos — objetivo: Configurar el entorno de desarrollo y establecer la conexión a la base de datos DynamoDB y MongoDB. — entregable (NO resolver): Proyecto configurado con TypeScript 5 y conexiones exitosas a DynamoDB y MongoDB.
- Fase 2: Implementación de Operaciones CRUD en DynamoDB — objetivo: Implementar operaciones CRUD en DynamoDB para crear, obtener, actualizar y eliminar productos. — entregable (NO resolver): Operaciones CRUD implementadas y verificadas en DynamoDB.
- Fase 3: Implementación de Operaciones CRUD en MongoDB — objetivo: Implementar operaciones CRUD en MongoDB para crear, obtener, actualizar y eliminar productos. — entregable (NO resolver): Operaciones CRUD implementadas y verificadas en MongoDB.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: api/package.json ===
{
  "name": "reto-nest",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@aws-sdk/client-dynamodb": "3.1170.0",
    "@aws-sdk/lib-dynamodb": "3.1170.0",
    "@nestjs/common": "10.4.22",
    "@nestjs/core": "10.4.22",
    "@nestjs/platform-express": "10.4.22",
    "@nestjs/swagger": "8.1.1",
    "@types/uuid": "11.0.0",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "mongodb": "7.9.0",
    "reflect-metadata": "0.2.2",
    "rxjs": "7.8.2",
    "uuid": "14.0.3"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "^5.7.3",
    "jest": "29.7.0",
    "ts-jest": "29.2.5",
    "@types/jest": "29.5.14"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: api/tsconfig.json ===
// .idea
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "types": [
      "node",
      "jest"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: api/src/domain/models/product.model.ts ===
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class Product {
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;

  constructor(
    id: string,
    name: string,
    price: number,
    stock: number,
    description?: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.validateInvariants();
  }

  private validateInvariants(): void {
    if (this.price < 0) {
      throw new Error('Price cannot be negative');
    }
    if (this.stock < 0) {
      throw new Error('Stock cannot be negative');
    }
    if (!this.name || this.name.trim().length === 0) {
      throw new Error('Name is required');
    }
  }
}

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  stock?: number;
}

// === ARCHIVO: api/src/domain/ports/product-repository.port.ts ===
import { Product, CreateProductDto, UpdateProductDto } from '../models/product.model';

export interface ProductRepositoryPort {
  create(productData: CreateProductDto): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  update(id: string, updateData: UpdateProductDto): Promise<Product>;
  delete(id: string): Promise<void>;
}

// === ARCHIVO: api/src/infrastructure/repositories/dynamodb/dynamodb-product.repository.ts ===
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

// === ARCHIVO: api/src/application/services/product-mongodb.service.ts ===
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

// === ARCHIVO: api/src/infrastructure/repositories/mongodb/mongodb-product.repository.ts ===
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

// === ARCHIVO: api/src/acceptance/f2.test.ts ===
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

// === ARCHIVO: api/src/infrastructure/controllers/product.controller.ts ===
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

// === ARCHIVO: api/src/app.module.ts ===
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

// === ARCHIVO: api/src/main.ts ===
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Product Management API')
    .setDescription('API for managing products with CRUD operations')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation available at: http://localhost:${port}/docs`);
}

bootstrap();

// === ARCHIVO: client/src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// === ARCHIVO: client/package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build"
  },
  "dependencies": {
    "@types/uuid": "11.0.0",
    "axios": "1.21.1",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-router-dom": "7.18.5",
    "zod": "4.6.7"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: client/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: client/vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: client/index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: client/src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: client/src/features/products/types.ts ===
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

// === ARCHIVO: client/src/features/products/ProductTable.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useEffect } from 'react';
import type { Product } from './types';
import type ProductService from '../../shared/services/product.service';

interface ProductTableProps {
  service: ProductService;
}

export function ProductTable({ service }: ProductTableProps) {
  throw new Error('TODO(reto): anonymous');
}

// === ARCHIVO: client/src/shared/services/product.service.ts ===
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

// === ARCHIVO: client/src/shared/hooks/useProducts.ts ===
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

// === ARCHIVO: client/src/App.tsx ===
import { ProductTable } from './features/products/ProductTable';
import ProductService from './shared/services/product.service';

const API_BASE_URL = 'http://localhost:3000';

const productService = new ProductService(API_BASE_URL);

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Gestión de Productos</h1>
      </header>
      
      <main className="app-main">
        <ProductTable
          service={productService}
        />
      </main>
    </div>
  );
}

export default App;

// === ARCHIVO: .run/api.run.xml ===
<component name="ProjectRunConfigurationManager">
  <configuration default="false" name="api" type="js.build_tools.npm" nameIsGenerated="false">
    <package-json value="$PROJECT_DIR$/api/package.json" />
    <command value="run" />
    <scripts>
      <script value="start" />
    </scripts>
    <node-interpreter value="project" />
    <envs>
      <env name="DYNAMODB_ENDPOINT" value="http://localhost:8000" />
      <env name="AWS_REGION" value="us-east-1" />
      <env name="AWS_ACCESS_KEY_ID" value="local" />
      <env name="AWS_SECRET_ACCESS_KEY" value="local" />
      <env name="MONGODB_URI" value="mongodb://localhost:27017/app" />
    </envs>
    <method v="2" />
  </configuration>
</component>


// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s
  mongo:
    image: "mongo:7.0.14"
    ports:
      - "127.0.0.1:27017:27017"
    environment:
      MONGO_INITDB_DATABASE: "app"
    volumes:
      - "./infra-local/mongo/init.js:/docker-entrypoint-initdb.d/init.js:ro"
    healthcheck:
      test: ["CMD","mongosh","--quiet","--eval","db.adminCommand('ping').ok"]
      interval: 10s
      timeout: 10s
      retries: 10
      start_period: 20s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |
| MongoDB | `mongo:7.0.14` | 27017 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "app-items" "id"


// === ARCHIVO: infra-local/mongo/init.js ===
// Se ejecuta una sola vez al crear el volumen de MongoDB (docker-entrypoint-initdb.d).
db = db.getSiblingDB('app');
db.createCollection('items');
db.items.createIndex({ name: 1 });

```
