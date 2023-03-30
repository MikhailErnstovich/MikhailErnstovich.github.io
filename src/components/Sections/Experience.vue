<template>
  <section class="section section_numbered" :id="props.title.id">
    <div class="section__title-wrapper">
      <h2 class="section__title">
        <span class="section__title-text">{{ props.title.title }}</span>
      </h2>
    </div>
    <Timeline />
  </section>
</template>
<script setup lang="tsx">
import Timeline from '~/components/Timeline/Timeline.vue';
import { MenuItem } from '~/components/Menu/menu-data';
const props = defineProps<{
  title: MenuItem 
}>();
</script>
<style lang="scss" scoped>

</style>