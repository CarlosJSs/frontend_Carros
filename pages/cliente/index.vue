<template>
  <v-row justify="center" align="center" class="index-background">
    <div class="container">
      <div class="hero-section">
        <target />
      </div>
      <div>
        <pickUp @rentDataEvent="setDataResv" />
      </div>
      <div class="popular-section">
        <detailRental :cars="cars" @submitCar="chooseCar" />
      </div>
    </div>
    <div class="footer">
      <footerq />
    </div>
  </v-row>
</template>

<script>
import Cookies from 'js-cookie'
import detailRental from '@/components/detailRental.vue'
import target from '~/components/targetComponent.vue'
import pickUp from '@/components/pick-up.vue'
import footerq from '~/components/footerHome.vue'

export default {
  name: 'HomePage',
  components: {
    detailRental,
    target,
    pickUp,
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
