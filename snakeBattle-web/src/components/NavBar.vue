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
      <a-menu-item key="1"
        ><router-link :to="{ name: 'pk_index_view' }">对战</router-link></a-menu-item
      >
      <a-menu-item key="2"
        ><router-link :to="{ name: 'record_index_view' }">对局列表</router-link></a-menu-item
      >
      <a-menu-item key="3"
        ><router-link :to="{ name: 'ranklist_index_view' }">排行榜</router-link></a-menu-item
      >
      <a-sub-menu key="0">
        <template #title>wxl</template>
        <a-menu-item key="0_0"
          ><router-link :to="{ name: 'bot_index_view' }">我的Bot</router-link></a-menu-item
        >
        <a-menu-item key="0_1">退出登陆</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script setup></script>
<style scoped></style>
