import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

//声明式使用vue插件
Vue.use(VueResource)

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>'
})
