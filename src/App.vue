<template>
  <div id="app">
    <ul>
      <!--测试router-link和<a>中href的区别,router-link页面不跳转-->
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">HelloWorld</router-link></li>
    </ul>
    <!--加入路由配置,必须配置-->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      
    }
  }
}
</script>
<style scoped>
</style>
