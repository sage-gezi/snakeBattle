<template>
  <div ref="parent" class="gamemap">
    <canvas ref="canvas" tabindex="0"></canvas>
  </div>
</template>

<script setup>
import { GameMap } from '../assets/scripts/GameMap';
import { ref, onMounted } from 'vue';
let parent = ref(null);
let canvas = ref(null);

onMounted(() => {
  new GameMap(canvas.value.getContext('2d'), parent.value);
});
</script>

<style scoped>
div.gamemap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
