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
      <div class="btnMore">
        <button @click="goDetail">
          Show more car
        </button>
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
          this.cars = res.data.cars.filter(car => car.istaken === 'false')
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
    },
    goDetail () {
      this.$router.push('/cliente/detail')
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
.btnMore {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.footer {
  width: 100%;
}
</style>
