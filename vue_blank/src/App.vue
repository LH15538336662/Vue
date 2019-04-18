    <template>
      <div>
        <div v-if="!repName">loading</div>
        <div v-else>hahahaha <a :href="repUrl">{{repName}}</a></div>
      </div>
    </template>
    <script>
      export default{
        data(){
          return {
            repUrl:'',
            repName:''
          }
        },
        mounted(){
          const url = `https://api.github.com/search/repositories?q=v&sort=stars`
          this.$http.get(url).then(response => {
            const result = response.data
            const mostRepo = result.items[0]
            this.repUrl = mostRepo.html_url
            this.repName = mostRepo.name

          },response => {
            alert(response)
          })
          
        }
      }
    </script>
    <style>

    </style>
