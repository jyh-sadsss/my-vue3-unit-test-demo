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
import { useRouter, NavigationFailureType, isNavigationFailure } from 'vue-router'
const router = useRouter()

async function backHome() {
  // 找到没有正确导航的原因，并提示出来
  const failure = await router.push('/home') // router.push是个异步函数，如果想等待路由跳转结束后执行一些操作，需要在 await router.push()
  if(isNavigationFailure(failure, NavigationFailureType.aborted)) { // 如果不传第二个参数，那么就只会检查failure是不是一个navigation Failure
    // 导航被阻止
    /**
     * NavigationFailureType 有3种不同的类型
     * aborted: 在导航守卫中返回false中断了本次导航
     * cancelled: 在当前导航完成之前又有了一个新的导航（在等待导航守卫的过程中又调用了router.push）
     * duplicated: 导航被阻止（已经在目标位置）
     */
     console.log(failure.to.path) // 失败导航的当前位置
     console.log(failure.from.path) // 失败导航的目标位置

     router.currentRoute.value.redirectedFrom // 上一次导航的目标位置
     /**
      * 当在导航守卫中返回一个新的位置时，会触发一个新的导航，覆盖正在进行的导航，重定向不会阻止导航，而是创建一个新的导航
      * 
      */
     
  }else {
    // 导航成功（包括重新导航的情况）后执行一些操作
  }
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
