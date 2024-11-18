<template>
  <v-row justify="center" align="center" class="index-background">
    <div id="app">
      <div class="container">
        <SideMenu />
        <RentalDetails />
        <RecentTransaction />
      </div>
    </div>
  </v-row>
</template>

<script>
import SideMenu from '~/components/SideMenu.vue'
import RentalDetails from '~/components/RentalDetails.vue'
import RecentTransaction from '~/components/RecentTransaction.vue'

export default {
  name: 'Grafic',
  components: {
    RentalDetails,
    SideMenu,
    RecentTransaction
  },
  layout: 'detail'
}
</script>

  <style>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
  }
</style>
