<template>
  <div class="unauthorized-page">
    <h1>403 - Acceso Restringido</h1>
    <p>No tienes permiso para acceder a esta página.</p>
    <nuxt-link to="/">
      Volver al inicio
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'login',
  middleware: 'detect-push'
}
</script>

<style scoped>
.unauthorized-page {
  color: black;
  text-align: center;
  margin-top: 50px;
}
</style>
