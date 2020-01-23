import Router from 'vue-router'
import Vue from 'vue'
import VueDropdown from '../components/VueDropdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueDropdown',
      component: VueDropdown
    }
  ]
})
