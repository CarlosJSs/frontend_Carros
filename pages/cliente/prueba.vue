<template>
  <v-row justify="center" align="center" class="index-background">
    <div id="app">
      <div class="container">
        <DoughnutChart />
      </div>
    </div>
  </v-row>
</template>

<script>
import DoughnutChart from '~/components/DoughnutChart.vue'

export default {
  name: 'Grafic',
  components: {
    DoughnutChart
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
