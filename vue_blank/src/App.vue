<template>
  <div>
    <!--路由链接-->
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link>
    <!--用于渲染当前路由组件-->
    <keep-alive>
      <router-view msg="abc"></router-view>
    </keep-alive>

  </div>
</template>
<script>
  export default {

  }
</script>
<style>

</style>
