<template>
  <section class="section section_numbered" :id="props.title.id" v-invoke-transition :data-is-visible="''" ref="root">
    <CustomTransition :appear="false" :name="'drop'" :toggle="toggle">
      <div class="section__title-wrapper">
        <h2 class="section__title">
          <span class="section__title-text">{{ props.title.title }}</span>
        </h2>
      </div>
    </CustomTransition>
    <CustomTransition :appear="false" :name="'drop'" :toggle="toggle">
      <p class="section__paragraph">
        My name is Mikhail Makarov. I started my way in the field of web development in early 2020.
        While on quarantine, I decided to try myself in another area and went
        through the <a class="link" href="https://www.coursera.org/account/accomplishments/specialization/KKPTF2MJ95M8">HTML, CSS and JS course by JSC Yandex and MIPT</a>. 
        That resulted in my new hobby and changing my career direction from <a class="link" href="https://www.youtube.com/watch?v=gsTl2qkWnp0">silicon photonics</a> to web development.
        Today I work remotely as a frontend developer in <a class="link" href="https://flat-soft.ru/">FlatSoftware</a>.
      </p>
    </CustomTransition>
    <CustomTransition :appear="false" :name="'drop'" :toggle="toggle">
      <Photo />
    </CustomTransition>
    <CustomTransition :appear="false" :name="'drop'" :toggle="toggle">
      <p class="section__paragraph">
        There are some key technologies below I have been working with up to date:
      </p>
    </CustomTransition>
    <Skills />
  </section>
</template>
<script setup lang="tsx">
import { ref, onMounted, Ref } from 'vue';
import Skills from '~/components/Skills/Skills.vue';
import Photo from '~/components/Photo/Photo.vue';
import { MenuItem } from '~/components/Menu/menu-data';
import { showElement } from '~/helpers/appear-animation';
import CustomTransition from '~/components/Transitions/CustomTransition.vue';
import { handleAppearAnimation } from '~/helpers/appear-animation';
const props = defineProps<{
  title: MenuItem
}>();
const vInvokeTransition = {
  mounted: showElement
};
const toggle = ref(false);
const root = ref<Node>();
onMounted(() => handleAppearAnimation(root as Ref<Node>, toggle));
</script>
<style lang="scss">

</style>