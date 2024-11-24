<template>
  <div class="billingInfoContainer">
    <div class="headCard">
      <div class="titleCard">
        Agregar un nuevo carro
      </div>
      <div class="descCard">
        <div class="descInfo">
          Por favor ingrese las especificaciones del carro.
        </div>
        <div class="stepCard">
          ...
        </div>
      </div>
    </div>
    <div class="rowInputs">
      <div class="labelAndInput">
        <div class="labelInput">
          Nombre
        </div>
        <input v-model="carModel.nombre" type="text" placeholder="Nombre" class="inputInfo">
      </div>
      <div class="labelAndInput">
        <div class="labelInput">
          Categoria
        </div>
        <input v-model="carModel.categoria" type="text" placeholder="Categoria" class="inputInfo">
      </div>
    </div>
    <div class="rowInputs">
      <div class="labelAndInput">
        <div class="labelInput">
          Capacidad del tanque
        </div>
        <input v-model="carModel.capacidad_tanque" type="number" placeholder="En litros" class="inputInfo inputDT">
      </div>
      <div class="labelAndInput">
        <div class="labelInput">
          Transmision
        </div>
        <input v-model="carModel.transmision" type="text" placeholder="Transmision" class="inputInfo">
      </div>
    </div>
    <div class="rowInputs">
      <div class="labelAndInput">
        <div class="labelInput">
          Precio
        </div>
        <input v-model="carModel.precio" type="number" placeholder="En dolares" class="inputInfo inputDT">
      </div>
      <div class="labelAndInput">
        <div class="labelInput">
          Rating
        </div>
        <input v-model="carModel.rating" type="number" placeholder="Estrellas" class="inputInfo inputDT">
      </div>
    </div>
    <div class="rowInputs">
      <div class="labelAndInput">
        <div class="labelInput">
          Pasajeros
        </div>
        <input v-model="carModel.pasajeros" type="number" placeholder="Capacidad de pasajeros" class="inputInfo inputDT">
      </div>
    </div>
    <div class="rowInputs">
      <div class="labelAndInput oneItemRow">
        <div class="labelInput">
          Descripcion
        </div>
        <input v-model="carModel.descripcion" type="text" placeholder="Breve descripcion" class="inputInfo">
      </div>
    </div>
    <div class="rowInputs">
      <div class="labelAndInput btnAddRow">
        <button class="btnAgregar" @click="submitCar">
          Agregar
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      carModel: {
        nombre: '',
        categoria: '',
        capacidad_tanque: 0,
        transmision: '',
        pasajeros: 0,
        precio: 0,
        rating: 0,
        descripcion: ''
      }
    }
  },
  methods: {
    submitCar () {
      // eslint-disable-next-line no-console
      console.log('entre a submitCar')
      if (this.carModel.nombre && this.carModel.categoria && this.carModel.capacidad_tanque && this.carModel.pasajeros && this.carModel.transmision && this.carModel.precio && this.carModel.rating && this.carModel.descripcion) {
        this.$emit('addCarEvent', {
          ...this.carModel,
          istaken: 'false'
        })

        this.carModel = {
          nombre: '',
          categoria: '',
          capacidad_tanque: 0,
          transmision: '',
          pasajeros: 0,
          precio: 0,
          rating: 0,
          descripcion: ''
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('no entre')
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.billingInfoContainer {
  background-color: white;
  border-radius: 16px;
  padding: 1.4em 1.8em;
  font-family: 'Plus Jakarta Sans';
  width: 36%;
}
.fullBillingForm > div {
  margin-bottom: 2em;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2);
}
.headCard {
  width: 100%;
}
.titleCard {
  font-size: 1.4em;
  font-weight: 700;
  color: #1a202c;
}
.descCard {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #90a3bf;
  font-size: .9em;
  margin-bottom: 1em;
}
.descInfo {
  font-weight: 400;
}
.stepCard {
  font-weight: 500;
}
.rowInputs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}
.labelAndInput {
  width: 50%;
  margin-bottom: 1.8em;
}
.labelInput {
  color: #1a202c;
  font-size: 1em;
  font-weight: 600;
  margin-bottom: .7em;
}
.inputInfo {
  width: 100%;
  height: 3.8em;
  background-color: #f6f7f9;
  border-radius: 14px;
  padding-left: 1.6em;
  font-weight: 500;
  font-size: .9em;
}
.oneItemRow {
  width: 100%;
  margin-right: 0;
}
.btnAddRow {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btnAgregar {
  width: 46%;
  background-color: #3563e9;
  color: white;
  font-weight: 600;
  font-size: 1.2em;
  border-radius: 16px;
  padding: .7em 0;
}
.btnAgregar:hover {
  background-color: #54a6ff;
}
.inputInfo::placeholder {
  color: #90a3bf;
}
.rowInputs .labelAndInput:nth-of-type(2) {
  margin-left: 1.5em
}
.rowInputs .labelAndInput:nth-of-type(1) {
  margin-right: 1.5em;
}
.inputDT {
  padding-right: 1em;
}
</style>
