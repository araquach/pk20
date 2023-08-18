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

var buttonElement = document.getElementById('phone-number-1');

// Add a click event listener to the element
buttonElement.addEventListener('click', function() {
    console.log('Phone number 1 button was clicked!');
});

Vue.filter('textLimit', function (text, length) {
    return text.substring(0, length)
})

Vue.filter("toCurrency",  amount => Number(Math.round(amount)).toLocaleString('en-GB',
    {
        style: 'currency',
        currency: 'GBP'
    }))

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})