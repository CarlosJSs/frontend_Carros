<template>
  <v-row justify="center" align="center" class="index-background">
    <section class="popular-cars">
      <div class="recent-transaction">
        <h3>Recent Transaction</h3>
        <ul>
          <li v-for="transaction in transactions" :key="transaction.id">
            <div>
              <img src="~/assets/c1.png" alt="Car Image" />
              <span>{{ transaction.name }}</span>
            </div>
            <span>{{ transaction.price }}</span>
          </li>
        </ul>
      </div>
    </section>
  </v-row>
</template>

<script>
export default {
  name: 'RecentTransaction',
  data () {
    return {
      transactions: [
        { id: 1, name: 'Nissan GT-R', price: '$80.00', image: 'nissan.jpg' },
        { id: 2, name: 'Koenigsegg', price: '$99.00', image: 'koenigsegg.jpg' },
        { id: 3, name: 'Rolls-Royce', price: '$80.00', image: 'rollsroyce.jpg' },
        { id: 4, name: 'CR-V', price: '$80.00', image: 'crv.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.index-background {
  background-color: #ffffff;
}
.recent-transaction {
  text-align: left;
}
.popular-cars {
  padding: 20px;
}
.recent-transaction ul {
  list-style: none;
  padding: 0;
}
.recent-transaction li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.recent-transaction img {
  width: 50px;
  height: auto;
  margin-right: 10px;
}
</style>
