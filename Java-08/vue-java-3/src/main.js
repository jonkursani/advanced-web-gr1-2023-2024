import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/index.js";
import { createPinia } from "pinia";
import TheLayout from "@/components/layout/TheLayout.vue";

createApp(App)
    .use(router)
    .use(createPinia())
    .component('the-layout', TheLayout) // global import
    .mount('#app');
