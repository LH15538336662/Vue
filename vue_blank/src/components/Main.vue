<template>
  <div>
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">LOADING.......</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div v-else class="row">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>

    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import PubSub from 'pubsub-js'

  export default {
    data() {
      return {
        firstView: true,
        loading: false,
        users: null,
        errorMsg: ''
      }
    },
    mounted() {
      //订阅消息
      PubSub.subscribe('search', (msg, searchName) => {
        //更新请求中状态
        this.firstView = false
        this.loading = true
        this.users = null
        this.errorMsg=''

        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url).then(response => {
          //请求成功更新状态
          const result = response.data
          const users = result.items.map(item => ({
            url:item.html_url,
            avatar_url:item.avatar_url,
            name:item.login
          }))
          //成功 更新状态
          this.loading = false
          this.users = users

        }).catch(error => {
          //失败 更新状态
          this.loading = false
          this.errorMsg = error.message
        })
      })
    }
  }
</script>
<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
