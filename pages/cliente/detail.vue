<template>
  <v-row justify="center" align="center" class="index-background">
    <div class="container">
      <div class="hero-section">
        <filtros :filters="filters" @update-filters="updateFilters" />
      </div>
      <div class="contRight">
        <div class="ac">
          <div class="form-section">
            <pickUp @rentDataEvent="setDataResv" />
          </div>
        </div>
        <div class="popular-section">
          <detail :cars="filteredCars" @submitCar="chooseCar" />
        </div>
      </div>
    </div>
  </v-row>
</template>

<script>
import Cookies from 'js-cookie'
import filtros from '~/components/cars.vue'
import detail from '~/components/detailRental.vue'
import pickUp from '@/components/pick-up.vue'

export default {
  name: 'HomePage',
  components: {
    filtros,
    pickUp,
    detail
  },
  layout: 'detail',
  middleware: [
    'detect-push',
    'auth-role'
  ],
  data () {
    return {
      showLoginF: true,
      cars: [],
      filters: {
        type: {
          sport: true,
          suv: true,
          mpv: true,
          sedan: true,
          coupe: true,
          hatchback: true
        },
        capacity: {
          twoPerson: true,
          fourPerson: true,
          sixPerson: true,
          eightPlus: true
        },
        price: 80
      },
      fechaInicio: '',
      fechaFin: '',
      horaInicio: '',
      horaFin: '',
      ciudadInicio: '',
      ciudadFin: ''
    }
  },
  computed: {
    filteredCars () {
      return this.cars.filter((car) => {
        const typeMatch = this.filters.type[car.categoria.toLowerCase()]
        const capacityMatch =
          this.filters.capacity[
            car.pasajeros === 2
              ? 'twoPerson'
              : car.pasajeros === 4
                ? 'fourPerson'
                : car.pasajeros === 6
                  ? 'sixPerson'
                  : 'eightPlus'
          ]
        const priceMatch = car.precio <= this.filters.price

        return typeMatch && capacityMatch && priceMatch
      })
    }
  },
  mounted () {
    this.loadCarros()
  },
  methods: {
    loadCarros () {
      this.token = Cookies.get('token')

      this.$axios.get('/cars', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).then((res) => {
        // eslint-disable-next-line no-console
        console.log('@@@ res => ', res.data)
        if (res.data.success && Array.isArray(res.data.cars)) {
          this.cars = res.data.cars
        } else {
          // eslint-disable-next-line no-console
          console.error('No es array valido')
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error('@@@ error => ', error)
      })
    },
    updateFilters (newFilters) {
      this.filters = newFilters
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
    },
    setDataResv (data) {
      this.fechaInicio = data.pickupDate
      this.fechaFin = data.dropoffDate
      this.horaInicio = data.pickupTime
      this.horaFin = data.dropoffTime
      this.ciudadInicio = data.pickupLocation
      this.ciudadFin = data.dropoffLocation
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Plus Jakarta Sans';
}

.index-background {
    background-color: #f6f7f9;
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
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
  padding-left: 0;
  padding-top: 0;
  margin-left: 0;
  max-width: 100% !important;
}
.popular-section {
  margin: 0; /* Elimina márgenes */
  padding: 0;
}
.hero-section {
  margin: 0; /* Elimina márgenes */
  padding: 0;
  height: 100%;
}
.ac{
  display: flex;
  width: 100%;
  gap: 15px;
  margin-top: 2em;
}
.contRight{
  margin-left: 6em;
}
  </style>
