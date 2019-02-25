// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由模块
import VueRouter from 'vue-router'
//引入HelloWorld
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
//引入vue-resource实现http请求
import VueResource from 'vue-resource'

//引入Users.vue组件
// import Users from './components/Users'

Vue.config.productionTip = false

//vueresource配置
Vue.use(VueResource);
//路由配置
Vue.use(VueRouter);
const router = new VueRouter({
  routes:[
    {path:"/",component:Home},
    {path:"/helloWorld",component:HelloWorld}
  ],
  //去掉连接中'#'
  mode:"history"
});

//1. 将组建注册为全局组建
// Vue.component("users",Users);

/* eslint-disable no-new */
new Vue({
  //加入路由
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
