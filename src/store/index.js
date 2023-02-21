import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    token: '',
    period: '',
    isLoading:false,
  },
  getters: {
  },
  mutations: {
    // initializeStore(state) {
    //   if (localStorage.getItem())
    // }
  },
  actions: {
  },
  modules: {
  }
})
