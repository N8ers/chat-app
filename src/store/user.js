export const state = {
  user: {
    userId: 4,
    userName: 'N8'
  }
}

export const mutations = { }

export const actions = { }

export const getters = { 
  user: function () {
    return state.user
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}