<template>
  <div id="header" class="top">头部</div>
  <div id="content" class="content">内容</div>
  <div id="footer" class="footer">底部</div>
  <a href="#content">回到内容</a>
</template>
<script setup lang="ts"></script>
<style scoped>
div {
  width: 800px;
}
.top {
  height: 100px;
  background-color: aqua;
}

.content {
  height: 100vh;
  background-color: bisque;
}

.footer {
  height: 100px;
  background-color: chartreuse;
}

a {
    position: fixed;
    background-color: #f08300;
    color: #fff;
    font-weight: 500;
    text-align: center;
    z-index: 10;
    bottom: 20px;
    right: 0;
    box-shadow: 1px 1px 10px #000;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 12px;
    line-height: 58px;
}
</style>
