/*
使用localStorage存储数据的工具模块
是向外暴露函数，还是对象，要看 功能使用多少
*/
const TODOS_KEY = todos_key
export default {
  saveTodos(todos){
    window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
  },
  readTodos(){
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }

}


