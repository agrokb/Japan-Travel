import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from  './router';
import 'bootstrap';

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    const api= `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log("check",response.data)
    if(response.data.success){
      next()
    }else{
      next({
        path:'/login'
      })
    }
})
  }else{
      next()
  }

})