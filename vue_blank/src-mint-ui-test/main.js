import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'

//注册全局标签
Vue.component(Button.name,Button)

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>'

})
