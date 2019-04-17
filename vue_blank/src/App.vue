<template>
  <div class="todo-container">
    <div class="todo-wrap">
<!--   传递函数属性   -->
<!--      <TodoHeader :addTodo="addTodo"/>-->
<!--      自定义事件方式1 -->
<!--      <TodoHeader @addTodo="addTodo"/>-->
<!--      自定义事件方式二-->
      <TodoHeader ref="header"/>
      <TodoList :todos="todos" :delTodo="delTodo"/>
      <todo-footer :todos="todos" :selectAllTodos="selectAllTodos" :deleteCompleteTodos="deleteCompleteTodos"/>
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
      todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },
  mounted(){
    this.$refs.header.$on('addTodo',this.addTodo)
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        //value 是todos最新的值
        window.localStorage.setItem('todos_key',JSON.stringify(value))
      }
    }
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    delTodo(index){
      this.todos.splice(index,1)
    },
    deleteCompleteTodos(){
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAllTodos(complete){
      this.todos.filter(todo => todo.complete = complete)
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
