import { createApp } from 'vue';

import 'element-plus/theme-chalk/dark/css-vars.css';
import '~/styles/themes/theme_dark.scss';
import ElementPlus from 'element-plus';

import App from './App.vue';

import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
app.mount('#app');
