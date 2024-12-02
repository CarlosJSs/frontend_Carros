<template>
  <div class="carousel-container">
    <div class="carousel">
      <div class="carousel-wrapper" :style="{ transform: `translateX(calc(-${currentIndex * 100}%))` }">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="carousel-item"
        >
          <div class="card">
            <h2 class="titleCardC">
              {{ item.title }}
            </h2>
            <p>{{ item.description }}</p>
            <img :src="item.image" :alt="item.alt" class="card-image">
          </div>
        </div>
      </div>
      <!-- Controles -->
      <div class="controls">
        <button class="control-btn left" @click="prevSlide">
          ❮
        </button>
        <button class="control-btn right" @click="nextSlide">
          ❯
        </button>
      </div>
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
          title: 'Drive Your Dreams',
          description: 'Every journey begins with a single drive. Make it count!',
          image: require('@/assets/carrusel/carrusel1.png'),
          alt: 'Car Image 1'
        },
        {
          title: 'Feel the Freedom of the Road',
          description: 'A car is more than a vehicle; it’s your gateway to endless adventures.',
          image: require('@/assets/carrusel/carrusel5.png'),
          alt: 'Car Image 2'
        },
        {
          title: 'Unleash the Power Within',
          description: 'Behind the wheel, you hold the power to conquer any road.',
          image: require('@/assets/carrusel/carrusel4.png'),
          alt: 'Car Image 3'
        },
        {
          title: 'Style Meets Performance',
          description: 'Drive the car that defines you and lets you conquer every turn.',
          image: require('@/assets/carrusel/carrusel3.png'),
          alt: 'Car Image 4'
        },
        {
          title: 'The Road Awaits',
          description: 'The open road is calling. Are you ready to answer?',
          image: require('@/assets/carrusel/carrusel6.png'),
          alt: 'Car Image 5'
        },
        {
          title: 'Engineered for Adventure',
          description: 'Every mile is a new story waiting to be written. Drive it with passion.',
          image: require('@/assets/carrusel/carrusel2.png'),
          alt: 'Car Image 6'
        },

        {
          title: 'Style Meets Performance',
          description: 'Drive the car that defines you and lets you conquer every turn.',
          image: require('@/assets/carrusel/carrusel3.png'),
          alt: 'Car Image 4'
        },
        {
          title: 'The Road Awaits',
          description: 'The open road is calling. Are you ready to answer?',
          image: require('@/assets/carrusel/carrusel6.png'),
          alt: 'Car Image 5'
        },
        {
          title: 'Engineered for Adventure',
          description: 'Every mile is a new story waiting to be written. Drive it with passion.',
          image: require('@/assets/carrusel/carrusel6.png'),
          alt: 'Car Image 6'
        },
        {
          title: 'Engineered for Adventure',
          description: 'Every mile is a new story waiting to be written. Drive it with passion.',
          image: require('@/assets/carrusel/carrusel6.png'),
          alt: 'Car Image 6'
        },
        {
          title: 'Engineered for Adventure',
          description: 'Every mile is a new story waiting to be written. Drive it with passion.',
          image: require('@/assets/carrusel/carrusel6.png'),
          alt: 'Car Image 6'
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
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
  padding: 20px 0;
}

.carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-item {
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 10px;
}

.card {
  background: linear-gradient(120deg, #3563e9 0%, #1e2c57 100%);
  border-radius: 10px;
  padding: 20px;
  color: white;
  text-align: left;
  height: 300px;
}

.card-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  margin-left: 46%;
}

.controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.control-btn {
  background-color: #1976d2;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
}

.control-btn:hover {
  background-color: #125ea4;
}
</style>
