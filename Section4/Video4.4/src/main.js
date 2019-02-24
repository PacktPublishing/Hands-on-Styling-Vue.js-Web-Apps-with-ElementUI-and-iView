import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import iView from 'iview'

import locale from 'iview/dist/locale/en-US'

//import './assets/my-theme/index.less'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(iView, { locale });
Vue.use(VueRouter)


import routes from './routes'

const router = new VueRouter({
  routes: routes,
  mode:'history'
})

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')
