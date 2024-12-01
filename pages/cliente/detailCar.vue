<template>
  <v-row justify="center" align="center" class="index-background" direction="column">
    <div class="leftCont">
      <filtros :filters="filters" @update-filters="updateFilters" />
    </div>
    <div class="rightCont">
      <carProfile v-if="carro" :carroinfo="carro" :num-reviews="reviews.length" @rentCarEvent="rentarCarro" />
      <reviewsCont v-if="reviews.length > 0" :num-reviews="reviews.length" :reviewsarray="reviews" />
      <div class="carrosCards">
        <detailRental :cars="filteredCars" @submitCar="updateCarro" />
      </div>
    </div>
  </v-row>
</template>

<script>
import Cookies from 'js-cookie'
import carProfile from '@/components/carProfile.vue'
import reviewsCont from '@/components/reviewsContainer.vue'
import detailRental from '@/components/detailRental.vue'
import filtros from '@/components/cars.vue'

export default {
  name: 'DetailCarPage',
  components: {
    carProfile,
    reviewsCont,
    detailRental,
    filtros
  },
  layout: 'detail',
  middleware: [
    'detect-push',
    'auth-role'
  ],
  data () {
    return {
      carro: {},
      carroID: '',
      reviews: [],
      cars: [],
      dataResv: {},
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
        price: 1000
      }
    }
  },
  computed: {
    filteredCars () {
      return this.cars.filter((car) => {
        const typeMatch = this.filters.type[car.categoria.toLowerCase()]
        const capacityMatch =
          this.filters.capacity[
            parseInt(car.pasajeros) === 2
              ? 'twoPerson'
              : parseInt(car.pasajeros) === 4
                ? 'fourPerson'
                : parseInt(car.pasajeros) === 6
                  ? 'sixPerson'
                  : 'eightPlus'
          ]
        const priceMatch = parseInt(car.precio) <= this.filters.price

        return typeMatch && capacityMatch && priceMatch
      })
    }
  },
  mounted () {
    const rentalData = this.$route.query
    this.carroID = rentalData.id
    this.dataResv = rentalData

    if (this.carroID) {
      this.loadCarro()
      setTimeout(() => {
        this.loadReviews()
      }, 200)
      setTimeout(() => {
        this.loadCarros()
      }, 1000)
    } else {
      // eslint-disable-next-line no-console
      console.error('No se recibio un ID de carro')
    }
  },
  methods: {
    loadCarro () {
      this.token = Cookies.get('token')

      this.$axios.get(`/cars/car/${this.carroID}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line no-console
          console.log('carro: ', res.data.car)
          this.carro = res.data.car
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('@@@ error => ', error)
      })
    },
    loadReviews () {
      this.token = Cookies.get('token')

      this.$axios.get('/reviews/', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).then((res) => {
        if (res.data.success) {
          this.reviews = res.data.reviews.filter(review => review.idCar === this.carroID)
          // eslint-disable-next-line no-console
          console.log('reviews filtradas: ', this.reviews)
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('@@@ error => ', error)
      })
    },
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
    rentarCarro (id) {
      // eslint-disable-next-line no-console
      console.log('rentando, id: ', id)
      // eslint-disable-next-line no-console
      console.log('carro: ', this.carro)
      // eslint-disable-next-line no-console
      console.log('rating: ', this.carro.rating)

      this.$router.push({
        path: '/cliente/billing',
        query: {
          ...this.dataResv,
          nombre: this.carro.nombre,
          precio: this.carro.precio,
          rating: this.carro.rating
        }
      })
    },
    updateCarro (carro) {
      // eslint-disable-next-line no-console
      console.log('escogi: ', carro.nombre)
      // eslint-disable-next-line no-console
      console.log('carro escogido: ', carro)
      this.carro = carro
      this.carroID = carro.id
      this.dataResv.id = carro.id

      this.loadCarro()
      this.loadReviews()
    },
    updateFilters (newFilters) {
      this.filters = newFilters
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start !important;
  align-items: flex-start !important;
  height: 106%;
}
.rightCont {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}
.leftCont {
  height: 100%;
  width: 20%;
}
</style>
