<template>
  <v-row justify="center" align="start" class="index-background">
    <addCarForm />
    <tableCars />
  </v-row>
</template>

<script>
import addCarForm from '@/components/addCarForm.vue'
import tableCars from '@/components/tableCars.vue'

export default {
  name: 'AddCarPage',
  components: {
    addCarForm,
    tableCars
  },
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
