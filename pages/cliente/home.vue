<template>
  <v-row justify="center" align="center" class="index-background">
    <div class="container">
      <div class="hero-section">
        <target :cars="cars" />
      </div>
      <div class="form-section">
        <pickUp :cars="cars" />
      </div>
      <div class="popular-section">
        <detailRental :cars="cars" />
      </div>
    </div>
  </v-row>
</template>

<script>
import detailRental from '@/components/detailRental.vue'
import target from '~/components/targetComponent.vue'
import pickUp from '@/components/pick-up.vue'

export default {
  name: 'HomePage',
  components: {
    detailRental,
    target,
    pickUp
  },
  layout: 'detail',
  middleware: 'detect-push',
  data () {
    return {
      cars: [
        { name: 'Koenigsegg', type: 'Sport', price: 99 },
        { name: 'Nissan GT-R', type: 'Sport', price: 80 },
        { name: 'Rolls-Royce', type: 'Sedan', price: 96 }
      ]
    }
  }
}
</script>

<style scoped>
.index-background {
  background-color: #f5f5f5;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.container {
  width: 90%;
  max-width: 1200px;
}
.hero-section {
  margin-bottom: 20px;
}
.form-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.popular-section {
  margin-top: 20px;
}
</style>
