<template>
  <div class="select" tabindex="0" @blur="hideOptions">
    <div
      class="select__output"
      :class="isVisible ? 'open' : ''"
      @click="handleVisibility"
    >
      <span>{{ selectedOpt }}</span>
    </div>
    <ul v-show="isVisible" class="select__list">
      <li
        v-for="option in props.options.list"
        :key="option"
        class="select__option"
        :class="option === selectedOpt ? 'selected' : ''"
        :value="option"
        @click="() => select(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="tsx">
import { onMounted, ref } from 'vue';
import { SelectOptions } from '~/types';

const props = defineProps<{
  options: SelectOptions;
}>();
const emit = defineEmits<{
  (e: 'select', value: string): void;
}>();

const selectedOpt = ref('');
const select = (item: string) => {
  selectedOpt.value = item;
  isVisible.value = false;
  emit('select', selectedOpt.value);
};
const isVisible = ref(false);
const handleVisibility = () => (isVisible.value = !isVisible.value);
const hideOptions = () => (isVisible.value = false);
onMounted(() => (selectedOpt.value = props.options.default));
</script>
<style lang="scss" scoped>
.select {
  display: block;
  position: relative;
  font-size: clamp(var(--fz-md), 0.8786rem + 0.5178vw, var(--fz-h-xs));
  line-height: clamp(var(--lh-md), 1.379rem + 0.518vw, var(--lh-xl));
  width: 4rem;
  color: var(--boulders-4);
  user-select: none;
  &__output {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: 2px solid var(--boulders-4);
    height: var(--fz-h-sm);
    padding: 0 0.3rem;
    text-transform: uppercase;
    &.open,
    &:hover,
    &:focus {
      border-bottom: 2px solid var(--primary-color);
    }
    &::after {
      content: url('/assets/icons/angle-down.svg');
      display: block;
      width: 1rem;
      transform: scale(0.7);
      @include filter-boulders-4;
    }
  }
  &__list {
    position: absolute;
    list-style-type: none;
    width: max-content;
    min-width: 4rem;
    box-shadow: 0px 2px 4px 0px var(--boulders-2-04);
  }
  &__option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;
    background-color: #fff;
    font-size: clamp(var(--fz-xs), 0.692rem + 0.249vw, var(--fz-md));
    text-transform: uppercase;
    &:hover,
    &:focus {
      background-color: var(--boulders-1);
    }
    &.selected::after {
      content: url('/assets/icons/tick.svg');
      display: block;
      margin-left: 0.3rem;
      width: 1rem;
      transform: scale(0.7);
      @include filter-boulders-4;
    }
  }
}
.dark {
  .select {
    color: #fff;
    &__output {
      border-bottom: 2px solid var(--bays-0);
      background-color: var(--bays-0-02);
      &::after {
        @include filter-bays-0;
      }
    }
    &__list {
      box-shadow: 0px 2px 4px 0px var(--bays-2-04);
    }
    &__option {
      background-color: var(--bays-0-02);
      &.selected::after {
        @include filter-bays-0;
      }
    }
  }
}
</style>
