<template>
  <mt-button type="primary" @click.native="handleClick">test</mt-button>
</template>
<script>
  import {Toast} from 'mint-ui'
  export default {
    methods:{
      handleClick(){
        Toast('请求成功')
      }
    }
  }
</script>
<style>

</style>
