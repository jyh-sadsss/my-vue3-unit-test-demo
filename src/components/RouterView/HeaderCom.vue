<template>
  <div class="header">
    <p>底部文案：江小白，props id: {{ id }} is: {{ is }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ id: string; viewProp: { is: string } }>()
console.log('header props', props) // 这里的props是各个方法设置的props总和
const is = props.viewProp.is
const id = props.id
</script>
<style scoped>
.header {
  font-size: 18px;
  font-weight: 500;
  height: 64px;
}
</style>
