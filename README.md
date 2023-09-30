# Trabajo practico integrador N°3 

- 1 [API](#api-TrailerFlix)
  - 1.1 [Modelo](#modelo-fisico)
  - 1.2 [Requisitos Previos](#requisitos-previos)

- 2 [CRUD](#crud)
    - 2.1 [Contenido](#contenido)
        - 2.1.1  [Endpoint](#endpoint-con-sus-metodos)
        - 2.1.2 [Crear nuevo contenido](#crear-nuevo-contenido)
- 3 [ERRORES](#errores)

### Modelo Fisico
![Modelo Fisico](https://i.imgur.com/GmsGjzP.png)
### API TrailerFlix.

Esta documentación describe las peticiones de creación (create), lectura (read), actualización (update) y eliminación (delete) disponibles en la API de trailers. Estas peticiones permiten interactuar con elementos existentes en la API, como registros o recursos.

### Requisitos previos

Antes de realizar peticiones de creación, asegúrate de tener la siguiente información y configuración:


- Node.js y MySQL instalados en tu sistema antes de ejecutar
- configurar las credenciales en un archivo `.env` en la raiz del proyecto como se muestra  mas adelante
- Credenciales de autenticación, si es necesario.
- Conocimiento de los campos y formatos requeridos para crear un elemento en la API.

## Archivo `.env`
```plaintext
BBDD= mi_basededatos(en este caso trailerflix)
USERNAME= mi_usuario(root)
PASSWORD= mi_contraseña_de_mysql
HOST= localhost
PORT= 3008
```
## Instación

1. Clonar el repositorio:
   
   ```bash
   git clone https://github.com/zacrow98/Integrador-3
   ```
2. Navega al directorio del proyecto:

   ```bash
   cd posts...
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor:

   ```bash
   npm start
   ```

La API estará disponible en `http://localhost:3008`.

# CRUD

## Contenido
### endpoint con sus metodos

|peticion |url |descriptcion |
|----|-----------------------------|--------------------------|
|GET| `api/contenido`|muestra todos los contenidos|
|GET| `api/contenido:id`|obtiene un contenido por su codigo|
|GET| `api/contenido:nombre`|obtiene  un contenido por parte de su nombre|
|GET| `api/contenido:genero`|obtiene  todos los titulos por su genero|
|GET| `api/contenido:categoria`|obtiene los contenidos su categoria|
|POST| `api/contenido`|agregar un contenido con las propiedades en el body|
|PUT| `api/contenido/actualiza/:id`|actualizar precio de un art contenido con las propiedades de precio en el body|
|DELETE| `api/contenido/delete/:id`|elimina el contenido por el identificador de codigo|

### Crear nuevo contenido:
- **URL**: `/api/contenido`
- **Método**: `POST`
- **Cuerpo de la Petición**:

  ```json
  {
        "poster": "imagen.jpg",
        "titulo": "Nuevo titulo",
        "categoria":"Serie/Pelicula",
        "resumen":"Texto",
        "trailer":"URL",
        "temporadas":"si tiene/-",
        "reparto":"Actores",
  }
  ```
    
### Errores

La API devuelve mensajes de error con los códigos de estado correspondientes en caso de que ocurran problemas. Asegúrate de manejar adecuadamente estos errores en tu aplicación cliente.