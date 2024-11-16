<template>
  <div>
    <div class="reviewCard">
      <div class="imgUser">
        <img :src="imgUser" alt="" class="imgItem">
      </div>
      <div class="infoReview">
        <div class="headReview">
          <div class="userInfo">
            <div class="userName">
              {{ userName }}
            </div>
            <div class="userWork">
              {{ workUser }}
            </div>
          </div>
          <div class="reviewInfo">
            <div class="dateRev">
              {{ dateRev }}
            </div>
            <div class="revStars">
              <span v-for="n in estrellas" :key="'estrella-' + n">
                ⭐
              </span>
              <span v-for="n in estrellasWhite" :key="'estrellaWhite-' + n">
                ✩
              </span>
            </div>
          </div>
        </div>
        <div class="descReview">
          <p class="descR">
            {{ descReview }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUser: {
      type: String,
      required: true,
      default: () => require('@/assets/usuario1.jpg')
    },
    userName: {
      type: String,
      required: true,
      default: 'Alex Stanton'
    },
    workUser: {
      type: String,
      required: true,
      default: 'CEO at Bukalapak'
    },
    dateRev: {
      type: String,
      required: true,
      default: '21 July 2022'
    },
    numStars: {
      type: Number,
      required: true,
      default: 4
    },
    descReview: {
      type: String,
      required: true,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi consectetur expedita ipsum dolorem itaque explicabo, modi fugit quos provident eaque ea sequi qui quas dicta consequatur inventore obcaecati nobis?'
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

.reviewCard {
  width: 100%;
  height: 8em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.imgUser {
  width: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}
.imgItem {
  width: 70%;
  border-radius: 100%;
}
.infoReview {
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.headReview {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.descReview {
  width: 100%;
  margin-top: .8em;
  height: 4.2em;
  overflow-y: auto;
}
.descR {
  color: #1a202c;
  font-weight: 300;
}
.userName {
  color: #1a202c;
  font-weight: 700;
  font-size: 1.2em;
  margin-bottom: .5em;
}
.userWork {
  color: #90a3bf;
  font-size: .9em;
  font-weight: 300;
}
.dateRev {
  color: #90a3bf;
  font-size: .9em;
  margin-bottom: .5em;
  font-weight: 400;
}
.reviewInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
