

<template>
    <div>
      <p>姓名: {{ userName }}</p>
      <p>id: {{ userId }}</p>
      <p>年龄: {{ age }}</p>
      <p>性别: {{ userSex }}</p>
    </div>
  </template>
  <script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    userName: string
    userId: string
    age: number
    sex: number
  }>()
  
  const userSex = computed(() => {
    return props.sex === 1 ? '男' : '女'
  })
  </script>
  