<template>
  <article class="timeline">
    <el-timeline>
      <el-timeline-item 
        class="timeline__item"  
        :class="i !== 0 ? 'timeline__item_hidden' : ''"
        placement="top"
        v-for="(item, i) in timeline" 
        :key="item.interval"
        :timestamp="item.interval"
        :icon="item.icon"
        @click="$event => toggleCard($event)"
      >
        <el-card>
          <h4 class="timeline__item-title">{{ item.title }}</h4>
          <a class="link timeline__item-link" :href="item.link"  target="_blank">
            {{ item.organization }} 
          </a>
          <ul class="timeline__item-list">
            <li v-for="activity in item.activities">{{ activity }}</li>
          </ul>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </article>
</template>

<script setup lang="tsx">
import { timeline } from './timeline-data';

function toggleCard(event: Event) {
  if (event.target.classList.contains('link')) {
    return;
  }
  if (event.currentTarget) {
    event.currentTarget.classList.toggle('timeline__item_hidden');
  }
}

</script>

<style lang="scss">
.el-card {
  border: 1px solid var(--bays-0);
}
.el-timeline {
  &-item {
    &__timestamp {
      font-size: var(--fz-xs);
      font-family: var(--font-light);
      padding-bottom: var(--s-lg);
      color: var(--bays-0);
      &.is-top {
        margin-bottom: 0;
      }
    }
    &__content {
      box-shadow: none;
    }
    &__tail {
      top: 18px;
      left: 7px;
      --el-timeline-node-color: var(--bays-0-05);
    }
    &__node {
      width: 18px;
      height: 18px;
      background-color: transparent;
      font-size: var(--fz-lg);
      border-color: var(--bays-0);
      .el-timeline-item__icon {
        color: var(--bays-0);
        font-size: var(--fz-lg);
      }
    }
  }
}
.dark {
  .timeline__item_hidden .el-timeline-item__timestamp {
    color: var(--boulders-0);
  }
}
.timeline {
  &__item {
    max-height: 1000px;
    padding-bottom: var(--s-lg);
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.645,0.045,0.355,1);
    will-change: max-height;
    &_hidden {
      max-height: 0;
      .el-timeline-item__timestamp {
        color: var(--boulders-4)
      }
    }
    .el-card {
      background-color: var(--bays-0-01);
      border: none;
      border-radius: var(--s-xs);
      &__body {
        position: relative;
        padding: var(--s-sm);
      }
    }
    .el-card.is-always-shadow {
      box-shadow: none;
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
    &-background {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &-list {
      margin-top: var(--s-xs);
      li {
        position: relative;
        font-size: var(--fz-md);
        margin-bottom: var(--s-xs);
        padding-left: var(--s-md);
        list-style: none;
        &::before {
          display: block;
          content: '▸';
          position: absolute;
          left: 0;
          height: inherit;
          line-height: inherit;
          color: var(--bays-0);
        }
      }
    }
  }
}
</style>