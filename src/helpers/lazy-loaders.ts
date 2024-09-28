import { MapPositions } from '~/types';
import handleGeolocation from '~/helpers/geolocation';

//load img or picture content when the tag is in the user's viewport
export function insertImage(el: HTMLElement): void {
  const handleIntersect = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void => {
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

export function handleGeoPermission(
  el: HTMLElement,
  geoSuccessCallback: (data: GeolocationPosition | GeolocationPositionError) => void,
  geoErrorCallback: (error: GeolocationPositionError) => void
): void {
  const handleIntersect = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        handleGeolocation()
          .then(geoSuccessCallback)
          .catch(geoErrorCallback)
          .finally(() => observer.unobserve(el))
      }
    });
  };

  if (!window['IntersectionObserver']) {
    handleGeolocation()
      .then(geoSuccessCallback)
      .catch(geoErrorCallback)
  } else {
    createObserver(el, handleIntersect);
  }
}


export function insertMap(
  el: HTMLElement,
  positions: MapPositions,
  createMap: (positions: MapPositions) => Promise<void>
): void {
  const handleIntersect = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        createMap(positions);
        observer.unobserve(el);
      }
    });
  };
  //if browser doesn't have observer, than loading starts immidiatly 
  if (!window['IntersectionObserver']) {
    createMap(positions);
  } else {
    createObserver(el, handleIntersect);
  }
}

export function createObserver(el: HTMLElement, callback: IntersectionObserverCallback): void {
  const options = {
    root: null,
    threshold: 0
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
}

//Take content link from data-url attribute and put it to img or picture src attribute. Content starts loading
function loadImage(el: HTMLElement) {
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
