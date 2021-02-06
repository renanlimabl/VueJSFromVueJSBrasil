import { createApp } from 'vue';
import App from './App.vue';
import 'animate.css';
import router from './router';
import './assets/css/fonts.css';
import './assets/css/tailwind.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
