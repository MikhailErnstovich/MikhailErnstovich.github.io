<template>
  <section class="section section_numbered section" :id="props.title.id">
    <div class="section__title-wrapper animation animation_opacity animation_drop start" v-appear-transition>
      <h2 class="section__title">
        <span class="section__title-text">{{ props.title.title }}</span>
      </h2>
    </div>
    <p class="section__paragraph section__paragraph_center animation animation_opacity animation_rise start" v-appear-transition>
      I am open to job offers (especially with relocation) and freelance work. However, feel free to contact me if you have any other questions. I'll try my best to answer you as soon as possible.
    </p>
    <a
      class="mail-link animation animation_opacity animation_drop start" v-appear-transition
      target="_blank"
      :href="contacts.email.link"
    >
      Send message
    </a>
    <Map :positions="positions"/>
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
import { computed, onBeforeMount, onMounted, ref, reactive } from 'vue';
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

onBeforeMount(async () => {
  handleGeolocation(geoSuccessCallback, geoErrorCallback);
});
const geoSuccessCallback = (data: GeolocationPosition) => {
  positions.value = {
    myPosition: myPosition,
    userPosition: [data.coords.latitude, data.coords.longitude]
  }
};
const geoErrorCallback = (error: GeolocationPositionError) => console.log(error);


</script>
<style lang="scss" scoped>
.section{
  @include md-screen {
    @include md-grid;
    &__title-wrapper {
      grid-column: 1 / 13;
      grid-row: 1 / 2;
    }
    #map {
      grid-column: 1 / 8;
      grid-row: 2 / 16;
    }
    &__paragraph {
      grid-column: 9 / 13;
      grid-row: 2 / 3;
    }
    &__paragraph.section__paragraph_center {
      text-align: left;
    }
    .mail-link {
      grid-column: 9 / 10;
      grid-row-start: 3;
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