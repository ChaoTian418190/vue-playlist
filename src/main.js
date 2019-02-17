// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入Users.vue组件
// import Users from './components/Users'

Vue.config.productionTip = false

//1. 将组建注册为全局组建
// Vue.component("users",Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
