<template>
  <div>
    <p>请输入账号密码</p>
    <form action="" @submit.prevent="login">
      <div>
        <label for="account">账号: </label>
        <input v-model="account" id="account" type="text" placeholder="请输入账号" />
      </div>
      <div>
        <label for="password">密码: </label>
        <input v-model="password" id="password" type="password" placeholder="请输入密码" />
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const account = ref<string>('')
const password = ref<string>('')
const timer = ref(10)
const isLoading = ref(false) // 是否正在加载异步组件

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false //加载完成
    startTimer()
  }, 2000)
})

function startTimer() {
  let timerId: ReturnType<typeof setInterval> | null = null
  timerId = setInterval(() => {
    timer.value--
  }, 1000)
  onUnmounted(() => {
    console.log('定时器被清除')
    clearInterval(timerId)
  })
}

function setData() {
  console.log('获得快乐')
}

function login() {
  console.log('account', account.value)
  console.log('password', password.value)
  if (account.value === 'admin' && password.value === '123456') {
    // 登录成功
    window.localStorage.setItem(
      'userInfo',
      JSON.stringify({ account: account.value, password: password.value })
    )
    router.push('/')
  }
}
</script>
