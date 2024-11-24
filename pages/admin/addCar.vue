<template>
  <v-row justify="center" align="start" class="index-background">
    <addCarForm @addCarEvent="addCar" />
    <tableCars :cars="cars" />
  </v-row>
</template>

<script>
import Cookies from 'js-cookie'
import addCarForm from '@/components/addCarForm.vue'
import tableCars from '@/components/tableCars.vue'

export default {
  name: 'AddCarPage',
  components: {
    addCarForm,
    tableCars
  },
  layout: 'adminLayout',
  middleware: 'detect-push',
  data () {
    return {
      cars: []
    }
  },
  mounted () {
    this.loadCarros()
  },
  methods: {
    loadCarros () {
      this.token = Cookies.get('token')

      this.$axios.get('/cars/', {
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
    addCar (carModel) {
      this.token = Cookies.get('token')

      if (carModel.nombre && carModel.categoria && carModel.capacidad_tanque && carModel.pasajeros && carModel.transmision && carModel.precio && carModel.rating && carModel.descripcion) {
        const body = {
          nombre: carModel.nombre,
          categoria: carModel.categoria,
          capacidad_tanque: carModel.capacidad_tanque,
          pasajeros: carModel.pasajeros,
          transmision: carModel.transmision,
          precio: carModel.precio,
          rating: carModel.rating,
          descripcion: carModel.descripcion,
          istaken: 'false'
        }

        this.$axios.post('/cars/create', body, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-type': 'application/json'
          }
        }).then((res) => {
          // eslint-disable-next-line no-console
          console.log('@@ res addCar => ', res)
          if (res && res.data && res.data.success) {
            // eslint-disable-next-line no-console
            console.log('@@ res success => ', res.data.success)
            this.loadCarros()
          }
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.error('@@ error => ', error)
        })
      }
    }
  }
}
</script>

<style scoped>
.index-background {
  background-color: #f6f7f9;
  width: 100vw;
  height: auto;
  padding-top: 6vh;
  padding-bottom: 6vh;
}
</style>
