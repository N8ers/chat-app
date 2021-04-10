import axios from 'axios'

export const state = {
  user: {
    userId: 4,
    userName: 'N8'
  },
  friends: [],
  openConversations: []
}

export const mutations = {
  setFriends: function (state, data) {
    // const dummyData = [
    //   {user_id: 1, username: "Goon"},
    //   {user_id: 2, username: "Tsuki"},
    //   {user_id: 3, username: "Joe"}
    // ]
    console.log('data ', data)
    console.log('state.friends 1 ', state.friends)
    state.friends = data
    console.log('state.friends 2 ', state.friends)
  }
}

export const actions = { 
  async getFriends ({ state, commit }) {
    axios.get(`http://localhost:3000/friends/user_id/${state.user.userId}`)
    .then((response) => commit('setFriends', response.data))
    .catch((err) => console.log('err ', err))
  }
}

export const getters = { 
  user: function () {
    return state.user
  },
  // friends: function () {
  //   return state.friends
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}