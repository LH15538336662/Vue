(function(){
   const myPlugin = {}
   myPlugin.install = (Vue,options) => {
       //添加全局方法
       Vue.myGlobalMethod = () => {
           console.log('Vue函数对象的方法myGlobalMethod()')
       }
       //添加全局资源
       Vue.directive('my-directive',(el,binding) => {
           el.innerHTML = binding.value.toUpperCase()
       })
       
       //添加实例方法
       Vue.prototype.$myMethod = () => {
           console.log('Vue实例对象的方法$myMethod()')
       }
       
   }

    //向外暴露
    window.myPlugin = myPlugin
})()