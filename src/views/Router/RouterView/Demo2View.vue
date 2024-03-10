<template>
  <div class="container">我是demo2View的数据，标题是{{ title }}</div>
</template>
<script setup lang="ts">
const props = defineProps<{ title: string }>()
const title = props.title
</script>
<style scoped></style>
