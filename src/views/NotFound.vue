<template>
  <div class="not-found">
    <img src="https://images.wosaimg.com/e8/205004cc17812f0b30307be69a9b5c4716e0c0.png" alt="" />
    <span>对不起，您访问的内容不存在</span>
    <div>
      <button class="back-home" @click="backHome">返回到首页</button>
      <button class="back-home" @click="goBack">返回到上一页</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function backHome() {
  router.push('/home')
}

function goBack() {
  router.go(-1) // router.back()
}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.not-found img {
  width: 300px;
  margin-bottom: 30px;
}

.back-home {
  border: 1px solid #f08300;
  background-color: #fff;
  color: #f08300;
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-right: 50px;
}

.go-back {
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>
