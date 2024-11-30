<template>
  <div class="container">
    <!-- Sidebar Filters -->
    <aside class="filters">
      <h3>Type</h3>
      <label><input v-model="filters.type.sport" type="checkbox"> Sport (10)</label>
      <label><input v-model="filters.type.suv" type="checkbox"> SUV (12)</label>
      <label><input v-model="filters.type.mpv" type="checkbox"> MPV (6)</label>
      <label><input v-model="filters.type.sedan" type="checkbox"> Sedan (20)</label>
      <label><input v-model="filters.type.coupe" type="checkbox"> Coupe (14)</label>
      <label><input v-model="filters.type.hatchback" type="checkbox"> Hatchback (14)</label>
      <h3>Capacity</h3>
      <label><input v-model="filters.capacity.twoPerson" type="checkbox"> 2 Person (10)</label>
      <label><input v-model="filters.capacity.fourPerson" type="checkbox"> 4 Person (14)</label>
      <label><input v-model="filters.capacity.sixPerson" type="checkbox"> 6 Person (12)</label>
      <label><input v-model="filters.capacity.eightPlus" type="checkbox"> 8 or More (16)</label>

      <h3>Price</h3>
      <input v-model="filters.price" type="range" min="0" max="100">
      <p>Max. ${{ filters.price }}.00</p>
    </aside>

    <!-- Car Cards Section -->
    <section class="car-cards">
      <div v-for="(car, index) in filteredCars" :key="index" class="car-card">
        <h4>{{ car.name }}</h4>
        <p>{{ car.type }}</p>
        <img :src="car.image" alt="Car Image">
        <p>${{ car.price }} / day</p>
        <button @click="rentCar(car)">
          Rent Now
        </button>
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
      // eslint-disable-next-line no-console
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
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

  .filters {
    width: 250px;
    padding: 20px;
    background-color: hsl(0, 0%, 100%);
    border-right: 1px solid #ffffff;
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
    justify-content: flex-start;
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
