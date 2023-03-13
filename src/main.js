import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_DJANGO_HOST + process.env.VUE_APP_DJANGO_PORT
// axios.defaults.baseURL = "http://timetable.altlms.com"

createApp(App).use(store).use(router).mount('#app')
