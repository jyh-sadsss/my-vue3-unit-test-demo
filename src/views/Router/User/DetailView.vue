<template>
  <div>
    <p>下面是我的详细信息</p>
    <DetailCom v-bind="userData" />
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import DetailCom from '../../../components/User/DetailCom.vue'

// vue3.3版本中没有defineProps

interface IProps {
  userId: string
  userName: string
}

interface UserData extends IProps {
  sex: number
  age: number
}

const props = withDefaults(defineProps<IProps>(), {
  userId: '',
  userName: ''
})

const userData = reactive<UserData>({
  ...props,
  sex: 1,
  age: 0
})
</script>
