<template>
  <v-row justify="center" align="center" class="index-background">
    <div id="app">
      <div class="container">
        <SideMenu />
        <RentalDetails class="rent" />
        <DoughnutChart />
        <RecentTransaction />
      </div>
    </div>
  </v-row>
</template>

<script>
import SideMenu from '~/components/SideMenu.vue'
import DoughnutChart from '~/components/DoughnutChart.vue'
import RentalDetails from '~/components/RentalDetails.vue'
import RecentTransaction from '~/components/RecentTransaction.vue'

export default {
  name: 'Grafic',
  components: {
    RentalDetails,
    SideMenu,
    DoughnutChart,
    RecentTransaction
  },
  layout: 'detail'
}
</script>

  <style>
  .index-background {
  background-color: #f5f5f5;

}
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
  }
.rent{
  width: 655px;
}
</style>
