<template>
  <div class="todo-footer">
    <label>
<!--      <input type="checkbox" v-model="isAllSelect"/>-->
      <slot name="isAllSelect"></slot>
    </label>
    <span>
<!--          <span>已完成{{completeSize}} / 全部{{todos.length}}</span>-->
      <slot name="count"></slot>
        </span>
<!--    <button class="btn btn-danger" @click="deleteCompleteTodos">清除已完成任务</button>-->
      <slot name="delete"></slot>
  </div>
</template>
<script>
export default {
  props:{
    todos:Array,
    selectAllTodos:Function,
    deleteCompleteTodos:Function
  },

}
</script>
<style>

</style>
