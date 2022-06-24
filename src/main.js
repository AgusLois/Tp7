import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery"
import "popper.js"
import "bootstrap"
import "./form"
import {router} from "./router"
import axios from 'axios'

axios.defaults.baseURL = 'https://62842ba33060bbd3473556b1.mockapi.io/'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')