<template>
    <div class="content">
        contentView部分
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// router.replace(router.currentRoute.value.fullPath)
// 上面这段代码，可以确保在页面初始化时，即使路由尚未完全初始化或者新增的路由未添加成功，也能够在后续路由变化上正确地导航到目标路由上
</script>
<style scoped>
.content {
    color:cadetblue;
}
</style>