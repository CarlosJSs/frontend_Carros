<template>
  <section class="popular-cars">
    <h3>Popular Cars</h3>
    <div class="cars-grid">
      <div v-for="(car, index) in cars" :key="index" class="car-card">
        <div class="card-header">
          <h4>{{ car.nombre }}</h4>
          <i
            :class="['fas', 'fa-heart', isFavorite(car.id) ? 'favorite-icon-red' : 'favorite-icon-white']"
            class="favorite-icon"
            @click="toggleFavorite(car)"
          />
        </div>
        <p class="car-type">
          {{ car.categoria }}
        </p>
        <img :src="getCarImage(car.id)" alt="Car Image" class="car-image" @error="setDefaultImage">
        <div class="car-info">
          <span class="info-item">
            <i class="fas fa-gas-pump" /> {{ car.capacidad_tanque }}
          </span>
          <span class="info-item">
            <i class="fas fa-cogs" /> {{ car.transmision }}
          </span>
          <span class="info-item">
            <i class="fas fa-user" /> {{ car.pasajeros }} People
          </span>
        </div>
        <div class="car-footer">
          <p class="price">
            ${{ car.precio }} / day
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
import Cookies from 'js-cookie'

export default {
  props: {
    cars: {
      type: Array,
      required: true
    },
    favorites: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      userID: Cookies.get('userID')
    }
  },
  methods: {
    rentCar (car) {
      this.$emit('submitCar', {
        ...car
      })
    },
    getCarImage (id) {
      try {
        return require(`@/assets/cars/${id}.png`)
      } catch (error) {
        // Si no se encuentra, devolver una imagen por defecto.
        return require('@/assets/c1.png')
      }
    },
    setDefaultImage (event) {
      event.target.src = require('@/assets/c1.png')
    },
    isFavorite (carId) {
      return this.favorites.some(fav => fav.idcar === carId)
    },
    toggleFavorite (car) {
      if (this.isFavorite(car.id)) {
        const favorite = this.favorites.find(fav => fav.idcar === car.id)
        this.$emit('removeFavorite', favorite.id)
      } else {
        this.$emit('addFavorite', {
          idcar: car.id,
          idusuario: this.userID
        })
      }
    }
  }
}
</script>

<style scoped>
.popular-cars {
  padding: 20px;
  margin-top: 2em;
}
.cars-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  margin-top: 1em;
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
.favorite-icon-red {
  color: red;
}

.favorite-icon-white {
  color: rgb(225, 230, 233);
}
.favorite-icon {
  cursor: pointer;
  font-size: 1.5em;
}
</style>
