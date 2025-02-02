import { createRouter, createWebHistory } from 'vue-router';
import Main from '~/views/Main.vue';
import Projects from '~/views/Projects.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
    { path: '/projects', component: Projects },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      tryScrollToAnchor(to.hash, 2000, 100);
    } else {
      return {
        top: 0,
        behavior: 'smooth',
      };
    }
  },
});

const wait = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

//wait for the particular anchor to appear, then scroll to it
async function tryScrollToAnchor(hash: string, timeout = 1000, delay = 100) {
  while (timeout > 0) {
    const el = document.querySelector(hash);
    await wait(delay);
    timeout = timeout - delay;
    if (el) {
      //Turn on smooth scrolling flag in Chrome to make scroll-behavior smooth
      el.scrollIntoView({ behavior: 'smooth' });
      break;
    }
  }
}
