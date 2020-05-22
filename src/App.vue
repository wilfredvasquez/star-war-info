<template lang="pug">
  #app
    Header

    img(alt="Vue logo" src="./assets/logo.png")
    hello-world(msg="Welcome to Your Vue.js App")
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from '@/components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, Header
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';

</style>

