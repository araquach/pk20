import axios from 'axios'

const today = new Date()

export const state = {
    hideOffers: false,
    endDate: "30/11/23",
    newsItems: [],
    storeData: {}
}

export const getters = {
    linkTreeNews: state => state.newsItems.slice(0, 3),
    homeNewsItems: state => state.newsItems.slice(0, 4),
}

export const mutations = {
    SET_NEWS_ITEMS (state, newsItems) {
        state.newsItems = newsItems
    },

    SET_STORE_DATA (state, storeData) {
        state.storeData = storeData
    }
}

export const actions = {
    loadNewsItems ({ commit }) {
        axios
            .get('/api/news-items')
            .then(response => response.data)
            .then(newsItems => {
                commit('SET_NEWS_ITEMS', newsItems)
            })

    },

    loadStoreData ({ commit }) {
        axios
            .get('/api/store-data')
            .then(response => response.data)
            .then(storeData => {
                commit('SET_STORE_DATA', storeData)
            })
    }
}