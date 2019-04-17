<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :delTodo="delTodo"/>
      <todo-footer/>
    </div>
  </div>
</template>
<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
export default {
  data(){
    return {
      todos:[
        {title:'睡觉',complete:false},
        {title:'吃饭',complete:true},
        {title:'coding',complete:false}
      ]
    }
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    delTodo(index){
      this.todos.splice(index,1)
    }
  },
  components:{
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
