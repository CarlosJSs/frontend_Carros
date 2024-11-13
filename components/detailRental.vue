<template>
    <div>
      <!-- Header -->
      <header>
        <div class="logo">MORENT</div>
  
        <!-- Search bar with filter icon -->
        <div class="search-bar">
          <input type="text" v-model="searchQuery" placeholder="Search something here">
          <i class="fas fa-sliders-h" @click="toggleFilters"></i> <!-- Filter icon -->
        </div>
  
        <!-- Icons on the right side -->
        <div class="header-icons">
          <i class="fas fa-heart"></i>
          <i class="fas fa-bell"></i>
          <i class="fas fa-cog"></i>
          <i class="fas fa-user-circle"></i>
        </div>
      </header>
  
      <!-- Main Content -->
      <main>
        <!-- Sidebar Filters -->
        <aside class="filters" v-show="filtersVisible">
          <h3>Type</h3>
          <label><input type="checkbox" v-model="filters.sport"> Sport (10)</label>
          <label><input type="checkbox" v-model="filters.suv"> SUV (12)</label>
          <label><input type="checkbox" v-model="filters.mpv"> MPV (6)</label>
          <label><input type="checkbox" v-model="filters.sedan"> Sedan (20)</label>
          <label><input type="checkbox" v-model="filters.coupe"> Coupe (14)</label>
          <label><input type="checkbox" v-model="filters.hatchback"> Hatchback (14)</label>
  
          <h3>Capacity</h3>
          <label><input type="checkbox" v-model="filters.twoPerson"> 2 Person (10)</label>
          <label><input type="checkbox" v-model="filters.fourPerson"> 4 Person (14)</label>
          <label><input type="checkbox" v-model="filters.sixPerson"> 6 Person (12)</label>
          <label><input type="checkbox" v-model="filters.eightPerson"> 8 or More (16)</label>
  
          <h3>Price</h3>
          <input type="range" v-model="filters.price" min="0" max="100" value="50">
          <p>Max. $100.00</p>
        </aside>
  
        <!-- Car Cards Section -->
        <section class="car-cards">
          <div v-for="(car, index) in filteredCars" :key="index" class="car-card">
            <h4>{{ car.name }}</h4>
            <p>{{ car.type }}</p>
            <img :src="car.image" alt="Car Image">
            <p>${{ car.price }} / day</p>
            <button @click="rentCar(car)">Rent Now</button>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        filtersVisible: false,
        filters: {
          sport: true,
          suv: false,
          mpv: false,
          sedan: false,
          coupe: false,
          hatchback: false,
          twoPerson: true,
          fourPerson: false,
          sixPerson: false,
          eightPerson: false,
          price: 50
        },
        cars: [
          { name: 'Koenigsegg', type: 'Sport', image: 'car1.png', price: 99 },
          { name: 'Nissan GT - R', type: 'Sport', image: 'car2.png', price: 80 },
          { name: 'BMW X5', type: 'SUV', image: 'car3.png', price: 90 },
          { name: 'Audi A4', type: 'Sedan', image: 'car4.png', price: 60 },
          { name: 'Toyota Corolla', type: 'MPV', image: 'car5.png', price: 55 }
          // Add more cars as needed
        ]
      };
    },
    computed: {
      filteredCars() {
        return this.cars.filter(car => {
          const matchesType = this.filters[car.type.toLowerCase()];
          const matchesCapacity = this.filters[car.capacity] || false;
          const matchesPrice = car.price <= this.filters.price;
  
          return matchesType && matchesCapacity && matchesPrice;
        });
      }
    },
    methods: {
      toggleFilters() {
        this.filtersVisible = !this.filtersVisible;
      },
      rentCar(car) {
        alert(`You have rented the ${car.name} for $${car.price} per day.`);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Global Styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    color: #333;
  }
  
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #F8F8F8;
    border-bottom: 1px solid #ddd;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #007BFF;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
    width: 50%;
  }
  
  .search-bar input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
  }
  
  .search-bar i {
    padding: 10px;
    background-color: #ddd;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
  
  .header-icons i {
    font-size: 20px;
    margin-left: 15px;
    cursor: pointer;
  }
  
  /* Layout */
  main {
    display: flex;
  }
  
  /* Sidebar */
  .filters {
    width: 20%;
    padding: 20px;
    background-color: #F8F8F8;
    border-right: 1px solid #ddd;
  }
  
  .filters h3 {
    font-size: 18px;
    color: #007BFF;
    margin-bottom: 10px;
  }
  
  .filters label {
    display: block;
    margin: 5px 0;
    font-size: 14px;
  }
  
  .filters input[type="range"] {
    width: 100%;
  }
  
  /* Car Cards */
  .car-cards {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  .car-card {
    background-color: #FFF;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .car-card h4 {
    font-size: 18px;
    margin: 10px 0;
  }
  
  .car-card p {
    color: #555;
  }
  
  .car-card img {
    width: 100%;
    max-height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .car-card button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .car-card button:hover {
    background-color: #0056b3;
  }
  </style>
  