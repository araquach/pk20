import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from "./router"
import { store } from './store/store'
import VueMoment from "vue-moment"

import Buefy from 'buefy'

Vue.use(Buefy)
Vue.use(Vuelidate)
Vue.use(VueMoment)

window.axios = require('axios')

Vue.filter('textLimit', function (text, length) {
    return text.substring(0, length)
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})