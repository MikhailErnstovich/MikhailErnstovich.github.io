<template>
  <section :id="props.title.id" class="section section_numbered section">
    <div
      v-appear-transition
      class="section__title-wrapper animation animation_opacity animation_drop start"
    >
      <h2 class="section__title">
        <span class="section__title-text">{{ props.title.title }}</span>
      </h2>
    </div>
    <p
      v-appear-transition
      class="section__paragraph section__paragraph_center contacts__text-1 animation animation_opacity animation_rise start"
    >
      {{ $t('contacts.text-1') }}
    </p>
    <a
      v-appear-transition
      class="mail-link animation animation_opacity animation_drop start"
      target="_blank"
      :href="contacts.email.link"
    >
      {{ $t('contacts.mail-link') }}
    </a>
    <Map @geo-permission="handleTip"></Map>
    <p v-show="!showTip" class="tip-message">
      <a
        class="link contacts__tip-message-link"
        href="https://browserhow.com/how-to-enable-disable-geolocation-access-in-google-chrome/"
      >
        {{ $t('contacts.tip-message-link') }}
      </a>
      <span class="contacts__tip-message-text">
        {{ $t('contacts.tip-message-text') }}
      </span>
    </p>
    <Timezones />
  </section>
</template>
<script setup lang="tsx">
import Map from '~/components/Map/Map.vue';
import { contacts } from '~/components/SocialMedia/social-media-data';
import { MenuItem } from '~/components/Menu/menu-data';
import { appearAnimation } from '~/helpers/appear-animation';
import Timezones from '~/components/Timezones/Timezones.vue';
import { ref } from 'vue';

const props = defineProps<{
  title: MenuItem;
}>();

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};

const showTip = ref(false);
const handleTip = (geoPermission: boolean) => (showTip.value = geoPermission);
</script>
<style lang="scss" scoped>
.section {
  position: relative;
  .tip-message {
    font-family: var(--font-light);
    font-size: 0.8em;
    margin-bottom: var(--s-xss);
    &::before {
      content: '🌎 ';
      animation-duration: 1.5s;
      animation-name: earth;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-timing-function: linear;
      // 🌎🌍🌏
    }
    @keyframes earth {
      0%,
      33% {
        content: '🌎 ';
      }
      34%,
      66% {
        content: '🌍 ';
      }
      67%,
      100% {
        content: '🌏 ';
      }
    }
  }

  @include md-screen {
    @include md-grid;
    &__title-wrapper {
      grid-column: 1 / 13;
      grid-row: 1 / 2;
    }
    #map-wrapper {
      grid-column: 1 / 13;
      grid-row: 3 / 4;
    }
    .tip-message {
      grid-column: 1 / 13;
      grid-row: 4 / 5;
      margin-bottom: 0;
    }
    .timezones {
      grid-column: 1 / 13;
      grid-row: 2 / 3;
    }
    &__paragraph {
      grid-column: 1 / 13;
      grid-row: 5 / 6;
      margin-top: var(--s-lg);
    }
    .mail-link {
      grid-column: 1 / 13;
      grid-row-start: 6;
      align-self: start;
    }
  }
  @include lg-screen {
    @include lg-grid;
    #map-wrapper {
      max-height: 500px;
    }
  }
}
</style>
