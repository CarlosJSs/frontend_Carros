<template>
  <v-row justify="center" align="center" class="index-background">
    <loginUser v-if="showLoginF" @switchForms="showLoginF = false" @loginEvent="loginBackend" />
    <registerCliente v-else @switchForms="showLoginF = true" @addClienteEvent="createCliente" />
  </v-row>
</template>

<script>
import Cookies from 'js-cookie'
import loginUser from '@/components/loginUser.vue'
import registerCliente from '@/components/regiterCliente.vue'

export default {
  name: 'IndexPage',
  components: {
    loginUser,
    registerCliente
  },
  layout: 'login',
  middleware: 'detect-push',
  data () {
    return {
      showLoginF: true
    }
  },
  methods: {
    loginBackend (usuarioModel) {
      if (!usuarioModel.correo || !usuarioModel.contrasena) {
        alert('Por favor ingrese sus credenciales.')
        // eslint-disable-next-line no-useless-return
        return
      }

      const body = {
        correo: usuarioModel.correo,
        contrasena: usuarioModel.contrasena
      }

      this.$axios.post('/auth/login', body)
        .then((res) => {
          if (res.data && res.data.token) {
            Cookies.set('token', res.data.token, { expires: 1, path: '/' })
            Cookies.set('userID', res.data.userId, { expires: 1, path: '/' })
            Cookies.set('rol', res.data.userRol, { expires: 1, path: '/' })

            const role = res.data.userRol
            if (role === 'admin') {
              this.$router.push('/admin')
            } else if (role === 'cliente') {
              this.$router.push('/cliente')
            } else {
              alert('No cuenta con un rol valido asignado.')
            }
          }
        }).catch((error) => {
          const errorMessage = error.response?.data?.message || 'Ocurrió un error al validar las credenciales.'
          alert(errorMessage)
        })
    },
    createCliente (clienteModel) {
      this.token = Cookies.get('token')

      if (clienteModel.nombre && clienteModel.apellido && clienteModel.correo && clienteModel.contrasena) {
        const body = {
          nombre: clienteModel.nombre,
          apellido: clienteModel.apellido,
          correo: clienteModel.correo,
          contrasena: clienteModel.contrasena,
          rol: 'cliente'
        }

        this.$axios.post('/usuarios/create', body, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-type': 'application/json'
          }
        }).then((res) => {
          if (res && res.data && res.data.success) {
            alert('Cliente creado con exito.')
          }
        }).catch((error) => {
          const errorMessage = error.response?.data?.message || 'Ocurrió un error al intentar crear la cuenta.'
          alert(errorMessage)
        })
      }
    }
  }
}
</script>

<style scoped>
.index-background {
  background-color: rgb(234, 242, 255);
  width: 100vw;
  height: 100vh;
}
</style>
