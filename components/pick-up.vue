<template>
  <div class="pickup-form">
    <!-- Panel de Pick-Up -->
    <div class="form-panel">
      <h4>Pick-Up</h4>
      <div class="form-row">
        <div class="form-group">
          <label>Locations</label>
          <select v-model="dataResv.pickupLocation">
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
          <input v-model="dataResv.pickupDate" type="date">
        </div>
        <div class="form-group">
          <label>Time</label>
          <input v-model="dataResv.pickupTime" type="time">
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
          <select v-model="dataResv.dropoffLocation" :disabled="!pickupComplete">
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
          <input v-model="dataResv.dropoffDate" type="date" :min="dropoffMinDate" :disabled="!pickupComplete">
        </div>
        <div class="form-group">
          <label>Time</label>
          <input v-model="dataResv.dropoffTime" type="time" :disabled="!dataResv.dropoffDate">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataResv: {
        pickupLocation: '',
        dropoffLocation: '',
        pickupDate: '',
        pickupTime: '',
        dropoffDate: '',
        dropoffTime: ''
      },
      dropoffMinDate: '',
      cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Irapuato', 'Guanajuato', 'Leon']
    }
  },
  computed: {
    pickupComplete () {
      return (
        this.dataResv.pickupLocation &&
        this.dataResv.pickupDate &&
        this.dataResv.pickupTime
      )
    }
  },
  watch: {
    dataResv: {
      deep: true,
      handler (newValue) {
        this.$emit('rentDataEvent', {
          ...newValue
        })
      }
    },
    'dataResv.pickupDate' (newDate) {
      this.updateDropoffMinDate(newDate)
    }
  },
  methods: {
    swapLocations () {
      const temp = this.dataResv.pickupLocation
      this.dataResv.pickupLocation = this.dataResv.dropoffLocation
      this.dataResv.dropoffLocation = temp
    },
    updateDropoffMinDate (pickupDate) {
      this.dropoffMinDate = pickupDate
      if (this.dataResv.dropoffDate < this.dropoffMinDate) {
        this.dataResv.dropoffDate = ''
        this.dataResv.dropoffTime = ''
      }
    }
  }
}
</script>

<style scoped>
.pickup-form {
  display: flex;
  align-items: center;
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
