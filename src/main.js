import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

import './assets/main.css'

import i18n from './i18n'
import { createYmaps } from "vue-yandex-maps";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const ymaps = createYmaps({
  apikey: "9fa90fbc-ce5f-4dc9-ae6d-433e0ec7338b",
});

const app = createApp(App)

app.component("infinite-loading", InfiniteLoading);
app.use(createPinia())
app.use(router)
app.use(i18n);

app.use(ymaps);
app.mount('#app')
