<template>
  <section class="section section_numbered" :id="props.title.id" v-invoke-transition :data-is-visible="''" ref="about">
    <CustomTransition :appear="false" :name="'drop'" :toggle="isVisible">
      <div class="section__title-wrapper">
        <h2 class="section__title">
          <span class="section__title-text">{{ props.title.title }}</span>
        </h2>
      </div>
    </CustomTransition>
    <CustomTransition :appear="false" :name="'drop'" :toggle="isVisible">
      <p class="section__paragraph">
        My name is Mikhail Makarov. I started my way in the field of web development in early 2020.
        While on quarantine, I decided to try myself in another area and went
        through the <a class="link" href="https://www.coursera.org/account/accomplishments/specialization/KKPTF2MJ95M8">HTML, CSS and JS course by JSC Yandex and MIPT</a>. 
        That resulted in my new hobby and changing my career direction from <a class="link" href="https://www.youtube.com/watch?v=gsTl2qkWnp0">silicon photonics</a> to web development.
        Today I work remotely as a frontend developer in <a class="link" href="https://flat-soft.ru/">FlatSoftware</a>.
      </p>
    </CustomTransition>
    <CustomTransition :appear="false" :name="'drop'" :toggle="isVisible">
      <Photo />
    </CustomTransition>
    <CustomTransition :appear="false" :name="'drop'" :toggle="isVisible">
      <p class="section__paragraph">
        There are some key technologies below I have been working with up to date:
      </p>
    </CustomTransition>
    <Skills />
  </section>
</template>
<script setup lang="tsx">
import { ref, onMounted, watchEffect } from 'vue';
import Skills from '~/components/Skills/Skills.vue';
import Photo from '~/components/Photo/Photo.vue';
import { MenuItem } from '~/components/Menu/menu-data';
import { showElement } from '~/helpers/lazy-loaders';
import CustomTransition from '~/components/Transitions/CustomTransition.vue';
const props = defineProps<{
  title: MenuItem,

}>();
const vInvokeTransition = {
  mounted: showElement
};
const isVisible = ref(false);
const makeVisible: MutationCallback = (mutationList, observer: MutationObserver) => {
  isVisible.value = true;
  observer.disconnect();
}
const about = ref<Node>();
onMounted(() => {
  if (about.value instanceof Node) {
    const observer = new MutationObserver(makeVisible);
    observer.observe(about.value, { attributes: true });
  }
})
</script>
<style lang="scss">

</style>