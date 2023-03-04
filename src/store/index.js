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
    },
    changePeriod(state, period) {
      state.period = period;
      localStorage.setItem('period', JSON.stringify(state.period))
    }
  },
  actions: {
  },
  modules: {
  }
})
