<template>
  <footer class="footer">
    <SocialMedia />
    <Authorship
      v-appear-transition
      class="animation animation_opacity animation_rise start"
    />
  </footer>
</template>
<script setup lang="tsx">
import SocialMedia from '~/components/SocialMedia/SocialMedia.vue';
import Authorship from '~/components/Authorship/Authorship.vue';
import { appearAnimation } from '~/helpers/appear-animation';

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};
</script>
<style lang="scss" scoped>
.footer {
  padding: 0 var(--s-sm);
  .social-media {
    margin: 0 auto;
  }
}
</style>
