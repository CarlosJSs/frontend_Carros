<template>
  <v-row justify="center" align="start" class="index-background">
    Bienvenido
  </v-row>
</template>

<script>

export default {
  name: 'AdminIndexPage',
  layout: 'adminLayout',
  middleware: 'detect-push'
}
</script>

<style scoped>
.index-background {
  background-color: #f6f7f9;
  width: 100vw;
  height: auto;
  padding-top: 6vh;
  padding-bottom: 6vh;
}
</style>
