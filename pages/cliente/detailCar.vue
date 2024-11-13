<template>
  <v-row justify="center" align="center" class="index-background">
    <carProfile />
  </v-row>
</template>

<script>
import carProfile from '@/components/carProfile.vue'

export default {
  name: 'DetailCarPage',
  components: {
    carProfile
  },
  layout: 'clienteLayout',
  middleware: 'detect-push'
}
</script>

<style scoped>
.index-background {
  background-color: #8e9096;
  width: 100vw;
  height: 100vh;
}
</style>
