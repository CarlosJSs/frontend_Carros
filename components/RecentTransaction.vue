<template>
  <section class="popular-cars">
    <div class="recent-transaction">
      <h3>Recent Transaction</h3>
      <div v-for="transaction in recTransact" :key="transaction.idreserva" class="rowTransaction">
        <div class="imgRowTrans">
          <img src="~/assets/c1.png" alt="Car Image" class="imgCarTrans">
        </div>
        <div class="rightInfoTrans">
          <div class="infoCarTrans">
            <p class="carNameTrans">
              {{ transaction.carName }}
            </p>
            <p class="typeTransCar">
              {{ transaction.carCategory }}
            </p>
          </div>
          <div class="transInfo">
            <p class="dateTrans">
              {{ transaction.fechainicio }}
            </p>
            <p class="priceTrans">
              {{ transaction.costo }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecentTransaction',
  props: {
    recTransact: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Plus Jakarta Sans';
}
.recent-transaction {
  text-align: left;
}
.popular-cars {
  padding: 2em;
  width: 100%;
  background-color: white;
  border-radius: 16px;
}
.rowTransaction {
  border-bottom: 1px solid rgba(195, 212, 233, .4);
  padding-bottom: 1em;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
}
.rightInfoTrans {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #1a202c;
  margin-left: 1em;
}
.rightInfoTrans p {
  margin-bottom: 0;
}
.imgCarTrans {
  width: 8em;
}
.transInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.carNameTrans, .priceTrans {
  font-weight: 700;
  font-size: 1em;
}
.dateTrans, .typeTransCar {
  color: #90a3bf;
  font-size: .9em;
}
</style>
