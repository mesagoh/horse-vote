import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Results from '@/components/Results'
import firebase from 'firebase'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/results',
      name: 'results',
      component: Results,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      // go to login page
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // go to rout
      next()
    }
  } else {
    next()
  }
})

export default router
