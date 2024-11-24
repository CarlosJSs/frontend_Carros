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
        <div class="pick">
          <pickUp2></pickUp2>
        </div>
        <div class="pick">
          <pickUp></pickUp>
        </div>
      </div>
      <br>
      <div class="price">
        <strong style="font-size: 20px">Total Rent Price</strong>
        <p class="total-price">$80.00</p>
      </div>
    </div>
  </div>
</template>

<script>
import pickUp from '@/components/pick-up.vue'
import pickUp2 from '@/components/pickUp02.vue'
export default {
  name: 'RentalDetails',
  components: {
    pickUp,
    pickUp2
  }
}
</script>

<style scoped>
.rental-details {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
}
.price{
  display: flex;
  gap: 55%; /* Espaciado entre los elementos */
}
.details {
  text-align: left;
}
.locations div {
  margin-bottom: 5px;
}
.total-price {
  font-size: 28px;
  color: #0a0a0a;
  font-weight: bold;
  margin-top: 10px;
}
.pick{
  width: 700px;
}
.img{

}
</style>
