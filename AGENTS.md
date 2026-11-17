# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL**.

| | |
|---|---|
| Tema | Construye operaciones CRUD en Bases de Datos SQL y NoSQL |
| Nivel | trainee-l2 |
| Chapter | Frontend |
| Especialidad | Node |
| Stack | TypeScript / NestJS 10 |
| Patron arquitectonico | hexagonal/clean |
| Tiempo estimado | 8 horas |

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

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `modulo raiz de Nest`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- @aws-sdk/client-dynamodb 3.1170.0
- @aws-sdk/lib-dynamodb 3.1170.0
- @nestjs/common 10.4.22
- @nestjs/core 10.4.22
- @nestjs/platform-express 10.4.22
- @nestjs/swagger 8.1.1
- @types/uuid 11.0.0
- class-transformer 0.5.1
- class-validator 0.15.1
- mongodb 7.9.0
- reflect-metadata 0.2.2
- rxjs 7.8.2
- uuid 14.0.3
- @types/express 4.17.25
- @types/node 22.20.5
- typescript 5.7.3
- jest 29.7.0
- ts-jest 29.2.5
- @types/jest 29.5.14

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Segui el orden de arranque del mapa de componentes (infraestructura local primero) y corre `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` desde la raiz: mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Configuración del Entorno y Conexión a la Base de Datos**: Proyecto configurado con TypeScript 5 y conexiones exitosas a DynamoDB y MongoDB.
- **Fase 2 — Implementación de Operaciones CRUD en DynamoDB**: Operaciones CRUD implementadas y verificadas en DynamoDB.
- **Fase 3 — Implementación de Operaciones CRUD en MongoDB**: Operaciones CRUD implementadas y verificadas en MongoDB.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `api/src/infrastructure/repositories/dynamodb/dynamodb-product.repository.ts` — La pieza p2 (Implementación de adaptador de salida para DynamoDB, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `api/src/application/services/product-mongodb.service.ts` — La pieza p3 (Implementación de lógica de negocio para operaciones CRUD, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `api/src/infrastructure/repositories/mongodb/mongodb-product.repository.ts` — La pieza p5 (Implementación de adaptador de salida para MongoDB, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `api/src/infrastructure/controllers/product.controller.ts` — absorbida: fuga de la pieza p3
- [ ] `client/src/features/products/ProductTable.tsx` — La pieza p7 (Implementación de interfaz de usuario para operaciones CRUD, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).

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

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Usar TypeScript 5 en todo el proyecto (dependencia typescript en package.json) | chequeo estatico (manifest): exige `"typescript": "^5` | Verificada |
| No usar Redux; el estado de la interfaz se maneja con hooks de React | chequeo estatico (code): prohibe `Redux`, `createStore`, `useDispatch`, `useSelector` | Verificada |
| Las pruebas de aceptacion cubren editar y eliminar un producto de la tabla | sin ubicar | Verificada |
| Las pruebas de aceptacion cubren editar y eliminar un producto de la tabla | sin ubicar | Verificada |

## Lo que falta y tenes que completar

### Archivos corruptos (1) — arreglá esto primero

El contenido de estos archivos no corresponde a su extension. Regeneralos completos:

- [ ] `api/tsconfig.json` — El contenido no corresponde a un archivo json. Hay que regenerarlo completo.

### 1. Archivos que la arquitectura declara (2 de 20)

La propuesta arquitectonica del reto los lista y no llegaron al repo. Crealos con implementacion real, respetando la capa en la que viven:

- [ ] `api/src/acceptance/f1.test.ts`
- [ ] `api/src/acceptance/f3.test.ts`

### Presentes (27)

- `api/package.json`
- `api/tsconfig.json`
- `api/src/domain/models/product.model.ts`
- `api/src/domain/ports/product-repository.port.ts`
- `api/src/infrastructure/repositories/dynamodb/dynamodb-product.repository.ts`
- `api/src/application/services/product-mongodb.service.ts`
- `api/src/infrastructure/repositories/mongodb/mongodb-product.repository.ts`
- `api/src/acceptance/f2.test.ts`
- `api/src/infrastructure/controllers/product.controller.ts`
- `api/src/app.module.ts`
- `api/src/main.ts`
- `client/src/main.tsx`
- `client/package.json`
- `client/tsconfig.json`
- `client/vite.config.ts`
- `client/index.html`
- `client/src/vite-env.d.ts`
- `client/src/features/products/types.ts`
- `client/src/features/products/ProductTable.tsx`
- `client/src/shared/services/product.service.ts`
- `client/src/shared/hooks/useProducts.ts`
- `client/src/App.tsx`
- `.run/api.run.xml`
- `docker-compose.yml`
- `infra-local/README.md`
- `infra-local/dynamodb/create-tables.sh`
- `infra-local/mongo/init.js`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `api` (presente)
- `api/src/domain/models` (presente)
- `api/src/domain/ports` (presente)
- `api/src/application/services` (presente)
- `api/src/infrastructure/repositories/dynamodb` (presente)
- `api/src/infrastructure/repositories/mongodb` (presente)
- `api/src/infrastructure/controllers` (presente)
- `api/src/infrastructure/modules/dynamodb` (ausente)
- `api/src/infrastructure/modules/mongodb` (ausente)
- `client` (presente)
- `client/src/features/products` (presente)
- `client/src/shared/components` (ausente)
- `client/src/shared/hooks` (presente)
- `client/src/shared/services` (presente)

## Verificacion

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- Cada componente vive en su carpeta: instala y compila dentro de ella, y no muevas archivos entre componentes.
- Respeta los contratos entre componentes (endpoints, topics) tal como estan declarados en el mapa de componentes.
- El patron es **hexagonal/clean**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2
- Brecha que el reto ataca: Construye operaciones básicas, como crear, obtener, actualizar y eliminar (CRUD), en bases de datos SQL o NoSQL utilizando definición y manipulación de datos (DDL y DML)

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
