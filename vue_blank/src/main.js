import Vue from 'vue'
import App from './App'

//注册配置路由器
import router from './router/index'

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  router
})
