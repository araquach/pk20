import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        salons: [],
        services: [],
        stylists: [],
        levels: [],
        salon: {
            id: 2,
            name: 'Paul Kemp Hairdressing',
            logo: '/dist/img/logos/small/pk.png',
            image: '/dist/img/logos/pk.png'
        },
        regular: false,
        view: 'intro',
        selector: '',
        calculator: '',
        level: {},
        stylist: {},
        colourCat: null,
        isColourCorrection: false,
        selectedColour: {},
        selectedColourAddOn: {},
        selectedFinish: {},
        selectedFinishAddOn: {},
        selectedTreatment: {},
        selectedMensCut: {},
        selectedMensColour: {},
        totalPrice: null,
        price: 0
    },

    getters: {
        salonStylists: state => {
            return state.stylists.filter(s => s.salon === state.salon.id)
        },

        colourPrices: state => {
            return state.services.filter(c => c.cat1 === 2)
        },

        colourAddOnPrices: state => {
            return state.services.filter(c => c.cat1 === 3)
        },

        finishPrices: state => {
            return state.services.filter(c => c.cat1 === 1 && c.cat2 === 0)
        },

        treatmentPrices: state => {
            return state.services.filter(c => c.cat1 === 5)
        },

        finishAddOnPrices: state => {
            return state.services.filter(c => c.cat1 === 4)
        },

        mensCutPrices: state =>  {
            return state.services.filter(c => c.cat1 === 6 && c.cat2 === 0)
        },

        mensColourPrices: state =>  {
            return state.services.filter(c => c.cat1 ===  6 && c.cat2 === 1)
        },

        selectedColourPrice: state =>  {
            if (state.selectedColour.price > 0) {
                return (((state.selectedColour.price) * (100 + state.level.col_adapter) / 100)+15)
            } else {
                return 0
            }
        },

        selectedColourAddOnPrice: state => {
            if (state.selectedColourAddOn.price > 0) {
                return state.selectedColourAddOn.price
            } else {
                return 0
            }
        },

        selectedTreatmentPrice: state => {
            if (state.selectedTreatment.price > 0) {
                return state.selectedTreatment.price
            } else {
                return 0
            }
        },

        selectedFinishPrice: state => {
            if (state.selectedFinish.price > 0) {
                return (state.selectedFinish.price) * (100 + state.level.adapter) / 100
            } else {
                return 0
            }
        },

        selectedFinishAddOnPrice: state => {
            if (state.selectedFinishAddOn.price > 0) {
                return (state.selectedFinishAddOn.price) * (100 + state.level.adapter) / 100
            } else {
                return 0
            }
        },

        selectedMensCutPrice: state => {
            if (state.selectedMensCut.price > 0) {
                return (state.selectedMensCut.price) * (100 + state.level.adapter) / 100
            } else {
                return 0
            }
        },

        selectedMensColourPrice: state => {
            if (state.selectedMensColour.price > 0) {
                return (state.selectedMensColour.price) * (100 + state.level.adapter) / 100
            } else {
                return 0
            }
        },

        allSelected: state => {
            if (state.calculator === 'Colour') {
                if ((state.selectedColour.id && state.selectedColourAddOn.id && state.selectedTreatment.id && state.selectedFinish.id && state.selectedFinishAddOn.id) ||
                    (state.selectedColour.id && state.isColourCorrection && state.selectedFinish.id && state.selectedFinishAddOn.id)) {
                    return true
                }
            } else if (state.calculator === 'CuttingStyling'){
                if (state.selectedTreatment.id && state.selectedFinish.id && state.selectedFinishAddOn.id) {
                    return true
                }
            } else if (state.calculator === 'Men') {
                if (state.selectedMensColour.id && state.selectedMensCut.id) {
                    return true
                }
            }
        },

        totalCost: (state, getters) => {
            return getters.selectedColourPrice + getters.selectedColourAddOnPrice + getters.selectedTreatmentPrice + getters.selectedFinishPrice + getters.selectedFinishAddOnPrice + getters.selectedMensCutPrice + getters.selectedMensColourPrice
        },

        stylistsByLevel: state => {
            return state.stylists.filter(s => s.level === state.level.id)
        },

        totalsView: state => {
            if (state.selector === 'LevelSelector') {
                return 'LevelTotal'
            } else if (state.selector === 'PriceSelector') {
                return 'PriceTotal'
            } else if (state.selector === 'StylistSelector') {
                return 'StylistTotal'
            }
        }
    },

    mutations: {
        UPDATE_SALONS(state, payload) {
            state.salons = payload
        },

        UPDATE_SALON(state, payload) {
            state.salon = payload
        },

        UPDATE_SELECTOR(state, payload) {
            state.selector = payload
        },

        UPDATE_SERVICES(state, payload) {
            state.services = payload
        },

        UPDATE_STYLISTS(state, payload) {
            state.stylists = payload
        },

        UPDATE_LEVELS(state, payload) {
            state.levels = payload
        },

        UPDATE_CALCULATOR(state, payload) {
            state.calculator = payload
        },

        UPDATE_REGULAR(state, payload) {
            state.regular = payload
        },

        SELECT_VIEW(state, payload) {
            state.view = payload
        },

        SELECT_LEVEL(state, payload) {
            state.level = payload
        },

        SELECT_STYLIST(state, payload) {
            state.stylist = payload
        },

        CHANGE_COLOUR_CAT(state, payload) {
            state.colourCat = payload
        },

        UPDATE_SELECTED_COLOUR(state, payload) {
            state.selectedColour = payload
        },

        UPDATE_IS_COLOUR_CORRECTION(state, payload) {
            state.isColourCorrection = payload
        },

        UPDATE_SELECTED_COLOUR_ADD_ON(state, payload) {
            state.selectedColourAddOn = payload
        },

        UPDATE_SELECTED_TREATMENT(state, payload) {
            state.selectedTreatment = payload
        },

        UPDATE_SELECTED_FINISH(state, payload) {
            state.selectedFinish = payload
        },

        UPDATE_SELECTED_FINISH_ADD_ON(state, payload) {
            state.selectedFinishAddOn = payload
        },

        UPDATE_SELECTED_MENS_COLOUR(state, payload) {
            state.selectedMensColour = payload
        },

        UPDATE_SELECTED_MENS_CUT(state, payload) {
            state.selectedMensCut = payload
        },

        UPDATE_TOTAL_PRICE(state, payload) {
            state.totalPrice = payload
        },

        DECREASE_LEVEL(state) {
            if (state.level.id > 0 && state.level.id < 8) {
                state.level = state.levels.filter(l => l.id === state.level.id +1)[0]
            }
        },

        INCREASE_LEVEL(state) {
            if (state.level.id > 1) {
                state.level = state.levels.filter(l => l.id === state.level.id -1)[0]
            }
        }
    },

    actions: {
        loadSalons({ commit }) {
            axios.get('/api/salons').then((response) => {
                commit('UPDATE_SALONS', response.data)
            })
        },
        loadServices({ commit }) {
            axios.get('/api/services').then((response) => {
                commit('UPDATE_SERVICES', response.data)
            })
        },
        loadStylists({ commit }) {
            axios.get('/api/stylists').then((response) => {
                commit('UPDATE_STYLISTS', response.data)
            })
        },
        loadLevels({ commit }) {
            axios.get('/api/levels').then((response) => {
                commit('UPDATE_LEVELS', response.data)
            })
        }
    },
})