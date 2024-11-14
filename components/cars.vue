<template>
  <div class="container">
    <!-- Sidebar Filters -->
    <aside class="filters">
      <h3>Type</h3>
      <label><input type="checkbox" v-model="filters.type.sport"> Sport (10)</label>
      <label><input type="checkbox" v-model="filters.type.suv"> SUV (12)</label>
      <label><input type="checkbox" v-model="filters.type.mpv"> MPV (6)</label>
      <label><input type="checkbox" v-model="filters.type.sedan"> Sedan (20)</label>
      <label><input type="checkbox" v-model="filters.type.coupe"> Coupe (14)</label>
      <label><input type="checkbox" v-model="filters.type.hatchback"> Hatchback (14)</label>
      <h3>Capacity</h3>
      <label><input type="checkbox" v-model="filters.capacity.twoPerson"> 2 Person (10)</label>
      <label><input type="checkbox" v-model="filters.capacity.fourPerson"> 4 Person (14)</label>
      <label><input type="checkbox" v-model="filters.capacity.sixPerson"> 6 Person (12)</label>
      <label><input type="checkbox" v-model="filters.capacity.eightPlus"> 8 or More (16)</label>

      <h3>Price</h3>
      <input type="range" v-model="filters.price" min="0" max="100" />
      <p>Max. ${{ filters.price }}.00</p>
    </aside>

    <!-- Car Cards Section -->
    <section class="car-cards">
      <div class="car-card" v-for="(car, index) in filteredCars" :key="index">
        <h4>{{ car.name }}</h4>
        <p>{{ car.type }}</p>
        <img :src="car.image" alt="Car Image" />
        <p>${{ car.price }} / day</p>
        <button @click="rentCar(car)">Rent Now</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CarRental',
  data () {
    return {
      filters: {
        type: {
          sport: true,
          suv: true,
          mpv: true,
          sedan: true,
          coupe: true,
          hatchback: true
        },
        capacity: {
          twoPerson: true,
          fourPerson: true,
          sixPerson: true,
          eightPlus: true
        },
        price: 50
      },
      cars: [
        {
          name: 'Koenigsegg',
          type: 'Sport',
          image: 'car1.png',
          price: 99
        },
        {
          name: 'Nissan GT - R',
          type: 'Sport',
          image: 'car2.png',
          price: 80
        },
        {
          name: 'BMW X5',
          type: 'SUV',
          image: 'car3.png',
          price: 120
        },
        {
          name: 'Audi A4',
          type: 'Sedan',
          image: 'car4.png',
          price: 60
        }
        // Add more cars here
      ]
    }
  },
  computed: {
    filteredCars () {
      return this.cars.filter((car) => {
        const typeMatch = this.filters.type[car.type.toLowerCase()]
        const capacityMatch = this.filters.capacity[`${car.capacity}Person`]
        const priceMatch = car.price <= this.filters.price
        return typeMatch && capacityMatch && priceMatch
      })
    }
  },
  methods: {
    rentCar (car) {
      console.log(`Renting the car: ${car.name}`)
    }
  }
}
</script>

  <style scoped>
  .container {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

  .filters {
    width: 250px;
    padding: 20px;
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
  }
  .filters h3 {
    margin-top: 0;
  }
  .filters label {
    display: block;
    margin-bottom: 5px;
  }
  .filters input[type="range"] {
    width: 100%;
  }
  .car-cards {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }
  .car-card {
    width: 250px;
    margin: 10px;
    padding: 15px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .car-card img {
    width: 100%;
    height: auto;
  }
  .car-card button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    width: 100%;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  .car-card button:hover {
    background-color: #0056b3;
  }
  </style>
