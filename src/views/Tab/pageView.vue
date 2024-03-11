<template>
  <div class="container" :style="{backgroundColor}">
    {{ title }}
  </div>
</template>
<script setup lang="ts">
const { backgroundColor, title } = defineProps<{
  backgroundColor: string
  title: string
}>()
</script>
<style scoped>
.container {
  width: 100%;
  height: 500px;
}
</style>
