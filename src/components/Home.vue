<template>
  <div id="home">
    <!--用来接收冲Headers.vue中传入的值，changeParentTitle必须和Headers.vue中注册名相同,
        updateTitle是本模板中方法,$event是固定写法，接收传入的值-->
    <app-header v-on:changeParentTitle="updateTitle($event)"  v-bind:title="title"></app-header>
    <!--自定义标签来绑定要传输的值，此处传的是数组，即传引用，只要一个user改变，另一个也改变-->
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
//引入组件
import Headers from './Headers'
import Users from './Users'
import Footer from './Footer'

export default {
  name: 'home',
  data(){
    return {
      users:[
        // {name: 'Ryu', speciality: 'Vue Components', show: false},
        // {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        // {name: 'Hitoshi', speciality: 'Click Events', show: false},
        // {name: 'Tango', speciality: 'Conditionals', show: false},
        // {name: 'Kami', speciality: 'Webpack', show: false},
        // {name: 'Yoshi', speciality: 'Data Diggin', show: false},
        // {name: '校长', speciality: 'chou', show: false}
      ],
      title:"传递的是一个值，(number,string,boolean)"
    }
  },
  //注册组件
  components:{
  "app-header":Headers,
  "users":Users,
  "app-footer":Footer
 },
 methods:{
   updateTitle:function(title){
     this.title = title;
   }
 },
 //在computed钩子方法中加载数据
 created:function(){
     this.$http.get("http://jsonplaceholder.typicode.com/users")
     .then((data) => {
        //  console.log(data);
        this.users = data.body;
     })
 }
}
</script>
<style scoped>
</style>



