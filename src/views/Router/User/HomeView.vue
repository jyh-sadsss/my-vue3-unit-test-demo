<template>
  <div>
    <p>欢迎进入我的世界，dererer~~~</p>
    <RouterLink
      :to="{
        name: 'user-detail',
        params: {
          userId
        },
        query: { userName }
      }"
      >点击进入用户详情>></RouterLink
    >
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps<{userId: string}>()
const userId = props.userId

// const userId = ref<string>(route.params.userId)
const userName = ref<string>(route.query.userName)
</script>
