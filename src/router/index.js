import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/BirthdayIndex.vue'
import countdown from '../views/BirthdayCountdown.vue'
import {useBirthdayStore} from '/src/stores/birthday'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        requiresWaiting: true
      }
    },
    {
      path: '/still-waiting',
      name: 'countdown',
      component: countdown
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useBirthdayStore()
  const startTime = new Date().valueOf();
  const endTime = new Date(store.getBirthdayDate).valueOf();
  const time = endTime-startTime

  time <= 0 ? store.setIsBirthday(true) : store.setIsBirthday(false)
  if (to.matched.some(record => record.meta.requiresWaiting)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getIsBirthday || !store.getIsOpened) {
      next({ name: 'countdown' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
