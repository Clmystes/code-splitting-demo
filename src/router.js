import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// import One from './one.vue'
// import Two from './two.vue'
const One = () => import('./one.vue')
const Two = () => import('./two.vue')

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/one' },
    {
      path: '/one',
      component: One,
    },
    {
      path: '/two',
      component: Two,
    }
  ]
})