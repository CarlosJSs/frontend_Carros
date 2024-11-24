<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-container class="tableContainer">
    <v-data-table
      :headers="headers"
      :items="cars"
      class="elevation-1 myTable"
      item-value="id"
      dense
      item-class="car-row"
      :search="search"
    >
      <template #top>
        <v-text-field
          v-model="search"
          label="Buscar..."
          class="mx-4"
          outlined
          dense
        />
      </template>
      <template #[`item.rating`]="{ item }">
        <span>{{ item.rating }} ★</span>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>

export default {
  props: {
    cars: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      search: '',
      headers: [
        { text: 'Nombre', value: 'nombre', sortable: true },
        { text: 'Categoría', value: 'categoria', sortable: true },
        { text: 'Capacidad del tanque', value: 'capacidad_tanque', sortable: true },
        { text: 'Pasajeros', value: 'pasajeros', sortable: true },
        { text: 'Transmisión', value: 'transmision', sortable: true },
        { text: 'Precio', value: 'precio', sortable: true },
        { text: 'Rating', value: 'rating', sortable: true },
        { text: 'Descripción', value: 'descripcion', sortable: false },
        { text: 'Ocupado', value: 'istaken', sortable: true }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.tableContainer{
  width: 60%;
  font-family: 'Plus Jakarta Sans';
  margin: 0;
  margin-left: 1em;
  padding-top: 0;
}
.myTable {
  padding: 1em;
  border-radius: 16px;
  padding-top: 1.6em;
}
.v-card {
  border-radius: 12px;
  background-color: #f6f7f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.v-text-field {
  max-width: 300px;
}
.v-data-table-header th {
  font-weight: bold;
  color: #1a202c;
}
.v-data-table tbody tr {
  transition: background-color 0.3s;
}
.v-data-table tbody tr:hover {
  background-color: #f0f0f5;
}
</style>
