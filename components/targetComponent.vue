<template>
  <section class="hero">
    <div v-for="banner in banners" :key="banner.id" class="hero-card">
      <h2>{{ banner.title }}</h2>
      <p>{{ banner.description }}</p>
      <button>Explore</button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      banners: [
        { id: 1, title: 'The Best Platform for Car Rental', description: 'Ease of doing car rentals safely and reliably.' },
        { id: 2, title: 'Easy Way to Rent a Car', description: 'Providing affordable prices and comfortable services.' }
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  display: flex;
  gap: 20px;
  justify-content: space-around;
  padding: 20px 0;
}
.hero-card {
  background-color: #007bff;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 45%;
}
.hero-card h2 {
  margin-bottom: 10px;
  font-size: 18px;
}
button {
  background-color: #1976d2;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
