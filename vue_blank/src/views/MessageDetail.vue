<template>
  <div>
    {{$route.params.id}}
    <ul>
      <li>id:{{messageDetail.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        messageDetail:{}
      }
    },
    mounted(){
      setTimeout(()=>{
        const allMessageDetail = [
          {
            id:1,
            title:'message001',
            content:'message001 content'
          },
          {
            id:2,
            title:'message002',
            content:'message002 content'
          },
          {
            id:3,
            title:'message003',
            content:'message003 content'
          }
        ]
        this.allMessageDetail = allMessageDetail
        const id = this.$route.params.id*1
        this.messageDetail = allMessageDetail.find(detail => detail.id === id)
      },1000)
    },
    watch:{
      $route(value){
        const id = value.params.id*1
        this.messageDetail = this.allMessageDetail.find(detail => detail.id === id)
      }
    }
  }
</script>
<style>

</style>
