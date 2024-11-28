<template>
  <v-row justify="center" align="center" class="index-background">
    <div class="container">
      <div class="hero-section">
        <cars :cars="cars" /> <!-- Agrega el componente detailRental -->
      </div>
      <div>
        <div class="ac">
          <div class="form-section">
            <pickUp :cars="cars" />
          </div>
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
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0; /* Elimina márgenes */
    padding: 0;
    box-sizing: border-box;
  }
  .form-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 530px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
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
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
  }
  .popular-section {
    margin: 0; /* Elimina márgenes */
  padding: 0;
}
.hero-section {
  margin: 0; /* Elimina márgenes */
  padding: 0;
}
.ac{
  display: flex;
  width: 980px;
  gap: 15px;
}
  </style>
