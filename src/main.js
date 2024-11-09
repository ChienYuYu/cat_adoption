/* eslint-disable linebreak-style */
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import mitt from 'mitt';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import store from './store';
import './registerServiceWorker';

const emitter = mitt();
const app = createApp(App).use(store);
app.config.globalProperties.$emitter = emitter;
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
