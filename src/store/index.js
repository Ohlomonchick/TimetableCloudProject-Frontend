import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    token: '',
    period: 'day',
    isLoading:false,
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('period')) {
          state.period = JSON.parse(localStorage.getItem('period'))
      } else {
        localStorage.setItem('period', JSON.stringify(state.period))
      }

      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      }
    },
    changePeriod(state, period) {
      state.period = period;
      localStorage.setItem('period', JSON.stringify(state.period))
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
  },
  actions: {
  },
  modules: {
  }
})
