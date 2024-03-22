<template>
  <div>
    <AppLink
      :to="{
        path: '/anchor',
        hash: '#content',
        query: {
          from: 'appLink'
        }
      }"
      exact
      activeClass="active"
      exactActiveClass="exact-active"
      inactive="inactive"
      >跳转到外部链接</AppLink
    >
  </div>
</template>
<script setup>
import AppLink from '../../../components/RouterView/AppLink.vue'
</script>
<style scoped>
.active {
  color: #f08300;
}

.exact-active {
  color: blue;
}

.inactive {
  color: #ddd;
}
</style>
