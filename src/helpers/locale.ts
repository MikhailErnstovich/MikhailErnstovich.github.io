import i18n from '~/plugins/i18n';
import { onBeforeMount } from 'vue';
export const setLocale = () => {
  onBeforeMount(() => {
    const locale = localStorage.getItem('locale');
    if (locale) {
      i18n.global.locale.value = locale as 'en' | 'ru'
    }
  });
}