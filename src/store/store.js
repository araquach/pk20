import Vue from "vue"
import Vuex from "vuex"
import * as pk from "./modules/pk"
import * as calc from "araquach-price-calc/store/modules/calc"

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        pk,
        calc
    }
})