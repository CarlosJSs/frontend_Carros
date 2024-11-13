<template>
  <v-row justify="center" align="center" class="index-background" />
</template>

<script>
import detailRental from '@/components/detailRentar.vue'
import detail from '~/layouts/detail.vue'

export default {
  name: 'HomePage',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    detailRental
  },
  layout: 'detail',
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
