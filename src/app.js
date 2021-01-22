import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import { routes } from "./routes"
import { store } from './store/store'
import VueMoment from "vue-moment"

import Buefy from 'buefy'

Vue.use(Buefy)
Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.use(VueMoment)

window.axios = require('axios')

Vue.filter('textLimit', function (text, length) {
    return text.substring(0, length)
})

const router = new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ selector: to.hash, offset: { x: 0, y: 0 }})
                }, 500)
            })
        }
        return { x: 0, y: 0 }
    },
    routes
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})