import axios from 'axios'

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
    state.counter = state.counter + 1
    console.log('state ', state)
    console.log('data ', data)
    state.friends = data
  }
}

export const actions = { 
  getFriends: async function ({ state, commit }) {
    axios.get(`http://localhost:3000/friends/user_id/${state.user.userId}`)
    .then((response) => {
      console.log('response: ', response.data)
      commit('setFriends', response.data)
    })
    .catch((err) => console.log('err ', err))
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