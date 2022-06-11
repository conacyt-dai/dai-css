<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
  data: ()=> ({
    tipografiaAccesible: false,
    vistaSimplificada: false,
  }),
  methods: {
    cambiarTipografia() {
      this.tipografiaAccesible = !this.tipografiaAccesible
    },
    cambiarVista() {
      this.vistaSimplificada = !this.vistaSimplificada
    },
  }
}
</script>

<template>
  <div :class="{ 'a11y-tipografia':tipografiaAccesible, 'a11y-simplificada':vistaSimplificada }">
    <nav>
      Navegacion principal
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/reticula">Reticula</RouterLink>
      <RouterLink to="/color">Color</RouterLink>
      <RouterLink to="/tipografia">Tipografia</RouterLink>
      <RouterLink to="/iconografia">Iconografia</RouterLink>
      <RouterLink to="/botones">Botones</RouterLink>
      <RouterLink to="/hipervinculos">Hipervínculos</RouterLink>
    </nav>
    <menu>
      a11y
      <button class="boton-primario" @click="cambiarTipografia">Cambiar tipografia</button>
      <button class="boton-primario" @click="cambiarVista">Cambiar vista</button>
    </menu>
    <RouterView />
  </div>
  <!-- <body class="a11y-tipografia"> -->
  <!-- <body class="a11y-simplificada"> -->
  
</template>

<style>
  @import '@/assets/dai.css';
</style>
