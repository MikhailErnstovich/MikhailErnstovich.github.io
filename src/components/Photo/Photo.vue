<template>
  <div class="photo">
    <figure class="photo__wrapper">
      <picture v-inserted class="photo__content">
        <source 
          :data-url="imgUrls.lg"
          media="(min-width: 1000px)"
        />
        <source 
          :data-url="imgUrls.md"
          media="(min-width: 600px)"
        />
        <img 
          class="photo__img"
          :data-url="imgUrls.sm"
          alt="Mikhail Makarov"
        />
      </picture>
    </figure>
  </div>
</template>
<script setup lang="tsx">
const imgUrls = {
  sm:  new URL('~/assets/images/me-sm.webp', import.meta.url).href,
  md:  new URL('~/assets/images/me-md.webp', import.meta.url).href,
  lg:  new URL('~/assets/images/me.webp', import.meta.url).href
}

const vInserted = {
  mounted: (el: HTMLPictureElement):void => {
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
};
</script>
<style lang="scss" scoped>
.photo {
  position: relative;
  width: 100%;
  padding: var(--s-md);
  margin: var(--s-sm) auto var(--s-lg);
  &__wrapper {
    position: relative;
    &:focus .photo__img,
    &:hover .photo__img {
      filter: contrast(1.2) saturate(1.2);
      mix-blend-mode: normal;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    &::before {
      top: 0;
      left: 0;
      background-color: var(--bays-0-03);
    }
    &::after {
      border: 2px solid var(--bays-0);
      border-top: none;
      border-left: none;
      transform: translate(var(--s-sm), calc(15px - 100%));
      transition: all .3s ease-in-out;
      z-index: -1;
      will-change: transform;
    }
    &:hover::after {
      transform: translate(5px, calc(5px - 100%));
    }
  }
  &__img {
    position: relative;
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.2);
    mix-blend-mode: multiply;
  }
}
</style>