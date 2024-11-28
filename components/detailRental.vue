<template>
  <section class="popular-cars">
    <h3>Popular Cars</h3>
    <div class="cars-grid">
      <div v-for="(car, index) in cars" :key="index" class="car-card">
        <div class="card-header">
          <h4>{{ car.name }}</h4>
          <i class="fas fa-heart favorite-icon" />
        </div>
        <p class="car-type">
          {{ car.type }}
        </p>
        <img src="~/assets/c1.png" alt="Car Image" class="car-image">
        <div class="car-info">
          <span class="info-item">
            <i class="fas fa-gas-pump" /> {{ car.fuel }} 80L
          </span>
          <span class="info-item">
            <i class="fas fa-cogs" /> {{ car.transmission }}Manual
          </span>
          <span class="info-item">
            <i class="fas fa-user" /> {{ car.passengers }} People
          </span>
        </div>
        <div class="car-footer">
          <p class="price">
            ${{ car.price }}.00 / day
          </p>
          <button @click="rentCar(car)">
            Rent Now
          </button>
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
    async rentCar (car) {
      try {
        const response = await this.$axios.post(`/reserva/${car.id}`)
        console.log(`Reserva realizada para: ${car.name}`, response.data)
        alert(`Reserva exitosa para el auto: ${car.name}`)
      } catch (error) {
        console.error('Error al reservar el auto:', error)
        alert('No se pudo completar la reserva. Inténtalo nuevamente.')
      }
    }
  }
}
</script>
<style>
.popular-cars {
  padding: 20px;
  font-family: Arial, sans-serif;
}
.cars-grid {
  display: flex;
  grid-template-columns: repeat(4, 1fr); /* Esto crea 4 columnas */
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.car-card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.card-header h4 {
  font-size: 18px;
  margin: 0;
}
.favorite-icon {
  color: red;
  font-size: 20px;
  cursor: pointer;
}
.car-type {
  color: #7a7a7a;
  font-size: 14px;
  margin-bottom: 15px;
}
.car-image {
  width: 100%;
  margin-bottom: 15px;
}
.car-info {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #7a7a7a;
  margin-bottom: 15px;
}
.info-item {
  display: flex;
  align-items: center;
  gap: 5px;
}
.car-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  font-size: 18px;
  font-weight: bold;
}
button {
  background-color: #1976d2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #1259a1;
}
</style>
