// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        {
          path: 'contact-us',
          name: 'Contact',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: 'pro',
          name: 'Pro',
          component: () => import('@/views/pro/Index.vue'),
          meta: { src: require('@/assets/pro.jpg') },
        },

        {
          path: 'quizz/:id',
          name: 'Quizz',
          component: () => import('@/views/quizz/Quizz.vue')
        }


        // {
        //   path: '*',
        //   name: 'FourOhFour',
        //   component: () => import('@/views/404/Index.vue'),
        // },
      ],
    },

    {
      path: '/auth',
      component: () => import('@/layouts/auth/Index.vue'),
      children: [
        {
          path: 'login',
          name: "Login",
          component: () => import('@/views/login/Login.vue')
        },
        {
          path: 'register',
          name: "Register",
          component: () => import('@/views/register/Register.vue')
        },
        {
          path: 'forget',
          name: "Forget",
          component: () => import('@/views/forget/Forget.vue')
        }
      ]
    }

  ],
})

export default router
