# DAIcss

Biblioteca de estilos en scss con [sass](https://sass-lang.com/) para el Sitema de Diseño basado en los requerimientos de los Ecosistemas Nacionales Informáticos del Conacyt. 



## Cómo utilizar la biblioteca en tu proyecto
Esta biblioteca utiliza las tipografias de Montserrat y Atkinson Hyperlegible de Google fonts y una tipografía de íconos publicada a través de Fontastic.

Agrega las siguientes lineas en el `<head> </head>` de tu archivo de html, que en orden de aparición son primero los links de las tipografías de Google Fonts, seguido de la tipografía para los íconos (aun en desarrollo) y al final la liga de la hoja de estilos DAIcss (también en desarrollo)

``` html

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
  
  <link href="https://file.myfontastic.com/9MnddkmwxGrfDcGqsLYbKP/icons.css" rel="stylesheet">
  
  <link href="https://cdn.jsdelivr.net/gh/conacyt-dai/dai-css/dist/dai.min.css" rel="stylesheet">

```



## Para la instalación local del proyecto

0. Prerequisitos:

    Familiaridad con la terminal o línea de comandos

    Tener [Node.js](https://nodejs.org/es/) instalado



1. Clona el repositorio con la siguiente linea en la terminal

    ``` sh
    git clone git@github.com:conacyt-dai/daicss.git
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

