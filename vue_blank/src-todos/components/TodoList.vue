<template>
  <ul class="todo-main">
<!--    <TodoItem v-for="(todo,index) in todos" :key="index" :index="index" :todo="todo" :delTodo="delTodo"/>-->
<!--    消息订阅与发布-->
    <TodoItem v-for="(todo,index) in todos" :key="index" :index="index" :todo="todo" :delTodo="delTodo"/>
  </ul>
</template>
<script>
import TodoItem from './TodoItem'
export default {
  props:{
    todos: Array,
    // delTodo: Function
  },
  components:{
    TodoItem
  }
}
</script>
<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
