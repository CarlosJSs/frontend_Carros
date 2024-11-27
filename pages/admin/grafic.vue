<template>
  <v-row justify="center" class="index-background">
    <RentalDetails class="leftSide" />
    <div class="rightSide">
      <DoughnutChart class="chartDiv" />
      <RecentTransaction />
    </div>
  </v-row>
</template>

<script>
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
  layout: 'adminLayout'
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
