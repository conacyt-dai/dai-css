<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'

  const isA11yTypography = ref(null)
  const isA11yView = ref(null)

  isA11yTypography.value, isA11yView.value = false

  function toggleA11yTypography() {
    isA11yTypography.value = !isA11yTypography.value
  }

  function toggleA11yView() {
    isA11yView.value = !isA11yView.value
  }
</script>

<template>
  <div :class="{ 'a11y-tipografia':isA11yTypography, 'a11y-simplificada':isA11yView }">
    <nav role="navigation" class="contenedor p-y-1">
      Navegacion principal
      <RouterLink class="m-x-1" to="/">Inicio</RouterLink>
      <RouterLink class="m-x-1" to="/reticula">Reticula</RouterLink>
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
    <aside role="complementary" class="contenedor p-y-1">
      a11y
      <button class="boton-primario" @click="toggleA11yTypography">Cambiar tipografia</button>
      <button class="boton-primario" @click="toggleA11yView">{{ isA11yView ? 'Vista normal' : 'Vista simplificada'}}</button>
    </aside>
    <main role="main">
      <RouterView />
    </main>
  </div>
</template>

<style>
  @import '@/assets/eni.css';
</style>
