# NestJS Framework

<p align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
  </a>
</p>

[![CircleCI](https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456)](https://circleci.com/gh/nestjs/nest)
[![NPM Version](https://img.shields.io/npm/v/@nestjs/core)](https://www.npmjs.com/~nestjscore)
[![Package License](https://img.shields.io/npm/l/@nestjs/core)](https://www.npmjs.com/~nestjscore)
[![NPM Downloads](https://img.shields.io/npm/dm/@nestjs/common)](https://www.npmjs.com/~nestjscore)
[![Discord](https://img.shields.io/badge/discord-online-brightgreen.svg)](https://discord.gg/G7Qnnhy)
[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
[![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)
[![Twitter Follow](https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow)](https://twitter.com/nestframework)

A progressive [Node.js](http://nodejs.org) framework for building efficient and scalable server-side applications.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
# Install dependencies
$ npm install

# Development mode
$ npm run start

# Watch mode
$ npm run start:dev

# Production mode
$ npm run start:prod


# Prueba Técnica Nolatech

## Tecnología Backend:
- Node.js
- Nest.js
- TypeScript
- Swagger
- TypeORM

## Descripción
Este repositorio es una aplicación de inicio para el framework NestJS con TypeScript.

El backend cumple con las especificaciones exigidas descritas a continuación:

- Desarrollar un registro de usuario y login básico en NodeJS, el diseño no es de mucha importancia, algo sencillo. Cuando el usuario inicie sesión tendrá una opción para modificar su información. La información a almacenar será la siguiente:
  - Nombre
  - Apellido
  - Usuario
  - Email
  - Contraseña

- Colocar un aviso al usuario al momento de actualizar su información (si fue hecha o no), igualmente al momento de loguearse si ha ocurrido un error.

- Contraseñas encriptadas.

- Posee los siguientes endpoints:
  - Listado de todos los usuarios (con paginación): GET /api/v1/users?page=1&count=10
  - Obtener un solo usuario: GET /api/v1/users/{ID}
  - Actualizar un usuario: UPDATE /api/v1/users/{ID}
  - Eliminar un usuario: DELETE /api/v1/users/{ID}

## Instalación
1. Descargue o clone el repositorio.
2. Instale las dependencias: `npm install`.
3. Configure su archivo `.env` con los datos de su servidor PostgreSQL:

   ```plaintext
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER= "su usuario"
   DB_PASSWORD="su password"
   DB_NAME=nolatechusers

## Creación de la Base de Datos

Si desea utilizar una base de datos específica, la aplicación creará automáticamente la base de datos. Para la creación de la base de datos, ejecute antes de arrancar la aplicación el siguiente script:

```bash
npm run m:gen -- ./src/migrations/init

## Ejecutar las Migraciones

Una vez generado el script de inicialización de la base de datos, ejecute las migraciones:

```bash
npm run m:run


##  Ejecutar la Aplicación

Para iniciar la aplicación, ejecute el siguiente comando:

```bash
npm start


## Documentación Swagger
Puede acceder a la documentación Swagger en su navegador visitando:

Documentación Swagger

Datos de Despliegue
Deploy del Backend: https://backend-user-auth.onrender.com/
Documentación del Backend Desplegado: https://backend-user-auth.onrender.com/docs

```


### Swagger

<img src="https://res.cloudinary.com/prodelevatepf/image/upload/v1707581592/prodelevatepf/tl3gwx6u3sl6re1y0emg.png" alt="Descripción de la imagen">

### Swagger Esquema
<img src="https://res.cloudinary.com/prodelevatepf/image/upload/v1707581633/prodelevatepf/uxryiapluzia4gkxyzo4.png" alt="Descripción de la imagen">

### Swagger Endpoint
<img src="https://res.cloudinary.com/prodelevatepf/image/upload/v1707581655/prodelevatepf/kapx1c0k4w5qbmclfcck.png" alt="Descripción de la imagen">



