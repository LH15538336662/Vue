<template>
  <div class="todo-container">
    <div class="todo-wrap">
<!--   传递函数属性   -->
<!--      <TodoHeader :addTodo="addTodo"/>-->
<!--      自定义事件方式1 -->
<!--      <TodoHeader @addTodo="addTodo"/>-->
<!--      自定义事件方式二-->
      <TodoHeader ref="header"/>
<!--      <TodoList :todos="todos" :delTodo="delTodo"/>-->
<!--      消息订阅与发布-->
      <TodoList :todos="todos"/>
<!--      <todo-footer :todos="todos" :selectAllTodos="selectAllTodos" :deleteCompleteTodos="deleteCompleteTodos"/>-->
      <todo-footer>
        <input type="checkbox" v-model="isAllSelect" slot="isAllSelect"/>
        <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>
<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import PubSub from 'pubsub-js'

import storageUtil from './util/storageUtil'

export default {
  data(){
    return {
      todos:storageUtil.readTodos()
    }
  },
  computed:{
    completeSize(){
      return this.todos.reduce((preTotal,todo) => preTotal + (todo.complete?1:0),0)
    },
    isAllSelect:{
      get(){
        return this.completeSize === this.todos.length && this.todos.length > 0
      },
      set(value){
        this.selectAllTodos(value)
      }
    }
  },
  mounted(){
    this.$refs.header.$on('addTodo',this.addTodo)
    PubSub.subscribe('delTodo',(msg,index) => {
      this.delTodo(index)
    })

  },
  watch:{
    todos:{
      deep:true,
      // handler(value){
      //   //value 是todos最新的值
      //   // window.localStorage.setItem('todos_key',JSON.stringify(value))
      //   storageUtil.saveTodos(value)
      // }
      handler:storageUtil.saveTodos
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
