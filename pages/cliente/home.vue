<template>
  <v-row justify="center" align="center" class="index-background">
    <div class="container">
      <div class="hero-section">
        <target :cars="cars" />
      </div>
      <div class="ac">
        <div class="form-section">
          <pickUp2 :cars="cars" />
        </div>
        <button class="swap-button" @click="swapLocations">
          ⇄
        </button>
        <div class="form-section">
          <pickUp :cars="cars" />
        </div>
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
import pickUp2 from '@/components/pickUp02.vue'

export default {
  name: 'HomePage',
  components: {
    detailRental,
    target,
    pickUp,
    pickUp2
  },
  layout: 'detail',
  middleware: [
    'detect-push',
    'auth-role'
  ],
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
.ac{
  display: flex;
  gap: 15px;
}
button {
  background-color: #1976d2;
  color: white;
  padding: 10px;
  height: 50px;
  align-self: center;
  border: none;
  border-radius: 5px;
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
  width: 530px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.popular-section {
  margin-top: 20px;
}
</style>
