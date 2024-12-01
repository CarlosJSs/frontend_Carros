<template>
  <v-row justify="center" align="center" class="index-background">
    <h1>
      Mis reservas
    </h1>
    <div class="container">
      <v-container class="tableContainer">
        <v-data-table
          :headers="headers"
          :items="resv"
          class="elevation-1 myTable"
          item-value="id"
          dense
          item-class="resv-row"
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
          <template #[`item.fechainicio`]="{ item }">
            <span>{{ formatDate(item.fechainicio) }}</span>
          </template>
          <template #[`item.ciudadinicio`]="{ item }">
            <span>{{ item.ciudadinicio }}</span>
          </template>
          <template #[`item.fechafin`]="{ item }">
            <span>{{ formatDate(item.fechafin) }}</span>
          </template>
          <template #[`item.ciudadfin`]="{ item }">
            <span>{{ item.ciudadfin }}</span>
          </template>
          <template #[`item.carro`]="{ item }">
            <span>{{ item.carro }}</span>
          </template>
          <template #[`item.costo`]="{ item }">
            <span>{{ item.costo }}</span>
          </template>
          <template #[`item.nombre`]="{ item }">
            <span>{{ item.nombre }}</span>
          </template>
          <template #[`item.telefono`]="{ item }">
            <span>{{ item.telefono }}</span>
          </template>
          <template #[`item.direccion`]="{ item }">
            <span>{{ item.direccion }}</span>
          </template>
          <template #[`item.ciudad`]="{ item }">
            <span>{{ item.ciudad }}</span>
          </template>
        </v-data-table>
      </v-container>
    </div>
    <div class="footer">
      <footerq />
    </div>
  </v-row>
</template>

<script>
import Cookies from 'js-cookie'
import footerq from '~/components/footerHome.vue'

export default {
  name: 'HomePage',
  components: {
    footerq
  },
  layout: 'detail',
  middleware: [
    'detect-push',
    'auth-role'
  ],
  data () {
    return {
      resv: [],
      cars: [],
      userID: Cookies.get('userID'),
      search: '', // Valor del buscador
      headers: [
        { text: 'Fecha Inicio', value: 'fechainicio', sortable: true },
        { text: 'Ciudad Inicio', value: 'ciudadinicio', sortable: true },
        { text: 'Fecha Fin', value: 'fechafin', sortable: true },
        { text: 'Ciudad Fin', value: 'ciudadfin', sortable: true },
        { text: 'Carro', value: 'carro', sortable: true },
        { text: 'Costo', value: 'costo', sortable: true },
        { text: 'Nombre', value: 'nombre', sortable: true },
        { text: 'Telefono', value: 'telefono', sortable: false },
        { text: 'Direccion', value: 'direccion', sortable: false },
        { text: 'Ciudad', value: 'ciudad', sortable: false }
      ]
    }
  },
  mounted () {
    this.loadCarros().then(() => {
      this.loadResv()
    })
  },
  methods: {
    async loadResv () {
      this.token = Cookies.get('token')

      try {
        const res = await this.$axios.get('/reserva', {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })

        if (res.data.success && Array.isArray(res.data.reservas)) {
          const filteredResvs = res.data.reservas.filter(
            res => res.idusuario === this.userID
          )

          // Agregar el nombre del carro a las reservas
          this.resv = filteredResvs.map((reserva) => {
            const car = this.cars.find(car => car.id === reserva.idcar)
            return {
              ...reserva,
              carro: car ? car.nombre : 'Desconocido'
            }
          })
          // eslint-disable-next-line no-console
          console.log('@@@ resResv filtradas con nombres => ', this.resv)
        } else {
          // eslint-disable-next-line no-console
          console.error('No es array valido en resvs')
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('@@@ error => ', error)
      }
    },
    async loadCarros () {
      this.token = Cookies.get('token')

      try {
        const res = await this.$axios.get('/cars', {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })

        if (res.data.success && Array.isArray(res.data.cars)) {
          this.cars = res.data.cars
        } else {
          // eslint-disable-next-line no-console
          console.error('No es array valido en cars')
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('@@@ error => ', error)
      }
    },
    formatDate (dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

h1 {
  margin-top: 1em;
  color: #1a202c;
}
.tableContainer {
  width: 100%;
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
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
