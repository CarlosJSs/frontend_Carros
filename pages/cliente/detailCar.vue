<template>
  <v-row justify="center" align="center" class="index-background" direction="column">
    <carProfile v-if="carro" :carroinfo="carro" @rentCarEvent="rentarCarro" />
    <reviewsCont :num-reviews="200" :reviewsarray="reviews" />
    <div class="carrosCards">
      <detailRental :cars="cars" />
    </div>
  </v-row>
</template>

<script>
import Cookies from 'js-cookie'
import carProfile from '@/components/carProfile.vue'
import reviewsCont from '@/components/reviewsContainer.vue'
import detailRental from '@/components/detailRental.vue'

export default {
  name: 'DetailCarPage',
  components: {
    carProfile,
    reviewsCont,
    detailRental
  },
  layout: 'clienteLayout',
  middleware: [
    'detect-push',
    'auth-role'
  ],
  data () {
    return {
      carro: {},
      carroID: '',
      reviews: [],
      cars: []
    }
  },
  mounted () {
    const rentalData = this.$route.query
    this.carroID = rentalData.id

    if (this.carroID) {
      this.loadCarro()
      this.loadReviews()
      this.loadCarros()
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
          this.reviews = res.data.reviews
          // eslint-disable-next-line no-console
          console.log('reviews: ', res.data)
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

      this.$router.push({
        path: '/cliente/billing',
        query: this.carro
      })
    }
  }
}
</script>

<style scoped>
.index-background {
  background-color: #f6f7f9;
}
</style>
