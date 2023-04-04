<template>
  <article class="timeline">
    <ul class="timeline__list">
      <li 
        class="timeline__item animation animation_opacity animation_rise start"       
        :class="i !== 0 ? 'timeline__item_hidden' : ''"  
        v-for="(item, i) in timeline" 
        :key="item.interval"
        v-appear-transition
      >
        <div class="timeline__item-timestamp" @click="$event => toggleCard($event)">
          {{ item.interval }}
        </div>
        <div class="timeline__axis" v-inserted>
          <img class="timeline__axis-icon" :data-url="item.icon" alt="icon" />
          <div class="timeline__axis-tail"></div>
        </div>
        <div class="timeline__card">
          <hgroup class="timeline__title-wrapper">
            <h3 class="timeline__item-title">{{ item.title }}</h3>
            <a class="link timeline__item-link" :href="item.link"  target="_blank">
              {{ item.organization }} 
            </a>
          </hgroup>
          <ul class="timeline__item-list">
            <li v-for="activity in item.activities">{{ activity }}</li>
          </ul>
        </div>   
      </li>
    </ul>
  </article>
</template>

<script setup lang="tsx">
import { timeline } from './timeline-data';
import { insertImage } from '~/helpers/lazy-loaders';
import { appearAnimation } from '~/helpers/appear-animation';

const vInserted = {
  mounted: insertImage,
};

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};
function toggleCard(event: Event) {
  if (event.currentTarget instanceof HTMLElement && event.currentTarget.parentNode instanceof HTMLElement) {
    event.currentTarget.parentNode.classList.toggle('timeline__item_hidden');
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  &__list {
    list-style: none;
  }
  &__item {
    display: grid;
    grid-template-columns: 18px 1fr;
    grid-template-rows: var(--lh-sm) 1fr;
    column-gap: var(--s-xs);
    max-height: 1000px;
    transition: all 0.5s cubic-bezier(0.645,0.045,0.355,1);
    will-change: max-height;
    overflow: hidden;
    &:last-child {
      .timeline__axis-tail {
        display: none;
      }
    }
    &_hidden {
      max-height: calc(var(--lh-sm) + var(--s-xs));
      .timeline__item-timestamp {
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
          color: var(--primary-color);
        }
      }
    }
  }
  &__card {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    background: linear-gradient(45deg, var(--bays-0-01), var(--bays-0-02));
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
      @include filter-bays-1;
    }
    &-tail {
      width: 1px;
      height: 100%;
      background-color: var(--bays-1);
    }
  }
}
.dark {
  .timeline {
    &__item {
      &_hidden {
        .timeline__item-timestamp {
          color: var(--boulders-0);
        }
      }
      &-timestamp {
        color: var(--bays-0);
        &:hover,
        &:focus {
          color: var(--bays-1);
        }
        &:active {
          color: var(--primary-color);
        }
        cursor: pointer;
      }
      &-list {
        li {
          &::before {
            color: var(--boulders-0);
          }
        }
      }
    }
    &__axis {
      &-icon {
        @include filter-bays-0;
      }
      &-tail {
        background-color: var(--bays-0);
      }
    }
  }
}
</style>