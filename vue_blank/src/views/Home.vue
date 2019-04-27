<template>

  <div>
    <h2>Home</h2>
    <ul class="nav nav-tabs">
      <li><router-link to="/home/news">news</router-link></li>
      <li><router-link to="/home/message">message</router-link></li>
    </ul>
    <div>
      <ul>
        <router-view></router-view>
      </ul>
    </div>
  </div>



</template>
<script>
  export default {

  }
</script>
<style>

</style>
