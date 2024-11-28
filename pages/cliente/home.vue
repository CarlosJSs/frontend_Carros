<template>
  <v-row justify="center" align="center" class="index-background">
    <div class="container">
      <div class="hero-section">
        <target :cars="cars" />
      </div>
      <div>
        <pickUp :cars="cars" />
      </div>
      <div class="popular-section">
        <detailRental :cars="cars" />
      </div>
    </div>
    <div class="footer">
      <footerq :cars="cars" />
    </div>
  </v-row>
</template>

<script>
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
      cars: []
    }
  },
  methods: {
    // Método para obtener datos de autos desde el backend
    async getCars () {
      try {
        const response = await this.$axios.get('/cars/')
        this.cars = response.data // Actualiza el estado con los datos recibidos
        console.log('Datos recibidos:', this.cars)
      } catch (error) {
        console.error('Error al obtener autos:', error)
      }
    },
    // Método para realizar una reserva
    async rentCar (car) {
      try {
        const response = await this.$axios.post(`/reserva/${car.id}`)
        console.log('Reserva realizada:', response.data)
      } catch (error) {
        console.error('Error al reservar auto:', error)
      }
    }
  },
  mounted () {
    // Carga los datos de autos cuando se monta el componente
    this.getCars()
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
.footer{
  width: 100%;
}
</style>
