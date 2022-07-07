<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'

  const isA11yTypography = ref(null)
  const isA11yView = ref(null)
  const isA11yUnderline = ref(null)
  const fontSize = ref(16)

  isA11yTypography.value, isA11yView.value, isA11yUnderline.value = false

  function toggleA11yTypography() {
    isA11yTypography.value = !isA11yTypography.value
  }

  function toggleA11yView() {
    isA11yView.value = !isA11yView.value
  }

  function toggleA11yLink() {
    isA11yUnderline.value = !isA11yUnderline.value
  }

  function upFontSize() {
    fontSize.value ++
    let up_size = `${fontSize.value}px`
    document.documentElement.style.setProperty('--tipografia-tamanio',up_size)
  }
  function downFontSize() {
    fontSize.value --
    let down_size = `${fontSize.value}px`
    document.documentElement.style.setProperty('--tipografia-tamanio',down_size)
  }
  function resetA11y() {
    isA11yTypography.value = false
    isA11yView.value = false
    isA11yUnderline.value = false
    fontSize.value = 16
    document.documentElement.style.setProperty('--tipografia-tamanio','16')
    
  }
</script>

<template>
  <div :class="{ 'a11y-tipografia':isA11yTypography, 'a11y-simplificada':isA11yView, 'a11y-hipervinculos':isA11yUnderline }">

    <nav class="tmp-navegacion" role="navigation">
      <RouterLink class="p-1" to="/">Inicio</RouterLink>
      <RouterLink class="p-1" to="/contenedores">Contenedores</RouterLink>
      <RouterLink class="p-1" to="/reticula">Reticula</RouterLink>
      <RouterLink class="p-1" to="/margenes">Margenes</RouterLink>
      <RouterLink class="p-1" to="/color">Color</RouterLink>
      <RouterLink class="p-1" to="/tipografia">Tipografia</RouterLink>
      <RouterLink class="p-1" to="/iconografia">Iconografia</RouterLink>
      <RouterLink class="p-1" to="/botones">Botones</RouterLink>
      <RouterLink class="p-1" to="/hipervinculos">Hipervínculos</RouterLink>
      <RouterLink class="p-1" to="/listas">Listas</RouterLink>
      <RouterLink class="p-1" to="/tablas">Tablas</RouterLink>
      <RouterLink class="p-1" to="/detalles">Detalles</RouterLink>
      <RouterLink class="p-1" to="/imagenes">Imagenes</RouterLink>
      <RouterLink class="p-1" to="/formularios">Formularios</RouterLink>
      <RouterLink class="p-1" to="/bordes">Bordes</RouterLink>
      <RouterLink class="p-1" to="/sombras">Sombras</RouterLink>
      <RouterLink class="p-1" to="/separadores">Separadores</RouterLink>
    </nav>
    <menu role="complementary" class="tmp-menu">
      <span>A11y</span>
      <button class="boton-primario" @click="toggleA11yTypography">Cambiar tipografia</button>
      <button class="boton-primario" @click="toggleA11yView">{{ isA11yView ? 'Vista normal' : 'Vista simplificada'}}</button>
      <button class="boton-primario" @click="downFontSize">Reducir fuente</button>
      <button class="boton-primario" @click="upFontSize">Incrementear fuente</button>
      <button class="boton-primario" @click="toggleA11yLink">Hipervínculos subrayados</button>
      <button class="boton-secundario" @click="resetA11y">Apagar</button>
    </menu>
    <main role="main" class="contenedor m-y-maximo">
      <RouterView />
    </main>

  </div>
</template>

<style>
  @import '@/assets/eni.css';

  .tmp-navegacion {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0;
    margin: 0;
    background: #fff;
    box-shadow: 0 8px 16px -8px rgba(0,0,0,.4);
    z-index: 11;
  } .tmp-navegacion a {
    color: #333;
    text-decoration: none;
    padding: 8px;
    font-size: 14px;
    line-height: 14px;
    margin: 4px 0 4px 4px;
  } .tmp-navegacion a:hover, .tmp-navegacion a:focus {
    color: #fff;
    background: #888;
  }.tmp-navegacion .router-link-active {
    color: #fff;
    background: #000;
  }

  .tmp-menu {
    background: #000;
    color: #aaa;
    display: flex;
    margin: 0;
    padding: 4px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: baseline;
    z-index: 11;
  }.tmp-menu *{
    font-size: 14px;
    line-height: 14px;
    padding: 8px 16px;
  }

</style>
