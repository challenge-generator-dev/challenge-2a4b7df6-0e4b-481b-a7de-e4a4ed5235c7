# Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL

El sistema de gestión de productos requiere la implementación de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en bases de datos SQL y NoSQL. Debes utilizar definición y manipulación de datos (DDL y DML) para interactuar con las bases de datos DynamoDB y MongoDB. El sistema debe permitir a los usuarios crear, obtener, actualizar y eliminar productos de la tabla de productos.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construye operaciones CRUD en Bases de Datos SQL y NoSQL |
| **Nivel** | trainee-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Configuración del Entorno y Conexión a la Base de Datos

**Objetivo:** Configurar el entorno de desarrollo y establecer la conexión a la base de datos DynamoDB y MongoDB.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configura el proyecto para usar TypeScript 5.
- Establece la conexión a DynamoDB y MongoDB utilizando las dependencias necesarias.
- Verifica que la conexión a las bases de datos sea exitosa.

**Entregable:** Proyecto configurado con TypeScript 5 y conexiones exitosas a DynamoDB y MongoDB.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar y verificar la configuración del entorno.

</details>

### Fase 2: Implementación de Operaciones CRUD en DynamoDB

**Objetivo:** Implementar operaciones CRUD en DynamoDB para crear, obtener, actualizar y eliminar productos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa las operaciones CRUD en DynamoDB utilizando DDL y DML.
- Crea, obtén, actualiza y elimina productos en la tabla de productos de DynamoDB.
- Verifica que las operaciones CRUD funcionen correctamente.

**Entregable:** Operaciones CRUD implementadas y verificadas en DynamoDB.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar y verificar las operaciones CRUD en DynamoDB.

</details>

### Fase 3: Implementación de Operaciones CRUD en MongoDB

**Objetivo:** Implementar operaciones CRUD en MongoDB para crear, obtener, actualizar y eliminar productos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa las operaciones CRUD en MongoDB utilizando DDL y DML.
- Crea, obtén, actualiza y elimina productos en la tabla de productos de MongoDB.
- Verifica que las operaciones CRUD funcionen correctamente.

**Entregable:** Operaciones CRUD implementadas y verificadas en MongoDB.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar y verificar las operaciones CRUD en MongoDB.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las operaciones CRUD y cómo se implementan en bases de datos SQL y NoSQL?
- **paraQueSirve**: ¿Para qué sirven las operaciones CRUD en un sistema de gestión de productos?
- **comoSeUsa**: ¿Cómo se utilizan las operaciones CRUD en DynamoDB y MongoDB?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar operaciones CRUD en bases de datos SQL y NoSQL?

## Criterios de Evaluacion

- Configuración del entorno con TypeScript 5 y conexiones exitosas a DynamoDB y MongoDB.
- Implementación de operaciones CRUD en DynamoDB utilizando DDL y DML.
- Implementación de operaciones CRUD en MongoDB utilizando DDL y DML.
- Verificación del funcionamiento correcto de las operaciones CRUD en DynamoDB y MongoDB.

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Configuración del Entorno y Conexión a la Base de Datos | Definición de puertos abstractos para acceso a datos | — | El proyecto tiene configurado TypeScript 5 en package.json; Existen interfaces de puertos para DynamoDB y MongoDB que abstraen las operaciones CRUD; Las conexiones a DynamoDB y MongoDB se establecen correctamente mediante clientes concretos en adaptadores de salida | — | — |
| f1 — Configuración del Entorno y Conexión a la Base de Datos | Implementación de adaptador de salida para DynamoDB | `api/src/infrastructure/repositories/dynamodb/dynamodb-product.repository.ts:DynamoDBProductRepository` | El proyecto tiene configurado TypeScript 5 en package.json; Existen interfaces de puertos para DynamoDB y MongoDB que abstraen las operaciones CRUD; Las conexiones a DynamoDB y MongoDB se establecen correctamente mediante clientes concretos en adaptadores de salida | — | — |
| f2 — Implementación de Operaciones CRUD en DynamoDB | Implementación de lógica de negocio para operaciones CRUD | `api/src/application/services/product-mongodb.service.ts:ProductService` | Se implementan las operaciones create, read, update y delete para productos en DynamoDB; El servicio de dominio usa un puerto para abstraer el acceso a DynamoDB; Las operaciones CRUD se prueban con casos de aceptación que verifican el comportamiento esperado | `api/src/acceptance/f2.test.ts` | `cd api && npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f2.test.ts` |
| f2 — Implementación de Operaciones CRUD en DynamoDB | Definición de tabla DynamoDB con Terraform | `api/src/infrastructure/repositories/dynamodb/dynamodb-product.repository.ts:modules/dynamodb/product_table.tf::aws_dynamodb_table.products` | Se implementan las operaciones create, read, update y delete para productos en DynamoDB; El servicio de dominio usa un puerto para abstraer el acceso a DynamoDB; Las operaciones CRUD se prueban con casos de aceptación que verifican el comportamiento esperado | `api/src/acceptance/f2.test.ts` | `cd api && npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f2.test.ts` |
| f3 — Implementación de Operaciones CRUD en MongoDB | Implementación de adaptador de salida para MongoDB | `api/src/infrastructure/repositories/mongodb/mongodb-product.repository.ts:MongoDBProductRepository` | Se implementan las operaciones create, read, update y delete para productos en MongoDB; El servicio de dominio usa un puerto para abstraer el acceso a MongoDB; Las operaciones CRUD se prueban con casos de aceptación que verifican el comportamiento esperado | — | — |
| f3 — Implementación de Operaciones CRUD en MongoDB | Reutilización de lógica de negocio para MongoDB | `api/src/application/services/product-mongodb.service.ts:ProductService` | Se implementan las operaciones create, read, update y delete para productos en MongoDB; El servicio de dominio usa un puerto para abstraer el acceso a MongoDB; Las operaciones CRUD se prueban con casos de aceptación que verifican el comportamiento esperado | — | — |
| f3 — Implementación de Operaciones CRUD en MongoDB | Implementación de interfaz de usuario para operaciones CRUD | `client/src/features/products/ProductTable.tsx:ProductTable` | Se implementan las operaciones create, read, update y delete para productos en MongoDB; El servicio de dominio usa un puerto para abstraer el acceso a MongoDB; Las operaciones CRUD se prueban con casos de aceptación que verifican el comportamiento esperado | — | — |

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Usar TypeScript 5 en todo el proyecto (dependencia typescript en package.json) | chequeo estatico (manifest): exige `"typescript": "^5` | Verificada |
| No usar Redux; el estado de la interfaz se maneja con hooks de React | chequeo estatico (code): prohibe `Redux`, `createStore`, `useDispatch`, `useSelector` | Verificada |
| Las pruebas de aceptacion cubren editar y eliminar un producto de la tabla | sin ubicar | Verificada |
| Las pruebas de aceptacion cubren editar y eliminar un producto de la tabla | sin ubicar | Verificada |

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

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
