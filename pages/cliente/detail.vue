<template>
  <v-row justify="center" align="center" class="index-background">
    <div class="container">
      <div class="hero">
        <cars :cars="cars" /> <!-- Agrega el componente detailRental -->
      </div>
      <div>
        <div>
          <pickUp :cars="cars" />
        </div>
        <div class="popular-section">
          <detail :cars="cars" />
        </div>
      </div>
    </div>
  </v-row>
</template>

<script>
import cars from '~/components/cars.vue'
import detail from '~/components/detailRental.vue'
import pickUp from '@/components/pick-up.vue'

export default {
  name: 'HomePage',
  components: {
    cars,
    pickUp,
    detail
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0; /* Elimina márgenes */
    padding: 0;
    box-sizing: border-box;
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
  .container{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
  }
  .popular-section {
    margin: 0; /* Elimina márgenes */
  padding: 0;
}
.hero{
  flex: 1;
  ;
}
  </style>
