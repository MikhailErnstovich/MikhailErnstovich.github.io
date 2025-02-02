<template>
  <article class="timeline">
    <ul class="timeline__list">
      <li
        v-for="(item, i) in timeline"
        :key="item.order"
        :ref="setItemRef"
        v-appear-transition
        class="timeline__item animation animation_opacity animation_rise start"
        :class="i !== 0 ? 'timeline__item_hidden' : 'timeline__item_selected'"
      >
        <div class="timeline__item-timestamp" @click="() => toggleCard(i)">
          {{ item.interval }}
          <span></span>
        </div>
        <div v-inserted class="timeline__axis">
          <img class="timeline__axis-icon" :data-url="item.icon" alt="icon" />
          <div class="timeline__axis-tail"></div>
        </div>
        <Card :cardData="item" class="timeline__card" />
      </li>
    </ul>
    <Card :cardData="cardData" class="timeline__tab" />
  </article>
</template>

<script setup lang="tsx">
import {
  reactive,
  onMounted,
  computed,
  onBeforeUpdate,
  ref,
  Ref,
  watch,
} from 'vue';
import { timelineData, TimelineEvent } from './timeline-data';
import { insertImage } from '~/helpers/lazy-loaders';
import { appearAnimation } from '~/helpers/appear-animation';
import Card from '~/components/Card/Card.vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });
const timeline = computed(() => timelineData[locale.value as 'en' | 'ru']);
const itemRefs: Ref<HTMLElement[]> = ref([]);
//Clear itemRefs before list is updated.
//Items are added to itemRefs on component loading and every time when DOM changes, i.e. when changing the language
onBeforeUpdate(() => (itemRefs.value.length = 0));
const setItemRef = (el: HTMLElement) => {
  if (el) {
    itemRefs.value.push(el);
  }
  return undefined;
};

const vInserted = {
  mounted: insertImage,
};

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};

onMounted(() => {
  Object.assign(cardData, timeline.value[0]);
});
watch(locale, () => {
  Object.assign(cardData, timeline.value[currentCard.value]);
});

const currentCard = ref(0);
function toggleCard(i: number) {
  currentCard.value = i;
  itemRefs.value[i].classList.toggle('timeline__item_hidden');
  itemRefs.value.forEach((item, index) => {
    if (index === i) {
      item.classList.add('timeline__item_selected');
    } else {
      item.classList.remove('timeline__item_selected');
    }
  });
  Object.assign(cardData, timeline.value[i]);
}

const cardData: TimelineEvent = reactive({
  order: 0,
  interval: '',
  title: '',
  organization: '',
  link: '',
  activities: [''],
  icon: '',
});
</script>

<style lang="scss" scoped>
.timeline {
  &__list {
    list-style: none;
  }
  &__item {
    display: grid;
    grid-template-columns: var(--s-xs) 1fr;
    grid-template-rows: clamp(var(--s-sm), 1.075rem + 0.748vw, var(--s-md)) 1fr;
    column-gap: var(--s-xs);
    max-height: 1000px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    will-change: max-height;
    overflow: hidden;
    &:last-child {
      .timeline__axis-tail {
        display: none;
      }
    }
    &_hidden {
      max-height: calc(clamp(1.25rem, 1.075rem + 0.748vw, 2rem) + var(--s-xs));
    }
    &-timestamp {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
      font-size: clamp(var(--fz-sm), 0.787rem + 0.374vw, var(--fz-xl));
      line-height: clamp(var(--lh-sm), 1.075rem + 0.748vw, var(--lh-xl));
      font-family: var(--font-light);
      color: var(--boulders-4);
      transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover,
      &:focus {
        color: var(--primary-color);
      }
      cursor: pointer;
    }
  }
  &__card {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
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
  &__tab {
    display: none;
  }
}
.dark {
  .timeline {
    &__item {
      &-timestamp {
        color: var(--boulders-0);
        &:hover,
        &:focus {
          color: var(--bays-0);
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

.timeline {
  @include md-screen {
    @include md-grid;
    column-gap: var(--s-sm);
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    &__list {
      grid-column-start: 1;
      grid-column-end: 5;
    }
    &__item {
      position: relative;
      display: block;
      padding: var(--s-xs) 0;
      max-height: calc(
        clamp(1.5rem, 1.383rem + 0.498vw, 2rem) + 2 * var(--s-xs)
      );
      overflow: visible;
      &::before,
      &::after {
        content: ' ';
        position: absolute;
        left: 0;
        display: block;
        width: var(--s-xs);
        height: var(--s-xs);
        border-left: 2px solid var(--bays-1);
        transform: translate(-8px) scale(0);
        transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      &::before {
        top: 0;
        border-top: 2px solid var(--bays-1);
      }
      &::after {
        bottom: 0;
        border-bottom: 2px solid var(--bays-1);
      }
      &-timestamp {
        font-family: var(--font-regular);
        height: clamp(1.5rem, 1.383rem + 0.498vw, 2rem);
        text-align: center;
        span {
          width: 100%;
          height: 0;
          display: inline-block;
        }
        &::before,
        &::after {
          content: ' ';
          position: absolute;
          right: 0;
          display: block;
          width: var(--s-xs);
          height: var(--s-xs);
          border-right: 2px solid var(--bays-1);
          transform: translate(8px) scale(0);
          transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        &::before {
          top: 0;
          border-top: 2px solid var(--bays-1);
        }
        &::after {
          bottom: 0;
          border-bottom: 2px solid var(--bays-1);
        }
      }
      &_hidden {
        max-height: inherit;
      }
      &_selected {
        .timeline__item-timestamp {
          &::before,
          &::after {
            transform: translate(8px) scale(1);
          }
        }
        &::before,
        &::after {
          transform: translate(-8px) scale(1);
        }
      }
    }
    &__axis {
      display: none;
    }
    &__list .timeline__card {
      display: none;
    }
    &__tab {
      display: block;
      grid-column-start: 5;
      grid-column-end: 13;
      background: linear-gradient(180deg, var(--bays-0-01), transparent);
    }
  }
  @include lg-screen {
    @include lg-grid;
    &__list {
      grid-column-end: 4;
    }
    &__tab {
      grid-column-start: 4;
    }
  }
  @include xl-screen {
    @include lg-grid;
  }
}
</style>
