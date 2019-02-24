// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import App from './App'

Vue.config.productionTip = false

import 'iview/dist/styles/iview.css'
import locale from 'iview/dist/locale/en-US'

Vue.use(iView, { locale });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
