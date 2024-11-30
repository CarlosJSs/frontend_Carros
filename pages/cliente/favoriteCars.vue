<template>
  <v-row justify="center" align="center" class="index-background">
    <div class="container">
      <div class="popular-section">
        <h3>Favorite Cars</h3>
        <div class="cars-grid">
          <div v-for="(car, index) in cars" :key="index" class="car-card">
            <div class="card-header">
              <h4>{{ car.nombre }}</h4>
              <i class="fas fa-heart favorite-icon" />
            </div>
            <p class="car-type">
              {{ car.categoria }}
            </p>
            <img src="~/assets/c1.png" alt="Car Image" class="car-image">
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
      </div>
    </div>
    <div class="footer">
      <footerq />
    </div>
  </v-row>
</template>

<script>
import Cookies from 'js-cookie'
import footerq from '~/components/footerHome.vue'

export default {
  name: 'HomePage',
  components: {
    footerq
  },
  layout: 'detail',
  middleware: 'detect-push',
  data () {
    return {
      cars: [],
      fechaInicio: '',
      fechaFin: '',
      horaInicio: '',
      horaFin: '',
      ciudadInicio: '',
      ciudadFin: ''
    }
  },
  mounted () {
    this.loadCarros()
  },
  methods: {
    rentCar (car) {
      this.$emit('submitCar', {
        ...car
      })
    },
    loadCarros () {
      this.token = Cookies.get('token')

      this.$axios.get('/favorites', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).then((res) => {
        // eslint-disable-next-line no-console
        console.log('@@@ res => ', res.data)
        if (res.data.success && Array.isArray(res.data.cars)) {
          this.cars = res.data.favorites
        } else {
          // eslint-disable-next-line no-console
          console.error('No es array valido')
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error('@@@ error => ', error)
      })
    },
    chooseCar (carro) {
      const rentalData = {
        id: carro.id,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin,
        horaInicio: this.horaInicio,
        horaFin: this.horaFin,
        ciudadInicio: this.ciudadInicio,
        ciudadFin: this.ciudadFin
      }

      // eslint-disable-next-line no-console
      console.log('escogi: ', carro.nombre)
      this.$router.push({
        path: '/cliente/detailCar',
        query: rentalData
      })
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
  width: 100%;
  max-width: 1200px;
}
.hero-section {
  margin-bottom: 20px;
}
.popular-section {
  margin-top: 20px;
  width: 100%;
}
.footer {
  width: 100%;
}
</style>
