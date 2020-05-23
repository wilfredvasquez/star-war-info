import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import i18n from '@/i18n'
import capitalizeString from '@/filters/capitalize'
import routes from '@/routes'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(capitalizeString)

const router = new VueRouter({ 
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
