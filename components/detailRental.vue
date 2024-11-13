<template>
  <section class="popular-cars">
    <h3>Popular Car</h3>
    <div v-for="car in cars" :key="car.name" class="car-card">
      <!--<img :src="car.image" alt="Car Image">-->
      <img src="c1.png" alt="Car Image" width="200" height="150">
      <h4>{{ car.name }}</h4>
      <p>{{ car.type }}</p>
      <p>${{ car.price }} / day</p>
      <button @click="rentCar(car)">Rent Now</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PopularCars',
  props: {
    cars: {
      type: Array,
      required: true
    }
  },
  methods: {
    rentCar (car) {
    // Aquí puedes agregar lógica para alquilar el coche
      console.log(`Alquilando el coche: ${car.name}`);
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
