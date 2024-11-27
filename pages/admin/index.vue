<template>
  <v-row justify="center" class="index-background">
    <RentalDetails class="leftSide" />
    <div class="rightSide">
      <DoughnutChart class="chartDiv" />
      <RecentTransaction :rec-transact="transactions" />
    </div>
  </v-row>
</template>

<script>
import Cookies from 'js-cookie'
import DoughnutChart from '~/components/DoughnutChart.vue'
import RentalDetails from '~/components/RentalDetails.vue'
import RecentTransaction from '~/components/RecentTransaction.vue'

export default {
  name: 'Grafic',
  components: {
    RentalDetails,
    DoughnutChart,
    RecentTransaction
  },
  layout: 'adminLayout',
  data () {
    return {
      idUsuario: Cookies.get('userID'),
      transactions: [],
      cars: []
    }
  },
  mounted () {
    this.loadRecentTrans()
    this.loadCarrosInfo()
  },
  methods: {
    loadRecentTrans () {
      this.token = Cookies.get('token')

      this.$axios.get('/reserva', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).then((res) => {
        if (res.data && res.data.success && Array.isArray(res.data.reservas)) {
          const idUsuario = this.idUsuario
          const recentReservations = res.data.reservas
            .filter(reserva => reserva.idusuario === idUsuario)
            .sort((a, b) => new Date(b.fechainicio) - new Date(a.fechainicio))
            .slice(0, 5)

          this.transactions = recentReservations
          // eslint-disable-next-line no-console
          console.log('Reservas recientes:', recentReservations)

          this.mergeCarData()
        } else {
          // eslint-disable-next-line no-console
          console.error('El resultado no es un array válido.')
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error al cargar las reservas:', error)
      })
    },
    loadCarrosInfo () {
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
          this.mergeCarData()
        } else {
          // eslint-disable-next-line no-console
          console.error('No es array valido')
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error('@@@ error => ', error)
      })
    },
    mergeCarData () {
      if (this.transactions.length && this.cars.length) {
        this.transactions = this.transactions.map((transaction) => {
          const carInfo = this.cars.find(car => car.id === transaction.idcar)

          if (carInfo) {
            return {
              ...transaction,
              carName: carInfo.nombre || 'Unknown',
              carCategory: carInfo.categoria || 'Unknown'
            }
          }

          return transaction
        })

        // eslint-disable-next-line no-console
        console.log('Transacciones con información de carros:', this.transactions)
      }
    }
  }
}
</script>

<style>
.index-background {
  background-color: #f5f5f5;
  padding: 1.6em 2em;
}
.leftSide {
  width: 46%;
  height: 100%
}
.rightSide {
  width: 34%;
  height: 100%;
  margin-left: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.chartDiv {
  margin-bottom: 2em;
}
</style>
