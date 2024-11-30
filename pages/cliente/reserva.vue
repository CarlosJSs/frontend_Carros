<template>
  <v-row justify="center" align="start" class="index-background">
    <v-container class="tableContainer">
      <v-data-table
        :headers="headers"
        :items="cars"
        class="elevation-1 myTable"
        item-value="id"
        dense
        :search="search"
      >
        <!-- Barra de búsqueda -->
        <template #top>
          <v-text-field
            v-model="search"
            label="Buscar..."
            class="mx-4"
            outlined
            dense
          />
        </template>
      </v-data-table>
    </v-container>
  </v-row>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'CarTablePage',
  layout: 'adminLayout',
  middleware: ['detect-push', 'auth-role'],
  data () {
    return {
      search: '',
      cars: [], // Aquí cargaremos los datos
      headers: [
        { text: 'Fecha Inicio', value: 'fechainicio' },
        { text: 'Ciudad Inicio', value: 'ciudadinicio' },
        { text: 'Fecha Fin', value: 'fechafin' },
        { text: 'Ciudad Fin', value: 'ciudadfin' },
        { text: 'ID Carro', value: 'idcar' },
        { text: 'ID Usuario', value: 'idusuario' },
        { text: 'Costo', value: 'costo' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Dirección', value: 'direccion' },
        { text: 'Ciudad', value: 'ciudad' }
      ]
    }
  },
  mounted () {
    this.loadCarros()
  },
  methods: {
    loadCarros () {
      const token = Cookies.get('token')
      this.$axios
        .get('/cars', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          if (res.data.success && Array.isArray(res.data.cars)) {
            this.cars = res.data.cars
          } else {
            console.error('Los datos recibidos no son válidos')
          }
        })
        .catch((error) => {
          console.error('Error al cargar los carros:', error)
        })
    }
  }
}
</script>

<style scoped>
.index-background {
  background-color: #f6f7f9;
  height: auto;
  padding-top: 2.7vh;
  padding-bottom: 6vh;
}
</style>
