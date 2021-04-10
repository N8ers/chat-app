import axios from 'axios'

const baseURL = 'http://localhost:3000'

export const state = {
  user: {
    userId: 4,
    userName: 'N8'
  },
  friends: [],
  conversations: []
}

export const mutations = {
  setFriends: function (state, data) {
    state.friends = data
  },
  setConversations: function (state, data) {
    state.conversations = data
  }
}

export const actions = { 
  getFriends: async function ({ state, commit }) {
    axios.get(`${baseURL}/friends/user_id/${state.user.userId}`)
    .then((response) => { commit('setFriends', response.data) })
    .catch((err) => { console.log('err ', err) })
  },
  getConversations: async function ({ state, commit }) {
    axios.get(`${baseURL}/custom/init/${state.user.userId}`)
    .then((response) => { commit('setConversations', response.data) })
    .catch((err) => { console.log('err ', err) })
  }
}

export const getters = { }

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}