import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/index.js";
import { createPinia } from "pinia";

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app');
