<template>
  <section class="popular-cars">
    <h3>Popular Cars</h3>
    <!-- Itera sobre la propiedad cars para mostrar cada coche -->
    <div v-for="(car, index) in cars" :key="index" class="car-card">
      <!-- Imagen del coche -->
      <h4>{{ car.name }}</h4>
      <p>{{ car.type }}</p>
      <img src="~/assets/c1.png" alt="Car Image" width="200" height="150">
      <br>
      <span><i class="fas fa-gas-pump"></i> Gasoline  </span>
      <span><i class="fas fa-cogs"></i> Manual   </span>
      <span><i class="fas fa-user-friends"></i> 4 Passengers</span>
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
      // eslint-disable-next-line no-console
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
  width: 33%;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
button {
    background-color: #1976d2;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
