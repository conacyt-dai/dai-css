> **ADVERTENCIA**
>
> El presente proyecto dejará de tener mantenimiento a partir de diciembre del 2022 para después ser archivado y eliminado. Esto en concordancia con 
> los lineamientos de [SALSA](https://salsa.crip.conacyt.mx/) y de la Estrategia Digital Nacional. Este proyecto se encontrará ahora dentro del grupo de
> repositorios oficiales de SALSA. Se recomienda a la persona usuaria hacer los cambios pertinentes para usar el proyecto refactorizado y en su 
> última versión, que se puede encontrar en [aquí](https://github.com/salsa-community/sisdai-css).


# Dadsig css

Biblioteca de estilos en scss con [sass](https://sass-lang.com/) para el Sitema de Diseño basado en los requerimientos de los Ecosistemas Nacionales Informáticos del Conacyt. 
Desarrollado por la Dirección de análisis de datos y sistemas de información geográfica.


## Cómo utilizar la biblioteca en un proyecto estático
Esta biblioteca utiliza las tipografias de Montserrat y Atkinson Hyperlegible de Google fonts y una tipografía de íconos publicada a través de Fontastic.

Agrega las siguientes lineas en el `<head> </head>` de tu archivo de html, que en orden de aparición son primero los links de las tipografías de Google Fonts, seguido de la tipografía para los íconos (aun en desarrollo) y al final la liga de la hoja de estilos (también en desarrollo)

``` html

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
  
  <link href="https://file.myfontastic.com/JS4TgqY9L4s8WsKQDkt5qA/icons.css" rel="stylesheet">  
  
  <link href="https://cdn.jsdelivr.net/gh/conacyt-dai/dadsig-css/dist/eni.min.css" rel="stylesheet">

```


## Cómo instalar la biblioteca en un proyecto

1. Instala la biblioteca
    ``` sh
    npm i github:conacyt-dai/dadsig-css
    ```

2. Importala la libreria
    ``` css
    @import 'dadsig-css/src/eni.scss';
    ```
    2.2 Opcional*  Se pueden importar las variables para utilizar las mismas referencias que la biblioteca en los estilos particulares de cada proyecto
    ``` css
    @import 'dadsig-css/src/_variables.scss';
    ```


## Para la edición local del proyecto

0. Prerequisitos:

    Familiaridad con la terminal o línea de comandos

    Tener [Node.js](https://nodejs.org/es/) instalado



1. Clona el repositorio con la siguiente linea en la terminal

    ``` sh
    git clone git@github.com:conacyt-dai/dadsig-css.git
    ```
    Si por alguna razón no pudiste clonar, puedes leer la 
    [documentación de Githug acerca de cómo clonar un repositorio](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

2. Instala las dependencias del proyecto

    ``` sh
    npm install
    ```

    Y del proyecto de la documencación
    ``` sh
    npm run install:docs
    ```

3. Levantar el entorno local

    ``` sh
    npm start
    ```
    Ese comando debe compilar y dejar vigilando los cambios de la carpeta `src/` que contiene los estilos en scss, levantar un entorno local de la carpeta de documentación del proyecto `docs/`
    
4. Abre tu navegador con la siguiente dirección
    ```
    http://localhost:3000
    ```


Para obtener el archivo de distribución actualizado, compila el proyecto con 
``` sh
npm run build
```
El **buld** actualiza los archivos de la carpeta de distribución `dist` que se utilizan para actualizar la **CDN** y que puedes utilizar como archivos locales copiandolos y pegandolos en tus proyectos.

