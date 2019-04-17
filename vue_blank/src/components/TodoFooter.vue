<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllSelect"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click="deleteCompleteTodos">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  props:{
    todos:Array,
    selectAllTodos:Function,
    deleteCompleteTodos:Function
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
  }
}
</script>
<style>

</style>
