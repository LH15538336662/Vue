<template>
  <div class="container">
    <Search/>
    <user-main></user-main>

  </div>
</template>
<script>
  import Search from './components/Search'
  import Main from './components/Main'
  export default{
    components:{
      Search,
      userMain:Main
    }
  }
</script>
<style>


</style>
