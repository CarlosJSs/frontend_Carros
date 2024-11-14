<template>
  <div class="container">
    <div class="form-section">
      <label>
        <input type="radio" v-model='option' value="pickup" >
        Pick-Up
      </label>
      <div class="form-group">
        <label>Locations</label>
        <select v-model='pickupLocation'>
          <option disabled value="">Select your city</option>
          <option v-for="city in cities" :key='city'>{{ city }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date" v-model='pickupDate' />
      </div>
      <div class="form-group">
        <label>Time</label>
        <input type="time" v-model='pickupTime' />
      </div>
    </div>

    <button @click='swapLocations' class="swap-button">⇄</button>

    <div class="form-section">
      <label>
        <input type="radio" v-model='option' value="dropoff" />
        Drop-Off
      </label>
      <div class="form-group">
        <label>Locations</label>
        <select v-model='dropoffLocation'>
          <option disabled value="">Select your city</option>
          <option v-for='city in cities' :key="city">{{ city }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date" v-model='dropoffDate' />
      </div>
      <div class="form-group">
        <label>Time</label>
        <input type="time" v-model='dropoffTime' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: 'pickup',
      pickupLocation: '',
      pickupDate: '',
      pickupTime: '',
      dropoffLocation: '',
      dropoffDate: '',
      dropoffTime: '',
      cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'] // Ejemplo de ciudades
    }
  },
  methods: {
    swapLocations () {
      const tempLocation = this.pickupLocation
      this.pickupLocation = this.dropoffLocation
      this.dropoffLocation = tempLocation

      const tempDate = this.pickupDate
      this.pickupDate = this.dropoffDate
      this.dropoffDate = tempDate

      const tempTime = this.pickupTime
      this.pickupTime = this.dropoffTime
      this.dropoffTime = tempTime
    }
  }
}
</script>

    <style scoped>
    .container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px;
      background-color: #f7f9fc;
      border-radius: 8px;
    }

    .form-section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: bold;
      margin-bottom: 5px;
    }

    select,
    input[type="date"],
    input[type="time"] {
      padding: 8px;
      border: 1px solid #d1d1d1;
      border-radius: 4px;
      font-size: 14px;
    }

    .swap-button {
      background-color: #0062cc;
      color: #fff;
      font-size: 20px;
      padding: 10px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .swap-button:hover {
      background-color: #004a9f;
    }
    </style>
