<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="box">
    <input type="button" @click="post()" value="点我异步获取数据(Post)">
    </div>
    <h1 id="app">{{info}}</h1>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
window.onload = function () {
  /* eslint-disable no-new */
  new Vue({
    el: '#box',
    data: {
      msg: 'Hello World!'
    },
    methods: {
      post: function () {
        // 发送post请求
        this.$http.post('/try/ajax/demo_test_post.php', { name: '菜鸟教程', url: 'http://www.runoob.com' }, { emulateJSON: true }).then(function (res) {
          document.write(res.body)
        }, function (res) {
          console.log(res.status)
        })
      }
    }
  })
}
</script>
