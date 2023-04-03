<template>
  <article class="t-line">
    <ul class="t-line__list">
      <li 
        class="t-line__item animation animation_opacity animation_rise start"       
        :class="i !== 0 ? 't-line__item_hidden' : ''"  
        v-for="(item, i) in timeline" 
        :key="item.interval"
        v-appear-transition
      >
        <div class="t-line__item-timestamp" @click="$event => toggleCard($event)">
          {{ item.interval }}
        </div>
        <div class="t-line__axis">
          <img class="t-line__axis-icon" :src="item.icon" alt="icon" />
          <div class="t-line__axis-tail"></div>
        </div>
        <div class="t-line__card">
          <hgroup class="t-line__title-wrapper">
            <h3 class="t-line__item-title">{{ item.title }}</h3>
            <a class="link t-line__item-link" :href="item.link"  target="_blank">
              {{ item.organization }} 
            </a>
          </hgroup>
          <ul class="t-line__item-list">
            <li v-for="activity in item.activities">{{ activity }}</li>
          </ul>
        </div>   
      </li>
    </ul>
  </article>
</template>

<script setup lang="tsx">
import { timeline } from './timeline-data';
import { appearAnimation } from '~/helpers/appear-animation';

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};
function toggleCard(event: Event) {
  if (event.currentTarget instanceof HTMLElement && event.currentTarget.parentNode instanceof HTMLElement) {
    event.currentTarget.parentNode.classList.toggle('t-line__item_hidden');
  }
}
</script>

<style lang="scss" scoped>
.t-line {
  &__list {
    list-style: none;
  }
  &__item {
    display: grid;
    grid-template-columns: 18px 1fr;
    grid-template-rows: var(--lh-sm) 1fr;
    column-gap: var(--s-xs);
    max-height: 1000px;
    transition: max-height 0.5s cubic-bezier(0.645,0.045,0.355,1);
    will-change: max-height;
    overflow: hidden;
    &:last-child {
      .t-line__axis-tail {
        display: none;
      }
    }
    &_hidden {
      max-height: calc(var(--lh-sm) + var(--s-xs));
      .t-line__item-timestamp {
        color: var(--boulders-4);
      }
    }

    &-timestamp {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
      font-size: var(--fz-sm);
      line-height: var(--lh-sm);
      font-family: var(--font-light);
      color: var(--bays-1);
      &:hover,
      &:focus {
        color: var(--primary-color);
      }
      &:active {
        color: var(--bays-3);
      }
      cursor: pointer;
    }
    &-title {
      font-size: var(--fz-lg);
      font-family: var(--font-medium);
      letter-spacing: 1px;
    }
    &-link {
      font-size: var(--fz-md);
      font-family: var(--font-medium);
    }
    &-list {
      margin-top: var(--s-xss);
      li {
        position: relative;
        font-size: var(--fz-md);
        margin-bottom: var(--s-xss);
        padding-left: var(--s-sm);
        list-style: none;
        &::before {
          display: block;
          content: '▸';
          position: absolute;
          left: 0;
          height: inherit;
          line-height: inherit;
          color: var(--bays-1);
        }
      }
    }
  }
  &__card {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    background-color: var(--bays-0-01);
    border: none;
    border-radius: var(--s-xss);
    padding: var(--s-xs);
    margin: var(--s-xs) 0;
  }
  &__axis {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-icon {
      display: block;
      width: 18px;
      height: 18px;
      filter: invert(13%) sepia(90%) saturate(5012%) hue-rotate(230deg) brightness(104%) contrast(117%);
    }
    &-tail {
      width: 2px;
      height: 100%;
      background-color: var(--bays-0-05);
    }
  }
}
.dark {
  .t-line__item_hidden .t-line__item-timestamp  {
    color: var(--boulders-0);
  }
}
</style>