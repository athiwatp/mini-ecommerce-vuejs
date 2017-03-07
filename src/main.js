import Vue from 'vue'
import VueRouter from 'vue-router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './App'
import Categories from './components/categories.vue'
import Products from './components/products.vue'
import Person from './components/person.vue'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [{
  path: '/person',
  component: Person
}, {
  path: '/categories',
  Component: Categories
}, {
  path: '/products',
  component: Products
}]

const router = new VueRouter({
  routes
})

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red'
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')