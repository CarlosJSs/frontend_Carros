<template>
  <div class="pickup-form">
    <div class="form-group">
      <label>Drop-Off</label><br>
      <label> Location</label><br>
      <select v-model="pickupLocation">
        <option disabled value="">
          Select a city
        </option>
        <option v-for="city in cities" :key="city">
          {{ city }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label>Date</label><br>
      <input type="date" v-model="pickupDate">
    </div>
    <div class="form-group">
      <label>Time</label><br>
      <input type="time" v-model="pickupTime">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pickupLocation: '',
      dropoffLocation: '',
      pickupDate: '',
      pickupTime: '',
      cities: ['New York', 'Los Angeles', 'Chicago', 'Houston']
    }
  },
  methods: {
    swapLocations () {
      const temp = this.pickupLocation
      this.pickupLocation = this.dropoffLocation
      this.dropoffLocation = temp
    }
  }
}
</script>

<style scoped>
.pickup-form {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
}
.form-group {
  flex: 1;
}
</style>
