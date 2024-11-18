<template>
  <section class="popular-cars">
    <h3>Popular Cars</h3>
    <div class="cars-grid">
      <div v-for="(car, index) in cars" :key="index" class="car-card">
        <img src="~/assets/c1.png" alt="Car Image" />
        <div class="car-info">
          <h4>{{ car.name }}</h4>
          <p>{{ car.type }}</p>
          <span><i class="fas fa-gas-pump"></i> Gasoline</span>
          <span><i class="fas fa-cogs"></i> Manual</span>
          <span><i class="fas fa-user-friends"></i> 4 Passengers</span>
          <p>${{ car.price }} / day</p>
          <button @click="rentCar(car)">Rent Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
.cars-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.car-card {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  width: calc(33% - 20px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.car-card img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 15px;
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
