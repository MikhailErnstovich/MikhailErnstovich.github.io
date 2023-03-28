export function insertImage (el: HTMLPictureElement):void {
  const loadImage = () => {
    const imgElements = Array.from(el.children).filter(el => {
      return el.nodeName === 'IMG' || el.nodeName === 'SOURCE'
    });

    if (imgElements.length) {
      (imgElements as HTMLImageElement[]).forEach(el => {
        el.addEventListener('load', () => {
          setTimeout(() => el.classList.add('loaded'), 100)
        });
        el.addEventListener('error', () => console.log('error'));
        if (!el.dataset.url) {
          return;
        }
        switch (el.nodeName) {
          case 'IMG': {
            el.src = el.dataset.url;
            break;
          }
          case 'SOURCE': {
            el.srcset = el.dataset.url;
            break;
          }
        }
      });
    
    }
  };

  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver):void => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        loadImage();
        observer.unobserve(el);
      }
    });
  };
  
  const createObserver = ():void  => {
    const options = {
      root: null,
      threshold: 0
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(el);
  }

  if (!window['IntersectionObserver']) {
    loadImage();
  } else {
    createObserver();
  }
}
