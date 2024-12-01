<template>
  <div>
    <div class="reviewCard">
      <div class="imgUser">
        <img :src="imgUser" alt="" class="imgItem">
      </div>
      <div class="infoReview">
        <div class="headReview">
          <div class="userInfo">
            <div class="userName">
              {{ reviewinfo.idUser }}
            </div>
            <div class="userWork">
              {{ workUser }}
            </div>
          </div>
          <div class="reviewInfo">
            <div class="dateRev">
              {{ dateRev }}
            </div>
            <div class="revStars">
              <span v-for="n in estrellas" :key="'estrella-' + n">
                ⭐
              </span>
              <span v-for="n in estrellasWhite" :key="'estrellaWhite-' + n">
                ✩
              </span>
            </div>
          </div>
        </div>
        <div class="descReview">
          <p class="descR">
            {{ reviewinfo.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviewinfo: {
      type: Object,
      required: true,
      default: () => ({})
    },
    imgUser: {
      type: String,
      required: true,
      default: () => require('@/assets/usuario1.jpg')
    },
    dateRev: {
      type: String,
      required: true,
      default: '21 July 2022'
    },
    numStars: {
      type: Number,
      required: true,
      default: 4
    }
  },
  data () {
    return {
      workUser: this.asignarJob()
    }
  },
  computed: {
    estrellas () {
      const rating = parseInt(this.reviewinfo.rate) || 0
      return Array(Math.min(Math.max(rating, 0), 5)).fill(null)
    },
    estrellasWhite () {
      const rating = parseInt(this.reviewinfo.rate) || 0
      return Array(5 - Math.min(Math.max(rating, 0), 5)).fill(null)
    }
  },
  methods: {
    asignarJob () {
      const puestos = [
        'Desarrollador Frontend',
        'Desarrollador Backend',
        'Diseñador UX/UI',
        'Gerente de Proyectos',
        'Analista de Datos',
        'Administrador de Sistemas',
        'Especialista en Seguridad Informática',
        'Soporte Técnico',
        'Marketing Digital',
        'Científico de Datos'
      ]

      const puestoAleatorio = puestos[Math.floor(Math.random() * puestos.length)]
      return puestoAleatorio
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.reviewCard {
  width: 100%;
  height: 8em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.imgUser {
  width: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}
.imgItem {
  width: 70%;
  border-radius: 100%;
}
.infoReview {
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.headReview {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.descReview {
  width: 100%;
  margin-top: .8em;
  height: 4.2em;
  overflow-y: auto;
}
.descR {
  color: #1a202c;
  font-weight: 300;
}
.userName {
  color: #1a202c;
  font-weight: 700;
  font-size: 1.2em;
  margin-bottom: .5em;
}
.userWork {
  color: #90a3bf;
  font-size: .9em;
  font-weight: 300;
}
.dateRev {
  color: #90a3bf;
  font-size: .9em;
  margin-bottom: .5em;
  font-weight: 400;
}
.reviewInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
