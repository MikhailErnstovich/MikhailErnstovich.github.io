<template>
  <transition :name="props.name" :appear="props.appear">
    <div v-if="props.toggle" class="animation-wrapper">
      <slot></slot>
    </div>
  </transition>
</template>
<script setup lang="tsx">
const props = defineProps<{
  name: string;
  appear: boolean;
  toggle: boolean;
}>();
</script>
<style lang="scss" scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition-property: opacity, transform;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition-property: opacity, transform;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.rise-enter-active,
.rise-leave-active {
  transition-property: opacity, transform;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

.rise-enter-from,
.rise-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.drop-enter-active,
.drop-leave-active {
  transition-property: opacity, transform;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

:nth-child(2) {
  transition-delay: 0.2s;
}
:nth-child(3) {
  transition-delay: 0.4s;
}
:nth-child(4) {
  transition-delay: 0.6s;
}
:nth-child(5) {
  transition-delay: 0.8s;
}
:nth-child(6) {
  transition-delay: 1s;
}
:nth-child(7) {
  transition-delay: 1.2s;
}
:nth-child(8) {
  transition-delay: 1.4s;
}
:nth-child(9) {
  transition-delay: 1.6s;
}
:nth-child(10) {
  transition-delay: 1.8s;
}
</style>
