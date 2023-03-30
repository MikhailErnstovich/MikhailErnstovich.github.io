<template>
  <section class="section section_numbered" :id="props.title.id">
    <div class="section__title-wrapper">
      <h2 class="section__title">
        <span class="section__title-text">{{ props.title.title }}</span>
      </h2>
    </div>
    <p class="section__paragraph section__paragraph_center">
      I am open to job offers (especially with relocation) and freelance work. However, feel free to contact me if you have any other questions. I'll try my best to answer you as soon as possible.
    </p>
    <a
      class="mail-link" 
      target="_blank"
      :href="contacts.email.link"
    >
      Send message
    </a>
    <!-- <Map /> -->
  </section>
</template>
<script setup lang="tsx">
// import Map from '~/components/Map/Map.vue';
import { contacts } from '~/components/SocialMedia/social-media-data';
import { MenuItem } from '~/components/Menu/menu-data';
const props = defineProps<{
  title: MenuItem 
}>();
</script>
<style lang="scss" scoped>

</style>