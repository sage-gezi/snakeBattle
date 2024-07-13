<script setup>
import axios from 'axios';
import { ref } from 'vue'
const test = ref('')
axios.get('http://localhost:8089/pk/').then((res)=>{
  test.value=res.data
})
</script>

<template>
测试链接：{{ test }}
</template>

<style scoped>

</style>
