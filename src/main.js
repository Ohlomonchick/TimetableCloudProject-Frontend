import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_DJANGO_HOST + ':8000'

createApp(App).use(store).use(router).mount('#app')
