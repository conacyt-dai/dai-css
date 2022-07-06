<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'

  const isA11yTypography = ref(null)
  const isA11yView = ref(null)
  const isA11yUnderline = ref(null)
  const fontSize = ref(16);

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
    fontSize.value ++;
    let up_size = `${fontSize.value}px`;
    document.documentElement.style.setProperty('--tipografia-tamanio',up_size);
  }
  function downFontSize() {
    fontSize.value --;
    let down_size = `${fontSize.value}px`;
    document.documentElement.style.setProperty('--tipografia-tamanio',down_size);
  }
</script>

<template>
  <div :class="{ 'a11y-tipografia':isA11yTypography, 'a11y-simplificada':isA11yView, 'a11y-hipervinculos':isA11yUnderline }">
    <nav role="navigation" class="navegacion-principal">
      <RouterLink class="m-x-1" to="/">Inicio</RouterLink>
      <RouterLink class="m-x-1" to="/contenedores">Contenedores</RouterLink>
      <RouterLink class="m-x-1" to="/reticula">Reticula</RouterLink>
      <RouterLink class="m-x-1" to="/margenes">Margenes</RouterLink>
      <RouterLink class="m-x-1" to="/color">Color</RouterLink>
      <RouterLink class="m-x-1" to="/tipografia">Tipografia</RouterLink>
      <RouterLink class="m-x-1" to="/iconografia">Iconografia</RouterLink>
      <RouterLink class="m-x-1" to="/botones">Botones</RouterLink>
      <RouterLink class="m-x-1" to="/hipervinculos">Hipervínculos</RouterLink>
      <RouterLink class="m-x-1" to="/listas">Listas</RouterLink>
      <RouterLink class="m-x-1" to="/tablas">Tablas</RouterLink>
      <RouterLink class="m-x-1" to="/detalles">Detalles</RouterLink>
      <RouterLink class="m-x-1" to="/imagenes">Imagenes</RouterLink>
      <RouterLink class="m-x-1" to="/formularios">Formularios</RouterLink>
      <RouterLink class="m-x-1" to="/bordes">Bordes</RouterLink>
      <RouterLink class="m-x-1" to="/sombras">Sombras</RouterLink>
      <RouterLink class="m-x-1" to="/separadores">Separadores</RouterLink>
    </nav>
    <menu role="complementary" class="menu-lateral">
      <button class="boton-primario" @click="toggleA11yTypography">Cambiar tipografia</button>
      <button class="boton-primario" @click="toggleA11yView">{{ isA11yView ? 'Vista normal' : 'Vista simplificada'}}</button>
      <button class="boton-secundario" @click="downFontSize">Reducir px</button>
      <span class="p-1 m-r-1">{{ fontSize }}px</span>
      <button class="boton-secundario" @click="upFontSize">Crecer px</button>
      <button class="boton-primario" @click="toggleA11yLink">Hipervínculos subrayados</button>
    </menu>
    <main role="main" class="contenedor m-y-10">
      <RouterView />
    </main>
    <footer class="pie-pagina-principal">
    </footer>
  </div>
</template>

<style>
  @import '@/assets/eni.css';
</style>
