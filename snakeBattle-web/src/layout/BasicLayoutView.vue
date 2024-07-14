<template>
  <a-layout style="height: 300px">
    <a-layout-header><NavBar /></a-layout-header>
    <a-layout>
      <a-layout-sider style="width: 10%">Sider</a-layout-sider>
      <a-layout-content class="content"><RouterView /></a-layout-content>
      <a-layout-sider style="width: 10%">Sider</a-layout-sider>
    </a-layout>
    <a-layout-footer class="footer">Footer</a-layout-footer>
  </a-layout>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from '../components/NavBar.vue'
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 10px;
}
</style>
