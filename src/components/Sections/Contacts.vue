<template>
  <section class="section section_numbered section" :id="props.title.id">
    <div class="section__title-wrapper animation animation_opacity animation_drop start" v-appear-transition>
      <h2 class="section__title">
        <span class="section__title-text">{{ props.title.title }}</span>
      </h2>
    </div>
    <p class="section__paragraph section__paragraph_center contacts__text-1 animation animation_opacity animation_rise start" v-appear-transition>
      {{ $t('contacts.text-1') }}
    </p>
    <a
      class="mail-link animation animation_opacity animation_drop start" v-appear-transition
      target="_blank"
      :href="contacts.email.link"
    >
      {{ $t('contacts.mail-link') }}
    </a>
    <Map :positions="positions" :toggleMap="toggleMap"/>
    <p class="tip-message" v-show="!geoPermission">
      <a class="link contacts__tip-message-link" href="https://browserhow.com/how-to-enable-disable-geolocation-access-in-google-chrome/">
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
import { Position, MapPositions } from '~/Types';
import { computed, ref, onBeforeMount } from 'vue';
import handleGeolocation from '~/helpers/geolocation';


const props = defineProps<{
  title: MenuItem 
}>();

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};

const myPosition: Position = [55.991892, 37.214385];
const userPosition = ref<Position>([0,0]);
const positions = computed({
  get():MapPositions {
    return {
      myPosition: myPosition,
      userPosition: userPosition.value,
    }
  },
  set(newVal: MapPositions) {
    userPosition.value = newVal.userPosition
  }
});
const geoPermission = ref(false);
const toggleMap = ref(false);

onBeforeMount(async () => {
  await handleGeolocation()
    .then(geoSuccessCallback)
    .catch(geoErrorCallback)
    .finally(() => toggleMap.value = true);
});


const geoSuccessCallback = (data: GeolocationPosition | GeolocationPositionError) => {
  if ('coords' in data) {
    positions.value = {
      myPosition: myPosition,
      userPosition: [data.coords.latitude, data.coords.longitude]
    }
    geoPermission.value = true;
  }
};
const geoErrorCallback = (error: GeolocationPositionError) => geoPermission.value = false;


</script>
<style lang="scss" scoped>
.section{
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
      0%, 33% {
        content: '🌎 ';
      }
      34%, 66% {
        content: '🌍 ';
      }
      67%, 100% {
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
    #map {
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
    #map {
      max-height: 500px;
    }
  }
}
</style>