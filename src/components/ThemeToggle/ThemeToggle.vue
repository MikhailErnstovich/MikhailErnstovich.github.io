<template>
  <article class="theme-toggle">
    <el-switch
      class="theme-toggle__switch"
      v-model="isDark"
      size="large"
      inline-prompt
      :active-icon="Sunny"
      :inactive-icon="Moon"
    />
  </article>
</template>

<script lang="tsx" setup>
import { useDark } from "@vueuse/core";
import { Sunny, Moon } from '@element-plus/icons-vue'
const isDark = useDark();
</script>

<style lang="scss">
.theme-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  .el-switch--large .el-switch__core {
    height: 26px;
    min-width: 54px;
    border-radius: 13px;

  }
  .el-switch .el-switch__action {
    background-color: #ffffff;
  }
  .el-switch .el-switch__core {
    border-width: 2px;
    border-color: var(--primary-color);
    background-color: var(--primary-color);
    .el-switch__inner {
      justify-content: flex-end;
      .el-icon {
        font-size: 16px;
      }
    }
  }
  .el-switch.is-checked .el-switch__core {
    border-color: var(--boulders-3);
    background-color: var(--boulders-3);
    .el-switch__inner {
      justify-content: flex-start;
    }
  }
}
</style>