import { Ref } from 'vue';
import { createObserver } from './lazy-loaders';

//track HTML changes and toggle visibility
export function handleAppearAnimation(el: Ref<Node>, toggle: Ref<boolean>) {
  const callback: MutationCallback = (mutationList, observer) => {
    toggle.value = true;
    observer.disconnect();
  }
  if (el.value instanceof Node) {
    const observer = new MutationObserver(callback);
    observer.observe(el.value, { attributes: true });
  }
}

//change element data-is-visible attribute
export function showElement (el: HTMLElement):void {
  const handleIntersect: IntersectionObserverCallback = (
    entries,
    observer
  ): void => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        el.dataset.isVisible = '1';
        observer.unobserve(el);
      }
    });
  };
  if (!window['IntersectionObserver']) {
    el.dataset.isVisible = '1';
  } else {
    createObserver(el, handleIntersect);
  }
}