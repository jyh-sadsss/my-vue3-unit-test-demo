<template>
    <div class="about">
      AboutView部分（/dynanamic/about路由不会展示这个组件，因为这个组件的name会被后面的添加的动态路由覆盖）
      <p>删除当前添加路由，再跳转到当前页面</p>
      <button @click="toUrl">跳转当前页面</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
router.removeRoute('useLink')

function toUrl() {
    // 删除要跳转的路由
    router.push('/useLink') // 跳转之后不展示UseLink组件了
}

</script>
<style scoped>
.about {
    color:chocolate;
}
</style>