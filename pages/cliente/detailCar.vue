<template>
  <v-row justify="center" align="center" class="index-background" direction="column">
    <carProfile />
    <reviewsCont />
  </v-row>
</template>

<script>
import carProfile from '@/components/carProfile.vue'
import reviewsCont from '@/components/reviewsContainer.vue'

export default {
  name: 'DetailCarPage',
  components: {
    carProfile,
    reviewsCont
  },
  layout: 'clienteLayout',
  middleware: 'detect-push'
}
</script>

<style scoped>
.index-background {
  background-color: #f6f7f9;
  width: 100vw;
  height: 100vh;
}
</style>
