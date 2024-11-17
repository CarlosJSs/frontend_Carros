<template>
  <v-row justify="center" align="center" class="index-background">
    <loginUser v-if="showLoginF" @switchForms="showLoginF = false" />
    <registerCliente v-else @switchForms="showLoginF = true" />
  </v-row>
</template>

<script>
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
