<template>
  <div class="contenedor m-y-12">
    <h1>Bordes y Separadores</h1>

    <h2>Separadores</h2>
    
    <h3 class="m-t-6">1. Separar el contenido de una nota</h3>
    <hr>
    <p class="notas">NOTA: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusantium nam eveniet voluptatum, cumque ad perspiciatis cum modi velit, corporis ipsum quia nobis adipisci labore delectus, eligendi fugit cupiditate pariatur.</p>
    
    <h3 class="m-t-6">2.Dividir en grupos conjuntos de elementos similares</h3>
    <div class="grid">
      <div class="grid-column-4 grid-column-6-esc">
        <ul class="lista-avatar">
          <li>
            <div class="avatar">
              <img src="https://www.fillmurray.com/400/400" alt="murray"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario</p>
              <p class="texto-secundario">texto-secundario</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
          <li>
            <div class="avatar">
              <img src="https://www.fillmurray.com/300/300" alt="murray"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario</p>
              <p class="texto-secundario">texto-secundario</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
          <li>
            <div class="avatar">
              <img src="https://www.fillmurray.com/100/100" alt="murray"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario<br>a dos lineas</p>
              <p class="texto-secundario">texto-secundario.</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
        </ul>
        <hr class="separador-secundario">
        <ol class="lista-avatar">
          <li>
            <div class="avatar">
              <img src="https://www.fillmurray.com/300/300" alt="murray"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario</p>
              <p class="texto-secundario">texto-secundario</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
          <li>
            <div class="avatar">
              <img src="https://www.fillmurray.com/600/600" alt="murray"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario</p>
              <p class="texto-secundario">texto-secundario</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
          <li>
            <div class="avatar">
              <img src="https://www.fillmurray.com/250/250" alt="murray"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario<br>a dos lineas</p>
              <p class="texto-secundario">texto-secundario</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
        </ol>
      </div>
      <div class="grid-column-4 grid-column-6-esc">
        <dl>
          <dt>Doloribus</dt>
          <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cum. Laboriosam voluptas quo amet doloribus.</dd>
          <dt>Lorem</dt>
          <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium incidunt perspiciatis nihil error non debitis iste cumque voluptatum totam?</dd>
        </dl>
        <hr class="separador-secundario">
        <dl>
          <dt>Ejele</dt>
          <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. </dd>
        </dl>
        <hr class="separador-secundario">
        <dl>
          <dt>Description list</dt>
          <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. </dd>
        </dl>
      </div>
    </div>

    <h2>Bordes</h2>
    <h3 class="m-t-6 m-b-0">Ubicaciones</h3>
    <div class="grid">
      <p class="borde">.borde</p>
      <p class="borde-t">.borde-t</p>
      <p class="borde-l">.borde-l</p>
      <p class="borde-b">.borde-b</p>
      <p class="borde-r">.borde-r</p>
      <p class="borde-x">.borde-x</p>
      <p class="borde-y">.borde-y</p>
    </div>

    <h3 class="m-t-6 m-b-0">Colores</h3>
    <div class="grid">
      <div class="borde-b borde-color-1">
        <p>.borde-b</p><p> .borde-color-1<br> #141414</p>
      </div>
      <div class="borde-b borde-color-2">
        <p>.borde-b</p><p> .borde-color-2<br> #6f7271</p>
      </div>
      <div class="borde-b borde-color-3">
        <p>.borde-b</p><p> .borde-color-3<br> #a9a8a9</p>
      </div>
      <div class="borde-b borde-color-4">
        <p>.borde-b</p><p> .borde-color-4<br> #fff</p>
      </div>
      <div class="borde borde-color-1 borde-r-color-3">
        <p>.borde</p><p>.borde-color-1</p><p>.borde-r-color-3</p>
      </div>
    </div>

    <h3 class="m-t-6 m-b-0">Grosores</h3>
    <div class="grid">
      <div class="borde-b borde-grosor-0">
        <p>.borde-b</p><p> .borde-grosor-0<br> 0px</p>
      </div>
      <div class="borde-b borde-grosor-1">
        <p>.borde-b</p><p> .borde-grosor-1<br> 1px</p>
      </div>
      <div class="borde-b borde-grosor-2">
        <p>.borde-b</p><p> .borde-grosor-2<br> 2px</p>
      </div>
      <div class="borde-b borde-grosor-3">
        <p>.borde-b</p><p> .borde-grosor-3<br> 3px</p>
      </div>
      <div class="borde-b borde-grosor-4">
        <p>.borde-b</p><p> .borde-grosor-4<br> 4px</p>
      </div>
      <div class="borde-b borde-grosor-5">
        <p>.borde-b</p><p> .borde-grosor-5<br> 8px</p>
      </div>
      <div class="borde-b borde-grosor-6">
        <p>.borde-b</p><p> .borde-grosor-6<br> 16px</p>
      </div>
      <div class="borde borde-l-grosor-6">
        <p>.borde</p><p> .borde-l-grosor-6</p>
      </div>
    </div>

    <h3 class="m-t-6 m-b-0">Redondeado</h3>
    <div class="grid">
      <div class="grid-column-2 conacyt-fondo-degradado conacyt-texto-claro-1 borde-redondeado-0">
        <p class="p-x-1">.borde-redondeado-0 <br> 0px</p>
      </div>
      <div class="grid-column-2 conacyt-fondo-degradado conacyt-texto-claro-1 borde-redondeado-1">
        <p class="p-x-1">.borde-redondeado-1 <br> 2px</p>
      </div>
      <div class="grid-column-2 conacyt-fondo-degradado conacyt-texto-claro-1 borde-redondeado-2">
        <p class="p-x-1">.borde-redondeado-2 <br> 4px</p>
      </div>
      <div class="grid-column-2 conacyt-fondo-degradado conacyt-texto-claro-1 borde-redondeado-3">
        <p class="p-x-1">.borde-redondeado-3 <br> 8px</p>
      </div>
      <div class="grid-column-2 conacyt-fondo-degradado conacyt-texto-claro-1 borde-redondeado-4">
        <p class="p-x-1">.borde-redondeado-4 <br> 16px</p>
      </div>
      <div class="grid-column-2 conacyt-fondo-degradado conacyt-texto-claro-1 borde-redondeado-5">
        <p class="p-x-1">.borde-redondeado-5 <br> 32px</p>
      </div>
    </div>
    <div class="grid m-t-3">
      <div class="grid-column-2 conacyt-fondo-degradado conacyt-texto-claro-1 borde-redondeado-2 borde-r-redondeado-5">
        <p class="m-3">.borde-redondeado-2</p>
        <p class="m-3">.borde-r-redondeado-5</p>
      </div>
      <div class="grid-column-2 conacyt-fondo-degradado conacyt-texto-claro-1 borde-redondeado-2 borde-t-l-redondeado-5">
        <p class="m-3">.borde-redondeado-2</p>
        <p class="m-3">.borde-t-l-redondeado-5</p>
      </div>
    </div>
  </div>
</template>
