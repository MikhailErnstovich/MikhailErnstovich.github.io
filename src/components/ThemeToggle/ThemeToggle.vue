<template>
  <el-switch
    v-model="isDark"
    inline-prompt
    :active-icon="Check"
    :inactive-icon="Close"
    class="theme-toggle"
  />
</template>

<script lang="tsx" setup>
import { Check, Close } from '@element-plus/icons-vue';
import { useDark } from "@vueuse/core";
const isDark = useDark();

</script>

<style lang="scss">
  .theme-toggle {
    width: 60px;
  }
</style>