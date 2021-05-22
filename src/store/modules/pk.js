import axios from 'axios'

export const state = {
    newsItems: [],
}

export const getters = {
    linkTreeNews: state => state.newsItems.slice(0, 3),
    homeNewsItems: state => state.newsItems.slice(0, 4),
}

export const mutations = {
    SET_NEWS_ITEMS (state, newsItems) {
        state.newsItems = newsItems
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

    }
}