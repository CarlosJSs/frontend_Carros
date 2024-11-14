<template>
  <v-row justify="center" align="center" class="index-background">
    <target :cars="cars" />
    <!---<pick :cars="cars" />-->
    <detailRental :cars="cars" /> <!-- Agrega el componente detailRental -->
  </v-row>
</template>

<script>
import detailRental from '@/components/detailRental.vue'
import target from '@/components/target.vue'
// import pick from '~/components/pick-up.vue'

export default {
  name: 'HomePage',
  components: {
    detailRental,
    target
  // ,pick
  },
  layout: 'detail',
  middleware: 'detect-push',
  data () {
    return {
      showLoginF: true,
      cars: [
        { name: 'Car A', type: 'SUV', price: 50 },
        { name: 'Car B', type: 'Sedan', price: 40 },
        { name: 'Car C', type: 'Convertible', price: 70 }
      ]
    }
  }
}
</script>

<style scoped>
.index-background {
  background-color: rgb(234, 242, 255);
  width: 100vw;
  height: 100vh;
}
</style>
