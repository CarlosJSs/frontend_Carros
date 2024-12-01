<template>
  <div>
    <div class="carCard">
      <div class="imagesContainer">
        <div class="bigImage">
          <img src="./../assets/imgExample1.png" alt="bigImage" class="imgBig">
        </div>
        <div class="smallImages">
          <div class="descImage">
            <img src="./../assets/imgExample2.png" alt="img2" class="imgSmall">
          </div>
          <div class="descImage">
            <img src="./../assets/imgExample3.png" alt="img3" class="imgSmall">
          </div>
          <div class="descImage">
            <img src="./../assets/imgExample4.png" alt="img4" class="imgSmall">
          </div>
        </div>
      </div>
      <div class="infoContainer">
        <div class="rowCard">
          <div class="carTitleDesc">
            <div class="carTitle">
              {{ carroinfo.nombre }}
            </div>
            <div class="carReview">
              <div class="carStars">
                <span v-for="n in estrellas" :key="'estrella-' + n">
                  ⭐
                </span>
                <span v-for="n in estrellasWhite" :key="'estrellaWhite-' + n">
                  ✩
                </span>
              </div>
              <div class="reviewsNum">
                {{ numReviews }} + Reviewer
              </div>
            </div>
          </div>
          <div class="loveIcon">
            <span v-if="lovedCar">
              ❤️
            </span>
            <span v-else>
              🤍
            </span>
          </div>
        </div>
        <div class="rowCard">
          <p class="carDesc">
            {{ carroinfo.descripcion }}
          </p>
        </div>
        <div class="rowCard rowProps">
          <div class="leftInfo">
            <div class="rowInfo">
              <div class="carProp">
                TypeCar
              </div>
              <div class="infoProp">
                {{ carroinfo.categoria }}
              </div>
            </div>
            <div class="rowInfo secondRinf">
              <div class="carProp">
                Steering
              </div>
              <div class="infoProp infoTrans">
                {{ carroinfo.transmision }}
              </div>
            </div>
          </div>
          <div class="rightInfo">
            <div class="rowInfo">
              <div class="carProp">
                Capacity
              </div>
              <div class="infoProp">
                {{ carroinfo.pasajeros }}
              </div>
            </div>
            <div class="rowInfo secondRinf">
              <div class="carProp">
                Gasoline
              </div>
              <div class="infoProp">
                {{ carroinfo.capacidad_tanque }}
              </div>
            </div>
          </div>
        </div>
        <div class="rowCard btnPrice">
          <div class="carPrice">
            <div class="actualPrice">
              ${{ carroinfo.precio }}/
              <span class="priceTime">
                days
              </span>
            </div>
            <div class="prevPrice">
              ${{ carroinfo.precio + 24 }}
            </div>
          </div>
          <div class="btnRent" @click="rentCar(carroinfo.id)">
            Rent Now
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carroinfo: {
      type: Object,
      required: true,
      default: () => ({})
    },
    numReviews: {
      type: Number,
      required: true,
      default: 44
    },
    lovedCar: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data () {
    return {

    }
  },
  computed: {
    estrellas () {
      const rating = parseInt(this.carroinfo.rating) || 0
      return Array(Math.min(Math.max(rating, 0), 5)).fill(null)
    },
    estrellasWhite () {
      const rating = parseInt(this.carroinfo.rating) || 0
      return Array(5 - Math.min(Math.max(rating, 0), 5)).fill(null)
    }
  },
  methods: {
    rentCar (id) {
      this.$emit('rentCarEvent', {
        id
      })
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.carCard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Plus Jakarta Sans';
  background-color: #f6f7f9;
  border-radius: 16px;
  padding: 2em 0;
  height: 510px;
  width: 1100px;
}
.imagesContainer {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.bigImage {
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.imgBig {
  width: 90%;
  height: 94%;
  overflow: hidden;
}
.smallImages {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 25%;
}
.descImage {
  width: 27%;
  height: 100%;
  overflow: hidden;
  border-radius: 14px;
  display: flex;
}
.imgSmall {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.infoContainer {
  width: 50%;
  border-radius: 16px;
  background-color: #ffffff;
  margin-right: 1.6em;
  height: fit-content;
  overflow-y: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.2);
}
.rowCard {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
  width: 100%;
  padding: 0 2em;
}
.rowProps {
  margin-top: 2em;
}
.carTitle {
  font-weight: 600;
  font-size: 2em;
}
.carReview {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.reviewsNum {
  font-size: 0.8em;
  font-weight: 400;
  color: #596780;
  margin-left: 8px;
}
.carDesc {
  text-align: justify;
  color: #596780;
  margin-bottom: 0 !important;
  max-height: 8em;
  overflow-y: auto;
}
.rowInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.secondRinf {
  margin-top: 1.2em;
}
.leftInfo {
  width: 54%;
}
.rightInfo {
  width: 36%;
}
.carProp {
  color: #90a3bf;
  font-size: 1em;
  font-weight: 400;
}
.infoProp {
  color: #596780;
  font-size: 1em;
  font-weight: 500;
  text-align: end;
}
.infoTrans {
  font-size: .8em;
}
.carPrice {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.actualPrice {
  font-size: 2em;
  font-weight: 600;
}
.prevPrice {
  color: #90a3bf;
  text-decoration: line-through;
  font-weight: 600;
  font-size: 1.1em;
}
.priceTime {
  color: #90a3bf;
  font-size: 0.5em;
  font-weight: 600;
}
.btnRent {
  color: white;
  background-color: #3563e9;
  border-radius: 4px;
  padding: 12px 20px;
  cursor: pointer;
}
.btnRent:hover {
  background-color: #2929da;
}
.btnPrice {
  margin-top: 1.6em;
  margin-bottom: 2em;
}

</style>
