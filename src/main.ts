import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store';
import axiosWrapper from './plugins/axios-wrapper';
import './assets/main.css'

const app = createApp(App);
app.use(store);
app.use(axiosWrapper);
(store as any).$axios = app.config.globalProperties.$axios;


app.mount('#app')
