import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import  './style.css' //CSS geral

import router from "./router"

Vue.use(BootstrapVue)

//---------------------------------begin-----importe para pagamento-----------------------

import VueCardPayment from 'vue-card-payment'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-card-payment/dist/vue-card-payment.css'
 
Vue.use(VueCardPayment)


//----------------------------------end----importe para pagamento-----------------------


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
