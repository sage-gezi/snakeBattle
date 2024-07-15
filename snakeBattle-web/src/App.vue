<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>
<script setup>
import NavBar from './components/NavBar.vue';
</script>
<style>
body {
  background-color: darkgrey;
}
</style>
