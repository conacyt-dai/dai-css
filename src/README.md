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

    2.1 **columna**
    
    2.2 **flex**

    2.3 **grid**

3. **Margenes** (margin - padding)

    Para los nombres de las clases se utilizan los prefijos `m-` (margin) y `p-` (padding) seguido del id del espaciado para diferenciar el tamaño del margen exterior e interior respectivamente.

    Para ambos casos, para definir únicamente algun lado se utiliza el prefijo seguido de la inicial de la posición en inglés separado con guión, ej. `m-t` (margin-top) y se crearon clases especiales para el eje `x` y `y` ej. `p-y` (padding-top + padding-bottom).

    También se agrega al final la abreviatura del dispositivo en el que se agregará el margen, ej.
    `m-t-3-tab` lo que le pone un margen arriba de 24px para la tableta, clase que existe a partir del breakpoint tab (768), por lo que existirá la clase para tablet y escritorio, pero no para el móvil.

