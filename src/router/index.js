import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import DashBoard from '@/components/DashBoard'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
    },
    {
      path:'/',
      name:'Home',
      component:Products,
    },
    {
      path:'/admin',
      name:'DashBoard',
      component:DashBoard,
      children:[
        {
          path:'products',
          name:'Products',
          component:Products,
          meta: { requiresAuth: true }
        },
      ]
    }
  ]
})
