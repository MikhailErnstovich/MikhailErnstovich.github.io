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
      padding: var(--s-xs);
      &-link {
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>