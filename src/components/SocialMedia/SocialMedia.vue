<template>
  <article class="social-media">
    <ul class="social-media__list">
      <li
        v-for="item in contacts.socials"
        :key="item.link"
        v-appear-transition
        class="social-media__item animation animation_opacity animation_drop start"
      >
        <a
          v-inserted
          class="social-media__item-link"
          target="_blank"
          :href="item.link"
        >
          <img :data-url="item.img" :alt="item.title + ' icon'" />
        </a>
      </li>
      <li
        v-appear-transition
        class="social-media__item animation animation_opacity animation_drop start"
      >
        <a
          v-inserted
          class="social-media__item-link"
          target="_blank"
          :href="contacts.email.link"
        >
          <img
            :data-url="contacts.email.img"
            :alt="contacts.email.title + ' icon'"
          />
        </a>
      </li>
    </ul>
  </article>
</template>
<script setup lang="tsx">
import { contacts } from './social-media-data';
import { insertImage } from '~/helpers/lazy-loaders';
import { appearAnimation } from '~/helpers/appear-animation';

const vInserted = {
  mounted: insertImage,
};

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};
</script>
<style lang="scss" scoped>
.social-media {
  &__list {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  &__item {
    width: 40px;
    height: 40px;
    padding: var(--s-xss);
    &-link {
      img {
        display: block;
        width: 100%;
        height: 100%;
        @include filter-bays-1;
        &:hover,
        &:focus {
          @include filter-primary;
        }
        &:active {
          @include filter-bays-3;
        }
      }
    }
    &:nth-child(2),
    &:nth-child(4) {
      transition-delay: 0.2s;
    }
    &:nth-child(3) {
      transition-delay: 0.4s;
    }
  }
  @include md-screen {
    max-width: 500px;
    &__item {
      padding: calc(var(--s-xss) / 2);
    }
  }
  @include lg-screen {
    &__item {
      padding: 0;
    }
  }
}
.dark {
  .social-media {
    &__item {
      &-link {
        img {
          @include filter-bays-0;
          &:hover,
          &:focus {
            @include filter-bays-1;
          }
          &:active {
            @include filter-primary;
          }
        }
      }
    }
  }
}
</style>
