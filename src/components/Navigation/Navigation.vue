<template>
  <header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
    >
      <el-menu-item index="0">LOGO</el-menu-item>
      <el-menu-item index="1">About</el-menu-item>
      <el-menu-item index="2">Experience</el-menu-item>
      <el-menu-item index="3">Work</el-menu-item>
      <el-menu-item index="4">Processing Center</el-menu-item>
    </el-menu>
  </header>
</template>

<script lang="tsx" setup>
import { ref } from 'vue';

const activeIndex = ref('1');
</script>

<style lang="scss">

</style>