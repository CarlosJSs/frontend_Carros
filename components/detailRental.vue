<template>
  <section class="popular-cars">
    <h3>Popular Cars</h3>
    <!-- Itera sobre la propiedad cars para mostrar cada coche -->
    <div v-for="car in cars" :key="car.name" class="car-card">
      <!-- Imagen del coche -->
      <img src="c1.png" alt="Car Image" width="200" height="150" />
      <h4>{{ car.name }}</h4>
      <p>{{ car.type }}</p>
      <p>${{ car.price }} / day</p>
      <button @click="rentCar(car)">Rent Now</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DetailRental',
  props: {
    cars: {
      type: Array,
      required: true
    }
  },
  methods: {
    rentCar (car) {
      console.log(`Alquilando el coche: ${car.name}`)
    }
  }
}
</script>

<style scoped>
.popular-cars {
  padding: 20px;
}
.car-card {
  display: inline-block;
  background-color: #fff;
  padding: 15px;
  margin: 10px;
  width: 200px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
