<template>
  <div class="menu-demo">
    <a-menu mode="horizontal" theme="dark" :default-selected-keys="['1']">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div
          :style="{
            width: '80px',
            height: '30px',
            background: 'var(--color-fill-3)',
            cursor: 'text'
          }"
        />
      </a-menu-item>
      <a-menu-item key="1">对战</a-menu-item>
      <a-menu-item key="2">对局列表</a-menu-item>
      <a-menu-item key="3">排行榜</a-menu-item>
      <a-sub-menu key="0">
        <template #title>wxl</template>
        <a-menu-item key="0_0">我的Bot</a-menu-item>
        <a-menu-item key="0_1">退出登陆</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script setup></script>
<style scoped></style>
