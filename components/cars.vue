<template>
  <div class="container">
    <!-- Sidebar Filters -->
    <aside class="filters">
      <h3 class="titleFilter typeFilter">
        Type
      </h3>
      <label><input v-model="localFilters.type.sport" type="checkbox" @change="updateFilters"> Sport </label>
      <label><input v-model="localFilters.type.suv" type="checkbox" @change="updateFilters"> SUV </label>
      <label><input v-model="localFilters.type.mpv" type="checkbox" @change="updateFilters"> MPV </label>
      <label><input v-model="localFilters.type.sedan" type="checkbox" @change="updateFilters"> Sedan </label>
      <label><input v-model="localFilters.type.coupe" type="checkbox" @change="updateFilters"> Coupe </label>
      <label><input v-model="localFilters.type.hatchback" type="checkbox" @change="updateFilters"> Hatchback </label>
      <h3 class="titleFilter">
        Capacity
      </h3>
      <label><input v-model="localFilters.capacity.twoPerson" type="checkbox" @change="updateFilters"> 2 Person </label>
      <label><input v-model="localFilters.capacity.fourPerson" type="checkbox" @change="updateFilters"> 4 Person </label>
      <label><input v-model="localFilters.capacity.sixPerson" type="checkbox" @change="updateFilters"> 6 Person </label>
      <label><input v-model="localFilters.capacity.eightPlus" type="checkbox" @change="updateFilters"> 8 or More </label>

      <h3 class="titleFilter">
        Price
      </h3>
      <input v-model="localFilters.price" type="range" min="0" max="100000" @change="updateFilters">
      <p class="priceText">
        Max. ${{ localFilters.price }}
      </p>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'FiltrosS',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    filters: Object
  },
  data () {
    return {
      localFilters: {
        ...this.filters
      }
    }
  },
  methods: {
    updateFilters () {
      this.$emit('update-filters', this.localFilters)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  height: 100%;
  padding-top: 0;
}
.typeFilter {
  margin-top: 0 !important;
}
.filters {
  width: 360px;
  padding: 2em;
  background-color: hsl(0, 0%, 100%);
  border-right: 1px solid #ffffff;
  height: 100%;
}
.titleFilter {
  color: #90a3bf;
  text-transform: uppercase;
  font-size: .8em;
  font-weight: 500;
  margin-bottom: 1em;
  margin-top: 1.8em
}
.filters label {
  display: block;
  margin-bottom: .6em;
  color: #596780;
  font-weight: 500;
  font-size: 1.1em;
}
.filters input {
  margin-right: .8em;
}
.filters input[type="range"] {
  width: 100%;
}
.priceText {
  margin-top: .4em;
  font-size: 1.2em;
  font-weight: 500;
  margin-left: 12px;
}
.car-cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: flex-start;
}
.car-card {
  width: 250px;
  margin: 10px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.car-card img {
  width: 100%;
  height: auto;
}
.car-card button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
}
.car-card button:hover {
  background-color: #0056b3;
}
</style>
