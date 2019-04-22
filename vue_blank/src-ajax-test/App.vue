    <template>
      <div>
        <div v-if="!repName">loading</div>
        <div v-else>hahahaha <a :href="repUrl">{{repName}}</a></div>
      </div>
    </template>
    <script>
      import axios from 'axios'
      export default{
        data(){
          return {
            repUrl:'',
            repName:''
          }
        },
        mounted(){
          // const url = `https://api.github.com/search/repositories?q=v&sort=stars`

          // this.$http.get(url).then(response => {
          //   const result = response.data
          //   const mostRepo = result.items[0]
          //   this.repUrl = mostRepo.html_url
          //   this.repName = mostRepo.name
          //
          // },response => {
          //   alert(response)
          // })

          //vue-resource post请求
          // const url = `http://localhost/index.php`
          // const data = {}
          // this.$http.post(url,data,{emulateJSON:true}).then(response => {
          //   const result = response.data
          //   this.repUrl = result.status
          //   this.repName = result.msg
          // },response => {
          //   alert('请求失败123')
          // })
        
          //axios get
          // const url = `http://localhost1/index.php`
          // axios.get(url).then(response => {
          //   const result = response.data
          //   this.repUrl = result.status
          //   this.repName = result.msg
          // }).catch(error => {
          //   console.log(error.message)
          // })
          const url = `http://localhost/index.php`
          const config = {
            header:{
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
          axios.post(url,{
            firstName: 'Fred',
            lastName: 'Flintstone'
          },config).then(response => {
            const result = response.data
            // console.log(result.status)

            this.repUrl = result.status
            this.repName = result.msg
          }).catch(error => {
            console.log(error.message)
          })
          
        }
      }
    </script>
    <style>

    </style>
