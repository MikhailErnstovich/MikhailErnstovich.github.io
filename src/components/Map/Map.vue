<template>
  <div id="map-wrapper" @click="mapHandler" ref="wrapper">
    <YMap :location="location" :margin="[32, 32, 32, 32]" id="map" v-if="toggleMap && scriptLoaded">
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapMarker :coordinates="positions.myPosition" :draggable="false">
        <div class="marker">
          <span>Mikhail M</span>
        </div>
      </YMapMarker>
      <YMapMarker :coordinates="positions.userPosition" :draggable="false"
        v-if="positions.userPosition[0] || positions.userPosition[1]">
        <div class="marker">
          <span>You</span>
        </div>
      </YMapMarker>
    </YMap>
    <a id="map-toggle"
      @click="() => handleGeoPermission(geoSuccessCallback, geoErrorCallback).then(() => $emit('geoPermission', geoPermission))"
      v-else>Show map</a>
  </div>
</template>
<script setup lang="tsx">
import { insertMap } from '~/helpers/lazy-loaders';
import { Component, computed, ref, shallowRef, watch } from 'vue';
import { YMapLocationRequest, LngLatBounds } from '@yandex/ymaps3-types';
import { Position, MapPositions } from '~/types';
import handleGeolocation from '~/helpers/geolocation';

const toggleMap = ref(false);
const mapHandler = (e: MouseEvent) => {
  if (!toggleMap.value) {
    toggleMap.value = true;
    insertMap(e.currentTarget as HTMLElement, createMap)
  }
}
const bounds = ref<LngLatBounds>([[0, 0], [0, 0]]);
const location = computed<YMapLocationRequest>(() => ({
  duration: 2000,
  easing: 'ease-in-out',
  bounds: bounds.value
}));
const myPosition: Position = [37.214385, 55.991892];
const userPosition = ref<Position>([0, 0]);
const positions = computed({
  get(): MapPositions {
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
const handleGeoPermission = (
  geoSuccessCallback: (data: GeolocationPosition | GeolocationPositionError) => void,
  geoErrorCallback: (error: GeolocationPositionError) => void
): Promise<void> => {
  return handleGeolocation()
    .then(geoSuccessCallback)
    .catch(geoErrorCallback)
}

const geoSuccessCallback = (data: GeolocationPosition | GeolocationPositionError) => {
  if ('coords' in data) {
    positions.value = {
      myPosition: myPosition,
      userPosition: [data.coords.longitude, data.coords.latitude]
    }
    geoPermission.value = true;
  }
};
const geoErrorCallback = (error: GeolocationPositionError) => {
  geoPermission.value = false;
}

const scriptLoaded = ref<boolean>(false);
const componentsLoaded = ref(false);
const YMap = shallowRef<Component | null>(null);
const YMapDefaultSchemeLayer = shallowRef<Component | null>(null);
const YMapDefaultFeaturesLayer = shallowRef<Component | null>(null);
const YMapMarker = shallowRef<Component | null>(null);
const YMapFeature = shallowRef<Component | null>(null);

const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}
const createMap = async (): Promise<void> => {
  let link = '';
  await fetch('/config.json')
    .then(res => res.json())
    .then(d => link = `https://api-maps.yandex.ru/v3/?apikey=${d.mapApiKey}&lang=en_US`);
  await loadScript(link);
  scriptLoaded.value = true;
  const module = await import("~/lib/ymaps");
  YMap.value = module.YMap;
  YMapDefaultSchemeLayer.value = module.YMapDefaultSchemeLayer;
  YMapDefaultFeaturesLayer.value = module.YMapDefaultFeaturesLayer;
  YMapMarker.value = module.YMapMarker;
  YMapFeature.value = module.YMapFeature;
  componentsLoaded.value = true;
  bounds.value = getBounds(positions.value.myPosition, positions.value.userPosition);
}

watch(() => userPosition.value, () => {
  bounds.value = getBounds(positions.value.myPosition, positions.value.userPosition);
});

const getBounds = (myPosition: [lng: number, lat: number], userPosition: [lng: number, lat: number]): LngLatBounds => {
  if (!userPosition[0] && !userPosition[1]) {
    return [
      [myPosition[0] - 2, myPosition[1] - 2],
      [myPosition[0] + 2, myPosition[1] + 2],
    ]
  }
  let minLat = Infinity,
    minLng = Infinity;
  let maxLat = -Infinity,
    maxLng = -Infinity;

  if (myPosition[0] <= userPosition[0]) {
    minLng = myPosition[0];
    maxLng = userPosition[0];
  } else {
    minLng = userPosition[0];
    maxLng = myPosition[0];
  }

  if (myPosition[1] <= userPosition[1]) {
    minLat = myPosition[1];
    maxLat = userPosition[1];
  } else {
    minLat = userPosition[1];
    maxLat = myPosition[1]
  }
  return [
    [minLng, minLat],
    [maxLng, maxLat]
  ] as LngLatBounds;
}
</script>
<style lang="scss" scoped>
#map-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1 / 1;

  #map {
    width: 100%;
    height: 100%;
  }

  @include md-screen {
    aspect-ratio: 16 / 9;
  }

  #map-toggle {
    display: flex;
    flex-direction: row;
    width: max-content;
    padding: clamp(1rem, 0.939rem + 0.259vw, 1.25rem) clamp(1.5rem, 1.379rem + 0.518vw, 2rem);
    border-radius: 100px;
    background-color: var(--bays-1);
    font-size: clamp(0.875rem, 0.814rem + 0.259vw, 1.125rem);
    line-height: clamp(1.25rem, 1.068rem + 0.777vw, 2rem);
    text-transform: uppercase;
    color: #ffffff;
    transition: background-color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    user-select: none;

    &:hover,
    &:focus {
      background-color: var(--primary-color);
    }

    &:active {
      background-color: var(--bays-3);
    }
  }

  .marker {
    position: relative;
    border: 1px solid black;
    width: max-content;
    min-width: calc(48px);
    font-size: 20px;
    line-height: 24px;
    padding: 6px 12px;
    border-radius: 20px;
    transform: translateY(-36px) translateX(-36px);
    background-color: var(--bays-1);
    color: #ffffff;
    font-family: var(--font-light);
    text-align: center;

    &::after {
      content: '';
      position: absolute;
      display: block;
      top: 36px;
      left: 16px;
      width: 0;
      border-top: 16px solid var(--bays-1);
      border-right: 16px solid transparent;
      border-left: 16px solid transparent;
      transform: scaleX(0.75) translateX(-8px);
    }
  }
}
</style>