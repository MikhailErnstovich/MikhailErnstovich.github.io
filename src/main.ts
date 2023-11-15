import { createApp } from 'vue';
import '~/styles/themes/theme_dark.scss';

import i18n from '~/plugins/i18n';
import { router } from '~/router';
import App from './App.vue';

const app = createApp(App);
app.use(i18n);
app.use(router)
app.mount('#app');
