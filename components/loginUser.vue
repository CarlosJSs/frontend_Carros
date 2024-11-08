<template>
  <div>
    <p>Bienvenido, Login</p>
    <button @click="loginBackend">
      Hola
    </button>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
export default {
  data () {
    return {
      usuario: '',
      password: ''
    }
  },
  methods: {
    loginBackend () {
      // eslint-disable-next-line no-console
      console.log('ejecutando login')
      // this.$router.push('/admin')

      // const body = {
      //  usuario: this.usuario,
      //  password: this.password
      // }

      // Peticion axios para el login
      /**
      this.$axios.post('/login', body)
        .then((res) => {
          if (res.data && res.data.token) {
            // Guardar el token en las cookies, expira en un día y es accesible desde toda la raíz
            Cookies.set('token', res.data.token, { expires: 1, path: '/' })
            // Redirigir a la página de administración después de iniciar sesión
            this.$router.push('/admin')
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('@@ error => ', error)
        })
          */
    }
  }
}
</script>

<style>

</style>
