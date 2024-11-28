<template>
  <div class="pickup-form">
    <!-- Panel de Pick-Up -->
    <div class="form-panel">
      <h4>Pick-Up</h4>
      <div class="form-row">
        <div class="form-group">
          <label>Locations</label>
          <select v-model="pickupLocation">
            <option disabled value="">
              Select your city
            </option>
            <option v-for="city in cities" :key="city">
              {{ city }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>Date</label>
          <input v-model="pickupDate" type="date">
        </div>
        <div class="form-group">
          <label>Time</label>
          <input v-model="pickupTime" type="time">
        </div>
      </div>
    </div>

    <!-- Botón de intercambio -->
    <div class="swap-button-container">
      <button class="swap-button" @click="swapLocations">
        ⇄
      </button>
    </div>

    <!-- Panel de Drop-Off -->
    <div class="form-panel">
      <h4>Drop-Off</h4>
      <div class="form-row">
        <div class="form-group">
          <label>Locations</label>
          <select v-model="dropoffLocation">
            <option disabled value="">
              Select your city
            </option>
            <option v-for="city in cities" :key="city">
              {{ city }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>Date</label>
          <input v-model="dropoffDate" type="date">
        </div>
        <div class="form-group">
          <label>Time</label>
          <input v-model="dropoffTime" type="time">
        </div>
      </div>
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
      dropoffDate: '',
      dropoffTime: '',
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
  align-items: center;
  background-color: #f9fafc;
  border-radius: 10px;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.form-panel {
  flex: 1;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-panel h4 {
  font-size: 18px;
  margin-bottom: 15px;
}

.form-row {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
}

.form-group {
  flex: 1;
}

label {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

select,
input[type='date'],
input[type='time'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

.swap-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.swap-button {
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 20%;
  font-size: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.swap-button:hover {
  background-color: #125ea4;
}
</style>
