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
              {{ carName }}
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
            {{ carDescrip }}
          </p>
        </div>
        <div class="rowCard rowProps">
          <div class="leftInfo">
            <div class="rowInfo">
              <div class="carProp">
                TypeCar
              </div>
              <div class="infoProp">
                {{ typeCar }}
              </div>
            </div>
            <div class="rowInfo secondRinf">
              <div class="carProp">
                Steering
              </div>
              <div class="infoProp">
                {{ steeringCar }}
              </div>
            </div>
          </div>
          <div class="rightInfo">
            <div class="rowInfo">
              <div class="carProp">
                Capacity
              </div>
              <div class="infoProp">
                {{ capacityCar }}
              </div>
            </div>
            <div class="rowInfo secondRinf">
              <div class="carProp">
                Gasoline
              </div>
              <div class="infoProp">
                {{ gasonileCar }}
              </div>
            </div>
          </div>
        </div>
        <div class="rowCard btnPrice">
          <div class="carPrice">
            <div class="actualPrice">
              ${{ actualPrice }}/
              <span class="priceTime">
                days
              </span>
            </div>
            <div class="prevPrice">
              ${{ prevPrice }}
            </div>
          </div>
          <div class="btnRent">
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
    carName: {
      type: String,
      required: true,
      default: 'Nissan GT-R'
    },
    carDescrip: {
      type: String,
      required: true,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quasi modi, reiciendis quidem sapiente quam laboriosam voluptatibus quod qui accusamus sint nemo esse consectetur voluptate, ullam nam! Tempore, ullam in.'
    },
    typeCar: {
      type: String,
      required: true,
      default: 'Sport'
    },
    steeringCar: {
      type: String,
      required: true,
      default: 'Manual'
    },
    capacityCar: {
      type: String,
      required: true,
      default: '2 Person'
    },
    gasonileCar: {
      type: String,
      required: true,
      default: '70L'
    },
    actualPrice: {
      type: String,
      required: true,
      default: '80.00'
    },
    prevPrice: {
      type: String,
      required: true,
      default: '100.00'
    },
    numReviews: {
      type: String,
      required: true,
      default: '440'
    },
    numStars: {
      type: Number,
      required: true,
      default: 4
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
      return Array(this.numStars).fill(null)
    },
    estrellasWhite () {
      return Array(5 - this.numStars).fill(null)
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.carCard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Plus Jakarta Sans';
  background-color: #f6f7f9;
  width: 76vw;
  border-radius: 16px;
  padding: 2em 1em;
  height: 510px;
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
  height: 100%;
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
  width: 42%;
}
.rightInfo {
  width: 42%;
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
  margin-top: 2.6em;
  margin-bottom: 2em;
}

</style>
