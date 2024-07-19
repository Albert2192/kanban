
# Proyecto Kanban

Este es un proyecto de desarrollo de una interfaz Kanban hecho por Alberto Aquino como parte de un test de conocimiento



## Stack Tecnológico

**Client:** React

**Server:** Larabel

**Database:** MySQL


## Instalación

## Kanban_frontend

Para la instalación de las dependencias del frontend debemos ejecutar en la raiz de la carpeta kanban_frontend en el terminal la siguiente instrucción:

```bash
  npm install
```
Con esto instalaremos todas las dependencias para ejecutar el proyecto frontend.

## kanban_backend

Para la instalación de las dependencias de laravel en el backend debemos ejecutar en la raiz de la carpeta kanban_backend en una terminar la siguiente instrucción: 
```bash
composer install
```
Seguido debemos cambiar el nombre del archivo **.env.example** a solamente **.env** y acontinuación ingresamos las credenciales de la base de datos, ejemplo:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=kanban
DB_USERNAME=root
DB_PASSWORD=
```

Este es un ejemplo de conexión a una BD MySQL y para la creación de una tabla llamada **kanban**

Seguidamente debemos generar la clave de la aplicación de laravel con la siguiente instrucción:

```bash
php artisan key:generate
```

Por último para terminar de gestionar todas las configuraciones hacemos la migración de la base de datos y los seeders si los hubiera:

```bash
php artisan migrate --seed
```


## Despliege en Local

Para poder ejecutar nuestra aplicación Kanban en local debemos de ejecutar 2 instrucciones una para el frontend y otra para el backend:

## kanban_frontend

En una terminar del kanban_frontend ejecutamos:

```bash
  npm run dev
```
Lo cual nos habilita a ingresa en nuestro navegador a la página principal de nuestra app en la siguiente ruta

```bash
http://localhost:5173/
```
## kanban_backend

En una terminar del kanban_backend ejecutamos:

```bash
  php artisan serve
```
Lo cual nos habilita nuestro backend en el puerto **8000** lo podemos comprobar en la siguiente ruta en el navegador:

```bash
http://localhost:8000/
```

## Autor

- [@albert2192](https://github.com/Albert2192)


## Screenshots

![App Screenshot](https://github.com/Albert2192/kanban/blob/main/screenshots/kanban1.png?raw=true)

