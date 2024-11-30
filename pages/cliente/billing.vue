<template>
  <v-row justify="center" align="start" class="index-background">
    <billingForm :inforenta="myinfoRenta" @createResvEvent="createResv" />
    <summCard :carro="carro" />

    <!-- Modal de Exito -->
    <v-dialog v-model="successDialog" max-width="500">
      <v-card>
        <v-card-title class="text-h6">
          Reserva Creada
        </v-card-title>
        <v-card-text>
          <p>¡La reserva se ha creado exitosamente!</p>
          <p><strong>Detalles de la reserva:</strong></p>
          <ul>
            <li><strong>ID del carro:</strong> {{ carro.id }}</li>
            <li><strong>Costo:</strong> ${{ (parseFloat(carro.precio) + parseFloat(carro.precio / 100 * 16)).toFixed(2) }}</li>
            <li><strong>Fecha de inicio:</strong> {{ myinfoRenta.fechaInicio }}</li>
            <li><strong>Fecha de fin:</strong> {{ myinfoRenta.fechaFin }}</li>
            <!-- Agrega más información si es necesario -->
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="closeDialog">
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Cookies from 'js-cookie'
import billingForm from '@/components/billingForm.vue'
import summCard from '@/components/summaryCard.vue'

export default {
  name: 'BillingPage',
  components: {
    billingForm,
    summCard
  },
  layout: 'detail',
  middleware: [
    'detect-push',
    'auth-role'
  ],
  data () {
    return {
      carro: {},
      myinfoRenta: {
        ciudadInicio: '',
        ciudadFin: '',
        fechaInicio: '',
        fechaFin: '',
        horaInicio: '',
        horaFin: ''
      },
      successDialog: false
    }
  },
  mounted () {
    const rentalData = this.$route.query
    this.carro = rentalData

    if (this.carro) {
      // eslint-disable-next-line no-console
      console.log('entre')
      this.myinfoRenta.ciudadInicio = rentalData.ciudadInicio
      this.myinfoRenta.ciudadFin = rentalData.ciudadFin
      this.myinfoRenta.fechaInicio = rentalData.fechaInicio
      this.myinfoRenta.fechaFin = rentalData.fechaFin
      this.myinfoRenta.horaInicio = rentalData.horaInicio
      this.myinfoRenta.horaFin = rentalData.horaFin
    } else {
      // eslint-disable-next-line no-console
      console.error('No se recibio un ID de carro')
    }
  },
  methods: {
    async createResv (bodyResv) {
      this.token = Cookies.get('token')

      const body = {
        ...bodyResv,
        idcar: this.carro.id,
        costo: parseFloat(this.carro.precio) + parseFloat(this.carro.precio / 100 * 16)
      }

      await this.$axios.post('/reserva/create', body, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-type': 'application/json'
        }
      }).then((res) => {
        // eslint-disable-next-line no-console
        console.log('@@ res addResv => ', res)
        if (res && res.data && res.data.success) {
          // eslint-disable-next-line no-console
          console.log('@@ res data => ', res.data)
          this.successDialog = true
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error('@@ error => ', error)
      })
    },
    closeDialog () {
      this.successDialog = false
      this.$router.push('/cliente')
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
