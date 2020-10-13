import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import { routes } from "./routes"

import Buefy from 'buefy'

Vue.use(Buefy)
Vue.use(Vuelidate)
Vue.use(VueRouter)

window.axios = require('axios')

Vue.filter('textLimit', function (text, length) {
    return text.substring(0, length)
})

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})