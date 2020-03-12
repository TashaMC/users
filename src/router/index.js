import Vue from 'vue'
import VueRouter from 'vue-router'
import users from '../views/users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: users
  },
  {
    path: '/user/:id',
    name: 'user',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user" */ '../views/user.vue')
  },
  {
    path: '/users',
    name: 'users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "users" */ '../views/users.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
