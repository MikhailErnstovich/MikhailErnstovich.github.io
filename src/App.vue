<template>
  <header>
    <div class="wrapper">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
      >
        <el-menu-item index="0">LOGO</el-menu-item>
        <el-menu-item index="1">
          <RouterLink to="/">About</RouterLink>
        </el-menu-item>
        <el-menu-item index="2">Experience</el-menu-item>
        <el-menu-item index="3">Work</el-menu-item>
        <el-menu-item index="4">Processing Center</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue'

const activeIndex = ref('1')
</script>

<style>

</style>
