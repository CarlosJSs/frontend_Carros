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
      cars: [
        { name: 'Koenigsegg', type: 'Sport', price: 99 },
        { name: 'Nissan GT-R', type: 'Sport', price: 80 },
        { name: 'Rolls-Royce', type: 'Sedan', price: 96 }
      ]
    }
  },
  methods: {
    getCars (car) {
      this.$axios.get('/cars/')
        .then((response) => {
          console.log('Datos recibidos', response.data)
        })
        .catch((error) => {
          console.error('Error: ', error)
        })
    },
    rentCar (car) {
      this.$axios.get('/reserva/:id')
        .then((response) => {
        // const id = response.params.id
          console.log('Datos recibidos', response.data)
        })
        .catch((error) => {
          console.error('Error: ', error)
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
.footer{
  width: 100%;
}
</style>
