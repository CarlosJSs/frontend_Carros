<template>
  <div class="cardSummary">
    <div class="rowCardSM titleCardSM">
      Rental Summary
    </div>
    <div class="rowCardSM descCardSM">
      Prices may change depending on the length of the rental and the price of your rental car.
    </div>
    <div class="rowCardSM rowImgTitle">
      <div class="imgCarSM">
        <img :src="carIMG" class="imageCarSM">
      </div>
      <div class="infoCarSM">
        <div class="titleCarSM">
          {{ carName }}
        </div>
        <div class="revCarSM">
          <div class="ratinStars">
            <span v-for="n in estrellas" :key="'estrella-' + n">
              ⭐
            </span>
            <span v-for="n in estrellasWhite" :key="'estrella-' + n">
              ✩
            </span>
          </div>
          <div class="numRevSM">
            {{ numReviewers }}+ Reviewer
          </div>
        </div>
      </div>
    </div>
    <div class="rowCardSM dividerCardSM">
      .
    </div>
    <div class="rowCardSM rowSubTotal">
      <div class="subTtext">
        Subtotal
      </div>
      <div class="subTnum">
        ${{ subTotal }}
      </div>
    </div>
    <div class="rowCardSM rowTax">
      <div class="taxText">
        Tax
      </div>
      <div class="taxNum">
        ${{ taxes }}
      </div>
    </div>
    <div class="rowCardSM rowInputPCode">
      <input type="text" placeholder="Apply promo code" name="" class="inputPCode">
      <button class="btnApplyC">
        Apply now
      </button>
    </div>
    <div class="rowCardSM rowTotalPrice">
      <div class="rentalPriceInfo">
        <div class="rentalTitle">
          Total Rental Price
        </div>
        <div class="subTitleRental">
          Overall price and includes rental discount
        </div>
      </div>
      <div class="rentalPriceNum">
        ${{ total }}
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
    carIMG: {
      type: String,
      required: true,
      default: () => require('@/assets/cardSummaryExample.png')
    },
    numStars: {
      type: Number,
      required: true,
      default: 4
    },
    numReviewers: {
      type: Number,
      required: true,
      default: 440
    },
    subTotal: {
      type: Number,
      required: true,
      default: 80.01
    },
    taxes: {
      type: Number,
      required: true,
      default: 0
    },
    total: {
      type: Number,
      required: true,
      default: 80.01
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.cardSummary {
  font-family: 'Plus Jakarta Sans';
  border-radius: 16px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 1.4em 1.4em;
  width: 492px;
}
.titleCardSM {
  color: #1a202c;
  font-size: 1.4em;
  font-weight: 700;
}
.descCardSM {
  color: #90a3bf;
  font-weight: 400;
  font-size: .9em;
  margin-bottom: 2em;
  margin-top: .6em;
}
.rowImgTitle {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.imageCarSM {
  width: 8em;
  border-radius: 14px;
}
.infoCarSM {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.infoCarSM {
  margin-left: 1.4em;
}
.titleCarSM {
  font-size: 2.2em;
  font-weight: 700;
  color: #1a202c;
}
.revCarSM {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.numRevSM {
  font-size: .8em;
  font-weight: 400;
  color: #596780;
  margin-left: 1em;
}
.dividerCardSM{
  margin: 1.5em 0;
  background-color: rgba(195, 212, 233, .4);
  height: 1px;
  border-radius: 26px;
  color: white;
}
.rowSubTotal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2em;
}
.subTtext, .taxText {
  color: #90a3bf;
  font-weight: 500;
  font-size: 1.1em;
}
.subTnum, .taxNum {
  color: #1a202c;
  font-weight: 600;
  font-size: 1.1em;
}
.rowTax {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6em;
}
.rowInputPCode {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #e9eaeec2;
  border-radius: 16px;
  margin: 0 0.2em 0 0.2em;
  height: 56px;
}
.inputPCode {
  padding-left: 2em;
  height: 80%;
  width: 70%;
  color: #1a202c;
  font-weight: 500;
  font-size: .9em;
}
.btnApplyC {
  height: 100%;
  margin-right: .6em;
  width: 30%;
  color: #1a202c;
  font-weight: 600;
  font-size: 1em;
}
.rowTotalPrice {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.8em;
}
.rentalTitle {
  color: #1a202c;
  font-size: 1.4em;
  font-weight: 700;
}
.subTitleRental {
  color: #90a3bf;
  font-weight: 400;
  font-size: .9em;
}
.rentalPriceNum {
  color: #1a202c;
  font-size: 2em;
  font-weight: 700;
}
</style>
