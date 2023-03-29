<template>
  <article class="social-media">
    <ul class="social-media__list">
      <li 
        class="social-media__item"
        v-for="item in contacts.socials"
        :key="item.link"
      >
        <a 
          class="social-media__item-link" 
          target="_blank"
          :href="item.link"
          v-inserted
        >
          <img :data-url="item.img" :alt="item.title + ' icon'"/>
        </a>
      </li>
      <li
        class="social-media__item"
      >
        <a 
          class="social-media__item-link" 
          target="_blank"
          :href="contacts.email.link"
          v-inserted
        >
          <img :data-url="contacts.email.img" :alt="contacts.email.title + ' icon'"/>
        </a>
      </li>
    </ul>
  </article>
</template>
<script setup lang="tsx">
import { contacts } from './social-media-data';
import { insertImage } from '~/helpers/lazy-loaders';
const vInserted = {
  mounted: insertImage
};
</script>
<style lang="scss" scoped>
  .social-media{
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
        filter: invert(13%) sepia(90%) saturate(5012%) hue-rotate(230deg) brightness(104%) contrast(117%);
        &:hover,
        &:focus {
          filter: invert(9%) sepia(100%) saturate(7480%) hue-rotate(248deg) brightness(81%) contrast(141%);
        }
        &:active {
          filter: invert(7%) sepia(71%) saturate(6784%) hue-rotate(242deg) brightness(95%) contrast(122%);
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>