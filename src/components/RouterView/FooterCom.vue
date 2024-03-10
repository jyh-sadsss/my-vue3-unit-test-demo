<template>
    <div class="footer">
        <p>-----------</p>
        <p>底部文案：明月青山</p>
    </div>
</template>
<script setup lang="ts">
// 这里获取不到id
const props = defineProps<{id: string}>()
console.log('footer props', props)
</script>
<style scoped>
.footer {
  font-size: 18px;
  font-weight: 500;
  height: 60px;
}
</style>