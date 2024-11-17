<template>
  <v-row justify="center" align="start" class="index-background">
    <billingForm />
    <summCard />
  </v-row>
</template>

<script>
import billingForm from '@/components/billingForm.vue'
import summCard from '@/components/summaryCard.vue'

export default {
  name: 'BillingPage',
  components: {
    billingForm,
    summCard
  },
  layout: 'clienteLayout',
  middleware: 'detect-push'
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
