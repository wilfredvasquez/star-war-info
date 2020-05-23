<template lang="pug">
  #app
    Header

    router-view

    Footer
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';

</style>

