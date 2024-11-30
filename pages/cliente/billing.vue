<template>
  <v-row justify="center" align="start" class="index-background">
    <billingForm @createResvEvent="createResv" />
    <summCard :carro="carro" />
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
      carro: {}
    }
  },
  mounted () {
    const rentalData = this.$route.query
    this.carro = rentalData

    if (this.carro) {
      // eslint-disable-next-line no-console
      console.log('entre')
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
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error('@@ error => ', error)
      })

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
