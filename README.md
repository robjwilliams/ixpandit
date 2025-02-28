# Pokémon Finder

Esta aplicación permite buscar Pokémons. Está construida con React, TypeScript y Vite, y utiliza Docker para facilitar su instalación y ejecución.

[LIVE DEMO](https://ixpandit.robjwilliams.com/)

## Cómo ejecutar la aplicación

### Requisitos previos

- Node.js (versión 22 o superior)
- Docker y Docker Compose

### Pasos para ejecutar la aplicación

1. **Clonar el repositorio**:

   ```sh
   git clone git@github.com:robjwilliams/ixpandit.git
   cd ixpandit
   ```

2. **Ejecutar la aplicación en desarrollo**:

   ```sh
   docker-compose up --build
   ```

   Esto construirá la imagen de Docker y ejecutará la aplicación en modo dev. La aplicación estará disponible en `http://localhost:5173`.

### Librerias

Adicionalmente se instalaron las siguientes librerias para agilizar y simplificar el desarrollo.

- **TailwindCSS**: Para estilos y posicionar elementos.
- **React Query**: Para optimizar y simplificar las solicitudes a la API.
- **ag-Grid**: Para renderizar los datos en una tabla y aprovechar sus funcionalidades como la busqueda parcial.

### Infraestructura

La aplicación está desplegada utilizando Terraform, lo que permite gestionar y automatizar la infraestructura como código. Se utilizan los siguientes servicios de AWS:

- **Route 53**: Para la gestión de DNS.
- **CloudFront**: Para la distribución de contenido con caching y optimización de carga.
- **S3**: Para el almacenamiento y hosting de los archivos estáticos de la aplicación.
- **IAM**: Para la gestión de permisos y seguridad en los diferentes servicios de AWS.

Además, la aplicación cuenta con una pipeline de CI/CD implementada con GitHub Actions, que automatiza el proceso de despliegue. Esto incluye la actualización del contenido en S3 y la invalidación de la caché en CloudFront para garantizar que los cambios sean visibles de inmediato.

### Requisitos del Proyecto

- **Diseño**: Libre elección, idealmente usando algún framework.
- **Consulta de datos**: Vía PokeApi (https://pokeapi.co/docs/v2) sin utilizar ningún wrapper ni librería pre-armada para consumir la API.
- **Búsqueda de Pokémons**: Debe permitir buscar Pokémons por nombre parcial (Ej: pika) y, idealmente, tener el resultado paginado.
- **Calidad del código**: Se valorará la simpleza y prolijidad, así como el uso de linters, testing y Docker para facilitar la instalación.
- **Repositorio público**: Compartir la solución en un repositorio público (Github, Bitbucket) con instrucciones para levantar la aplicación en el README.
