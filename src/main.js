import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import mitt from 'mitt';
import App from './App.vue';
import router from './router';
import 'bootstrap';

const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.$emitter = emitter;
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
