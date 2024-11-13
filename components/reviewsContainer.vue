<template>
  <div>
    <div class="reviewsContainer">
      <div class="headSection">
        <div class="contTitle">
          Reviews
        </div>
        <div class="numRev">
          13
        </div>
      </div>
      <div class="mainSection">
        <div class="reviewItem">
          <reviewCard />
        </div>
        <div class="reviewItem">
          <reviewCard />
        </div>
      </div>
      <div class="footerSection">
        <div class="showAll">
          Show All
        </div>
        <span class="downRow">
          ↓
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import reviewCard from '@/components/reviewCard.vue'

export default {
  components: {
    reviewCard
  }
}
</script>

<style>
.reviewsContainer {
  background-color: #ffffff;
  width: 76vw;
  border-radius: 16px;
  padding: 1.6em 1.4em;
  font-family: 'Plus Jakarta Sans';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.2);
}
.headSection {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.contTitle {
  margin-right: 1em;
  font-size: 1.2em;
  font-weight: 600;
  color: #1a202c;
}
.numRev {
  background-color: #3563e9;
  color: white;
  border-radius: 4px;
  padding: .4em 1em .4em 1em;
  width: 3em;
  font-weight: 500;
}
.mainSection {
  margin: 1.6em 0 .6em 0;
}
.reviewItem {
  margin-bottom: 1.2em;
}
.footerSection {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #90a3bf;
  font-weight: 600;
  cursor: pointer;
}
.showAll {
  margin-right: 1em;
}
</style>
