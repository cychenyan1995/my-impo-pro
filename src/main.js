// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VRouter from 'vue-router'
import IndexPage from './pages/index'
import VResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VRouter)
Vue.use(VResource)

let router = new VRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: IndexPage
  }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
