<template>
  <div class="rental-details">
    <h3>Details Rental</h3>
    <div class="map-preview">
      <img src="~/assets/mapa.png" alt="Car Image" />
    </div>
    <div class="details">
      <h4>Nissan GT-R</h4>
      <p>Sport Car</p>
      <div class="locations">
        <div>
          <strong>Pick-Up:</strong>
          <p>Kota Semarang</p>
        </div>
        <div>
          <strong>Drop-Off:</strong>
          <p>Kota Semarang</p>
        </div>
      </div>
      <p class="total-price">$80.00</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RentalDetails'
}
</script>

<style scoped>
.rental-details {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
}

.details {
  text-align: left;
}
.locations div {
  margin-bottom: 5px;
}
.total-price {
  font-size: 18px;
  color: #007BFF;
  font-weight: bold;
  margin-top: 10px;
}
</style>
