<template>
  <article class="theme-toggle">
    <el-switch
      class="theme-toggle__switch"
      v-model="isDark"
      size="large"
      inline-prompt
    />
  </article>
</template>

<script lang="tsx" setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>

<style lang="scss">
.theme-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  &__switch {
    --el-switch-on-color: var(--blank);
    --el-switch-off-color: var(--dark);
  }

  .el-switch.is-checked .el-switch__action {
    background-color: var(--dark);
    border: 1px solid var(--blank);
    &::before {
      content:url("data:image/svg+xml,%3Csvg xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' width='16' height='16'%3E%3Cpath fill='%23F1F1F1' d='M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z' class='colorcurrentColor svgShape'%3E%3C/path%3E%3C/svg%3E");
      display: block;
      position: relative;
      top: 3px;
    }
  }
  .el-switch .el-switch__action {
    background-color: var(--blank);
    border: 1px solid var(--dark);
    &::before {
      content: url("data:image/svg+xml,%3Csvg xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' data-v-029747aa='' width='16' height='16'%3E%3Cpath fill='currentColor' d='M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z'%3E%3C/path%3E%3C/svg%3E");
      display: block;
      position: relative;
      top: 3px;
      right: 1px
    }
  }
  .el-switch .el-switch__core {
    border-color: var(--dark);
  }
  .el-switch.is-checked .el-switch__core {
    border-color: var(--blank);
  }
}
</style>