<template>
  <div>
    <div class="reviewCard">
      <div class="imgUser">
        <img src="./../assets/usuario1.jpg" alt="" class="imgItem">
      </div>
      <div class="infoReview">
        <div class="headReview">
          <div class="userInfo">
            <div class="userName">
              Alex Stanton
            </div>
            <div class="userWork">
              CEO at Bukalapak
            </div>
          </div>
          <div class="reviewInfo">
            <div class="dateRev">
              21 July 2022
            </div>
            <div class="revStars">
              ⭐⭐⭐⭐✩
            </div>
          </div>
        </div>
        <div class="descReview">
          <p class="descR">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi consectetur expedita ipsum dolorem itaque explicabo, modi fugit quos provident eaque ea sequi qui quas dicta consequatur inventore obcaecati nobis?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
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
