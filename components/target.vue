<template>
  <section class="hero">
    <!-- Itera sobre cada banner en banners -->
    <div class="hero-card" v-for="banner in banners" :key="banner.id">
      <h2>{{ banner.title }}</h2>
      <p>{{ banner.description }}</p>
      <button @click="rentCar(car)">Rent Now</button>
      <img src="~/assets/c1.png" alt="Car Image" width="200" height="100">
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data () {
    return {
      banners: [
        { id: 1, title: 'Discover New Adventures', description: 'Find the best car for your journey.' },
        { id: 2, title: 'Comfort & Style', description: 'Explore our luxury and comfortable cars.' }
      ]
    }
  }
}
</script>

  <style scoped>
  .hero {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
  }
  .hero-card {
    background-color: #43a9df;
    padding: 15px;
    width: 500px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .hero-card h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .hero-card p {
    font-size: 14px;
    margin-bottom: 15px;
    color: #555;
  }
  .hero-card button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
  }
  .hero-card img {
    margin-top: 10px;
    border-radius: 5px;
  }
  button {
    background-color: #1976d2;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
