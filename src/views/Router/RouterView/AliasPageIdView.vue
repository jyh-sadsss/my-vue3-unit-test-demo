<template>
    <div>
      路由别名 alias pageId是{{ pageId }}
    </div>
    <RouterLink to="/alias/2">别名2（测试onBeforeRouteUpdate）</RouterLink>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute, onBeforeRouteUpdate, RouterLink } from 'vue-router'

const route = useRoute()

onBeforeRouteUpdate((to, from)=>{
  console.log('alias pageId 监听到路由变化', to.params.pageId) // 当前页面还是跳转到当前页面，只有params、query、hash变化时会触发
})

const pageId = ref<string>(route.params.pageId)
</script>
