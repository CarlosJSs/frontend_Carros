<template>
  <div class="carousel">
    <div class="carousel-wrapper" :style="{ transform: `translateX(calc(-${currentIndex * 50}%))` }">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="carousel-item"
      >
        <div class="card">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <button class="btn">
            {{ item.buttonText }}
          </button>
          <img :src="item.image" :alt="item.alt" class="card-image">
        </div>
      </div>
    </div>
    <!-- Controles -->
    <div class="controls">
      <button class="control-btn" @click="prevSlide">
        ❮
      </button>
      <button class="control-btn" @click="nextSlide">
        ❯
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentIndex: 0,
      items: [
        {
          title: 'The Best Platform for Car Rental',
          description: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
          buttonText: 'Rental Car',
          image: require('~/assets/c1.png'), // Cambia a la ruta real de tu imagen
          alt: 'Car Image 1'
        },
        {
          title: 'Easy way to rent a car at a low price',
          description: 'Providing cheap car rental services and safe and comfortable facilities.',
          buttonText: 'Rental Car',
          image: require('~/assets/c1.png'), // Cambia a la ruta real de tu imagen
          alt: 'Car Image 2'
        },
        {
          title: 'The Best Platform for Car Rental',
          description: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
          buttonText: 'Rental Car',
          image: require('~/assets/c1.png'), // Cambia a la ruta real de tu imagen
          alt: 'Car Image 1'
        },
        {
          title: 'Easy way to rent a car at a low price',
          description: 'Providing cheap car rental services and safe and comfortable facilities.',
          buttonText: 'Rental Car',
          image: require('~/assets/c1.png'), // Cambia a la ruta real de tu imagen
          alt: 'Car Image 2'
        },
        {
          title: 'Easy way to rent a car at a low price',
          description: 'Providing cheap car rental services and safe and comfortable facilities.',
          buttonText: 'Rental Car',
          image: require('~/assets/c1.png'), // Cambia a la ruta real de tu imagen
          alt: 'Car Image 2'
        },
        {
          title: 'The Best Platform for Car Rental',
          description: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
          buttonText: 'Rental Car',
          image: require('~/assets/c1.png'), // Cambia a la ruta real de tu imagen
          alt: 'Car Image 1'
        },
        {
          title: 'Easy way to rent a car at a low price',
          description: 'Providing cheap car rental services and safe and comfortable facilities.',
          buttonText: 'Rental Car',
          image: require('~/assets/c1.png'), // Cambia a la ruta real de tu imagen
          alt: 'Car Image 2'
        }
      ]
    }
  },
  methods: {
    nextSlide () {
      if (this.currentIndex < this.items.length / 2 - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
    },
    prevSlide () {
      if (this.currentIndex > 0) {
        this.currentIndex--
      } else {
        this.currentIndex = Math.ceil(this.items.length / 2 - 1)
      }
    }
  }
}
</script>

<style scoped>
.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  flex: 0 0 50%; /* Cada slide ocupa el 50% del ancho */
  padding: 10px; /* Espaciado entre slides */
  box-sizing: border-box;
}

.card {
  background: linear-gradient(120deg, #4f7ef1 0%, #63a4ff 100%);
  border-radius: 10px;
  padding: 20px;
  color: white;
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 300px;
}

.card h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.card p {
  font-size: 16px;
  margin-bottom: 20px;
}

.card .btn {
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.card .btn:hover {
  background-color: #125ea4;
}

.card-image {
  position: absolute;
  right: 20px;
  bottom: 10px;
  max-height: 200px;
  max-width: 50%;
}

.controls {
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.control-btn {
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  outline: none;
  position: relative;
}

.control-btn:hover {
  background-color: #125ea4;
}

</style>
