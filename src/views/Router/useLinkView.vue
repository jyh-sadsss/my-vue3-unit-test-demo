<template>
  <div>点击下面的链接跳转到首页</div>
</template>
<script setup lang="ts">
import { useLink } from 'vue-router'
const props = defineProps<{}>()
const link = useLink({
  to: "/"
}) // useLink(to, activeClass, extraActvieClass)
console.log(link.route)
</script>
