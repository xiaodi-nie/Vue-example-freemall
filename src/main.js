import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from './router'

//connect vue with axios so that it can be used as 
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router: Router,//pass in the router instance imported
  render: h => h(App),
}).$mount('#app')
