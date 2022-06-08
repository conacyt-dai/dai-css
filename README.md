# DAIcss

Librería de estilos en scss con [sass](https://sass-lang.com/). 

Documentación-presentación general en entorno local del sistema de diseño para los Ecosistemas Nacionales Informáticos para Conacyt con [browsersync](https://browsersync.io/).

## Scripts

Para correr el entorno local, luego de clonar el repositorio, correr en la consola:

1. `npm install`
2. `npm start`

Para obtener el archivo de distribución actualizado.

1. `npm run build`
2. utiliza el archivo `dist/dai.min.css`


___


## Variables
**Breakpoints** variable de sass para guardar el `min-width` del `media query`, que cambia entre la versión móvil a tableta y escritorio

``` css
$breakpoints: (
  'mov': 320px,
  'tab': 768px,
  'esc': 1496px,
);
```

**Espaciado** base8, variable de sass que se incrementa de 8 en 8, de 0 a 80, mas dos extras de 96px y 120px. id incremental de 0 a 12.
Se utiliza para crear los margenes, paddings y espaciados entre columnas.

``` css
$espaciado: (
  '0': 0,
  '1': 8px,
  '2': 16px,
  '3': 24px,
  '4': 32px,
  '5': 40px,
  '6': 48px,
  '7': 56px,
  '8': 64px,
  '9': 72px,
  '10': 80px,
  '11': 96px, // extra1
  '12': 120px, // extra2
);
```

___

## Módulos

### Retícula

1. **Contenedores**

    1.1 Existe una clase `.contenedor` general que se extiende a lo ancho de toda la pantalla, respetando margenes interiores izquierdo y derecho definidos segun los `breakpoints` para cada dispositivo.

    Se puede agregar la clase `.ancho-fijo` al contenedor para que tome el ancho másximo definido en el arreglo por dispositivo. Por default el contendor se centrará en la vista.

    ```css
    $contenedores: (
      'mov': (
        'ancho-maximo': 100%,
        'margen': map-get($espaciado, '3'), // 24px
      ),
      'tab': (
        'ancho-maximo': 1064px,
        'margen': map-get($espaciado, '5'), // 40px
      ),
      'esc': (
        'ancho-maximo': 1416px,
        'margen': map-get($espaciado, '5'), // 40px
      ),
    );
    ```

    1.2 También existe una clase especial `.ancho-lectura` que define el ancho máximo de la caja a `720px`. Por default el contendor se centrará en la vista.

    1.3 Por último existe una clase casada con la función de accesibilidad de vista simplificada, por lo que en caso de existir la clase `.a11y-simplificada` los bloques que contengan la clase `.a11y-simplificada-contenedor` pasaran en version de escritorio un grid de dos columnas con espaciado de `map-get($espaciado, '3'), // 24px`
    
    ___
    ***hacer nota a los helpers de posicion de contenddores***
    ____

2. **Columnas**

    Existen varios tipos de columnas dependiendo de en que se arman, hay en grid, en flex y en columns. 

    Tanto grid como flex se basan en la idea que en celular existan 4, en tableta 8 y en escritorio hast 12 columnas por fila, como se muestra en el arreglo en las variables. Las clases de numero mayor al limite de columnas por dispositivo, se reformatea al 100% para dicho dispositovo.
    
    Por ejemplo: grid-col-5 en celular es del 100% del ancho igual que grid-col-6... 12


    ```css
    $columnas: (
      'mov': 4,
      'tab': 8,
      'esc': 12
    );
    $columnas-espaciado: map-get($espaciado, '3');
    ```

    2.1 **columna**
    
    Unicamente se necesita poner la clase `columns-3` al bloque que se requiera en columnas, en donde el digito describe cuantas columnas se espera que existan, existiendo números consecutivos del `1` al `12`.
    
    ***NOTA:*** *la forma en que se formatean con este atributo es muy diferente al de flex o grid, este se formatea automaticamente, no se tiene mucho control de en que punto pasa de una columna a otra. Pero funciona bien para textos, por ejemplo.*

    2.2 **flex**
    
    Debe estar dentro de un elemento con la clase `flex` cada columna debe tener la clase `flex-basis-1` en donde el digito describe el ancho de la columna, existiendo números consecutivos del `1` al `12`.

    2.3 **grid**

    Debe estar dentro de un elemento con la clase `grid` cada columna debe tener la clase `grid-column-1` en donde el digito describe el ancho de la columna, existiendo números consecutivos del `1` al `12`.

    2.4 **gap**

    Es una clase con la que se puede redefinir el espaciado en `columns` y `grid`. Existen 13 variantes que vienen del arreglo de `$espaciado` de incrementos de 8 en 8

    2.5 **flex-gap**

    Hace la misma funcion que `gap` pero es una clase especial para utilizar con las columnas de `flex`.

3. **Margenes** (margin - padding)

    Para los nombres de las clases se utilizan los prefijos `m-` (margin) y `p-` (padding) seguido del id del espaciado para diferenciar el tamaño del margen exterior e interior respectivamente.

    Para ambos casos, para definir únicamente algun lado se utiliza el prefijo seguido de la inicial de la posición en inglés separado con guión, ej. `m-t` (margin-top) y se crearon clases especiales para el eje `x` y `y` ej. `p-y` (padding-top + padding-bottom).

    También se agrega al final la abreviatura del dispositivo en el que se agregará el margen, ej.
    `m-t-3-tab` lo que le pone un margen arriba de 24px para la tableta, clase que existe a partir del breakpoint tab (768), por lo que existirá la clase para tablet y escritorio, pero no para el móvil.


### Color
1. **Colores institucionales Gobierno de México**

    Existe un arreglo de colores que se utilizan en la identidad y en la página de gobierno que se enlista a continuación.

    Ademas para el sub arreglo de identidad se crearon clases de color de fondo, texto y borde. 

    Los nombres de las clases siguen la logica de poner primero que se va a formatear, seguido del nombre de color de la varible, por ejemplo `fondo-gobmx-verde` ó `texto-gobmx-dorado`.

    ``` css
    $color-gobmx: (
      'identidad': (
        'gobmx-verde': #1F5D50, //header gobierno
        'gobmx-pino': #18302D, // footer gobierno
        'gobmx-beige': #DFC9A1, // enlaces gobierno
        'gobmx-dorado': #BD9558, // hover enlaces gobierno
        'gobmx-tinto': #9E2148,
      ),
      'utiles': (
        'gobmx-gris-0': #404041, // hover de boton
        'gobmx-gris-1': #6F7271, // texto secundario
        'gobmx-gris-2': #A9A8A9, // textos deshabilitados
        'gobmx-gris-3': #DDD, // fondo en cajas
        'gobmx-gris-4': #F6F6F6,
        'gobmx-blanco': #FFF, // textos footer gobierno
      ),
    );
    ```

2. **Colores institucionales Conacyt**
    
    Así mismo se creó un arreglo con las variables de color que utiliza el Conacyt en su identidad y en su página web. 

    Para este caso se utiliza igual el sub arreglo de identidad para crear clases de color de fondo, texto y borde, agregando una clase extra de `fondo-conacyt-degradato` que se utiliza en el footer del mismo.

    ``` css
    $color-conacyt: (
      'conacyt-degradado': linear-gradient(to bottom, #003384, #002663, #001c4a), // footer conacyt // este es especial na mas pa fondos
      'identidad': (
        'conacyt-azul': #022563,
        'conacyt-gris': #8C8D8E,
      ),
      'utiles': (
        'conacyt-negro': #141414, // cuerpo de texto
        'conacyt-gris': #d5d5d5, // enlaces conacyt
        'conacyt-blanco': #fff, // texto footer conacyt
        'conacyt-cian': #13aff0, // hover enlaces conacyt
      ),
    );
    ```

___
TODO: borrar despues
___


links sistema de diseño:

* [xd](https://xd.adobe.com/view/b6b1d14e-1cf2-46c0-b71c-7dafcbbb8f07-e3e2/screen/76c66b70-bf9e-4ab8-bd9b-3d8e3eaf0927)
* [Versionamiento semántico](https://docs.google.com/document/d/1ffunL1Akk6f6yqXq3y2uLk4_KisYeMBiRN3vbWeFd0I/edit#heading=h.r2y7od6bg3l
)
* [nomenclatura](https://docs.google.com/spreadsheets/d/1EDwGW3xMajoiKuCOLf5sWCgniFdMoBsn-MvIYNU6vHY/edit#gid=2004573639)
* [estructura atomicdesign lista funciones entregables](https://docs.google.com/spreadsheets/d/1DZpWRgh3sMFbYymkyoGmvcDIUGQkEwN2j5ySe1svcOc/edit#gid=510888881)
* [miro](https://miro.com/app/board/uXjVOA_KQJ8=/)
* [drive doc](https://drive.google.com/drive/u/0/folders/1pI9NMhXMRtvPNsfBhsczHSBm12agzHTr)
* [mdn variables css1](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
* [mdn variables css2](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
* [mdn variables css3](https://developer.mozilla.org/en-US/docs/Web/CSS/var)

links doc color themas switch

* [exploracion color](https://docs.google.com/spreadsheets/d/1fEzL0wHeZSFvr-qk1IHAgBaRMCdDHNE1IGYBBr6SZeE/edit#gid=0)
* [codepen switch checkbox](https://codepen.io/michellebarker/pen/GzzrGJ)
* [swich data-tema](https://lukelowrey.com/css-variable-theme-switcher/)
* [mdn :root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)
* [mdn: media color scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
