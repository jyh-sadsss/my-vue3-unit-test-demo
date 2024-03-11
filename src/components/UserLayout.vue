<template>
  <div>
    <p>用户名: {{ user.userName }}</p>
    <p>用户id: {{ user.userId }}</p>
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { watch, reactive } from 'vue'
import { useRoute, RouterView } from 'vue-router'
const route = useRoute()

const user = reactive<{
  userName: string
  userId: string
}>({
  userName: '',
  userId: ''
})
watch( // watch 初始是不执行的，只有在路由变化之后才执行，如果立即执行，设置immediate
// route整个对象都是响应式的，任何属性都是可以被监听的，但是我们最好不要监听整个的route
  () => ({
    userName: route.query.userName,
    userId: route.params.userId
  }),
  ({ userName, userId }) => {
    user.userName = userName
    user.userId = userId
  },
  { immediate: true }
)
</script>
