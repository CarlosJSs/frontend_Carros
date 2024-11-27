<template>
  <v-row justify="start" align="start" class="index-background">
    <!-- Componente cars alineado a la izquierda -->
    <v-col cols="12" md="4">
      <div class="hero">
        <cars :cars="cars" />
      </div>
    </v-col>

    <!-- Contenedor principal con pickUp y popular-section debajo -->
    <v-col cols="12" md="8">
      <div class="container">
        <!-- PickUp en la parte superior -->
        <div>
          <pickUp :cars="cars" />
        </div>
        <!-- Popular-section debajo de pickUp -->
        <div class="popular-section">
          <detail :cars="cars" />
        </div>
      </div>
    </v-col>

    <!-- Footer -->
    <v-col cols="12">
      <div class="footer">
        <footerq :cars="cars" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import cars from '~/components/cars.vue'
import detail from '~/components/detailRental.vue'
import pickUp from '@/components/pick-up.vue'

import footerq from '~/components/footerHome.vue'

export default {
  name: 'HomePage',
  components: {
    cars,
    pickUp,
    footerq,
    detail
  },
  layout: 'detail',
  middleware: 'detect-push',
  data () {
    return {
      showLoginF: true,
      cars: [
        { name: 'Car A', type: 'SUV', price: 50 },
        { name: 'Car B', type: 'Sedan', price: 40 },
        { name: 'Car C', type: 'Convertible', price: 70 }
      ]
    }
  }
}
</script>

<style scoped>
.index-background {
  background-color: rgb(234, 242, 255);
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column; /* Asegura que pickUp y popular-section se apilen verticalmente */
  gap: 16px;
}

.hero {
  display: flex;
  flex-direction: column;
  margin-top: -32px;
}

.footer {
  width: 100%;
}

.popular-section {
  margin: 0;
  padding: 0;
}

button {
  background-color: #1976d2;
  color: white;
  padding: 10px;
  height: 50px;
  align-self: center;
  border: none;
  border-radius: 5px;
}

  </style>
