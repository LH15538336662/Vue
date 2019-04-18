<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addItem"/>
  </div>
</template>
<script>
export default {
  props:{
    // addTodo:Function //函数传递
  },
  data(){
    return {
      title:''
    }
  },
  methods:{
    addItem(){
      const title = this.title.trim()
      //1 检查数据的合法性
      if(!title){
        alert('title不能为空')
        return
      }
      //2 将数据封装成todo
      const todo = {title,complete:false}
      //3 将数据添加到todos里面
      // this.addTodo(todo)
      this.$emit('addTodo',todo)
      //清除输入
      this.title = ''
    }
  }
}
</script>
<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }

</style>
