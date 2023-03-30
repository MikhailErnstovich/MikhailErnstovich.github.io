export function insertImage (el: HTMLElement):void {
  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver):void => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        loadImage(el);
        observer.unobserve(el);
      }
    });
  };

  if (!window['IntersectionObserver']) {
    loadImage(el);
  } else {
    createObserver(el, handleIntersect);
  }
}

export function showElement (el: HTMLElement):void {
  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver):void => {
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
    console.log(123);
  } else {
    createObserver(el, handleIntersect);
  }
}

function createObserver (el: HTMLElement, callback: IntersectionObserverCallback):void {
  const options = {
    root: null,
    threshold: 0
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
}

function loadImage (el: HTMLElement) {
  const imgElements = Array.from(el.children).filter(el => {
    return el.nodeName === 'IMG' || el.nodeName === 'SOURCE'
  });

  if (imgElements.length) {
    (imgElements as HTMLImageElement[]).forEach(item => {
      item.addEventListener('load', () => {
        setTimeout(() => item.classList.add('loaded'), 100)
      });
      item.addEventListener('error', () => console.log('error'));
      if (!item.dataset.url) {
        return;
      }
      switch (item.nodeName) {
        case 'IMG': {
          item.src = item.dataset.url;
          break;
        }
        case 'SOURCE': {
          item.srcset = item.dataset.url;
          break;
        }
      }
    });
  }
};
