import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

import routes from './routes'

const router = new VueRouter({
  routes: routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')
