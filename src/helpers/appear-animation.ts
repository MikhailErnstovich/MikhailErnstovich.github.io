import { createObserver } from './lazy-loaders';

export function appearAnimation(el: HTMLElement, className: string): void {
  const handleIntersect: IntersectionObserverCallback = (
    entries,
    observer,
  ): void => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        el.classList.remove(className);
        observer.unobserve(el);
      }
    });
  };
  if (!window['IntersectionObserver']) {
    el.classList.remove(className);
  } else {
    createObserver(el, handleIntersect);
  }
}
