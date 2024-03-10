<template>
  <div class="default-content">我是Demo1View的内容，至尊闪耀, id:{{ id }}</div>
</template>
<script setup lang="ts">
const props = defineProps<{id: string}>()
const id = props.id
</script>
<style scoped>
.default-content {
  background-color: #7db0ce;
  color: #fff;
}
</style>
