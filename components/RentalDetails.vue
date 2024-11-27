<template>
  <div class="rental-details">
    <h3 class="titleRental">
      Details Rental
    </h3>
    <div class="map-preview">
      <img src="~/assets/mapa.png" alt="Car Image" class="imgMap">
    </div>
    <div class="details">
      <div class="infoDetails">
        <div class="imgDetails">
          <img src="./../assets/miniCarDet.png" alt="imgCarroMini" class="imgMiniCar">
        </div>
        <div class="textDetails">
          <h4 class="nameCarDet">
            Nissan GT-R
          </h4>
          <p class="typeCarDet">
            Sport Car
          </p>
        </div>
      </div>
      <div class="locations">
        <div class="pick">
          <pickUpV2 />
        </div>
      </div>
      <div class="lineDivider">
        ‎
      </div>
      <div class="price">
        <div class="priceInfo">
          <div class="titlePrice">
            Total Rent Pice
          </div>
          <div class="descPrice">
            Overall Price and includes rental discount
          </div>
        </div>
        <div class="totalPrice">
          $80.00
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pickUpV2 from '@/components/pickGraph.vue'
export default {
  name: 'RentalDetails',
  components: {
    pickUpV2
  }
}
</script>

<style scoped>
.rental-details {
  padding: 2em;
  border-radius: 10px;
  background-color: #fff;
  height: fit-content;
}
.imgMap {
  width: 100%;
  border-radius: 16px;
}
.imgMiniCar {
  width: 100%;
}
.infoDetails {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1em;
}
.imgDetails {
  width: 25%;
}
.textDetails {
  margin-left: 1em;
}
.nameCarDet {
  color: #1a202c;
  font-weight: 800;
  font-size: 1.6em;
}
.typeCarDet {
  color: #3d5278;
}
.titleRental {
  margin-bottom: 1em;
  font-size: 1.6em;
  font-weight: 700;
}
.details {
  text-align: left;
}
.locations div {
  margin-bottom: 5px;
}
.lineDivider {
  width: 100%;
  height: 1px;
  background-color: rgba(195, 212, 233, .4);
  margin-top: 2.8em;
  margin-bottom: 2.4em;
  border-radius: 24px
}
.price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  margin-bottom: .6em;
}
.titlePrice {
  font-size: 1.4em;
  font-weight: 700;
  color: #1a202c;
}
.descPrice {
  color: #90a3bf;
}
.totalPrice {
  color: #1a202c;
  font-weight: 700;
  font-size: 2.1em;
}
.pick {
  margin-top: 1em;
}
</style>
