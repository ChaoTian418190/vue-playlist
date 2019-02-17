<template>
  <header @click="change">
    <h1>{{title1}},{{title}}</h1>
  </header>
</template>
<script>
export default {
  name:"app-header",
  props:{
    title:{
      type:String
    }
  },
  data(){
    return {
        title1:"Vue.js components Demo"
    }
  },
  methods:{
    change:function(){
      // this.title = "change title"
      //注册名changeParentTitle,第二个是传递的值,在App.vue的<header>中必须通过
      //v-on:changeParentTitle="updateTitle($event)",changeParentTitle和注册名对应,$event固定写法，接收传入的值
      this.$emit("changeParentTitle","从子组件传值到父组件");
    }
  },
  // beforeCreate:function(){
  //     alert("组件实例化之前执行的函数");
  // },
  // created:function(){
  //   alert("组件实例化完毕，但是页面还未显示");
  // },
  // beforeMount:function(){
  //   alert("组件挂载前,页面仍未显示，但虚拟Dom已经配置");
  // },
  // mounted:function(){
  //   alert("组件挂载后,此方法执行后,页面显示");
  // },
  // beforeUpdate:function(){
  //   alert("组件更新前，页面仍未更新，但虚拟Dom已经配置");
  // },
  // updated:function(){
  //   alert("组件更新,此方法执行后，页面显示");
  // },
  // beforeDestroy:function(){
  //   alert("组件销毁前");
  // },
  // destroyed:function(){
  //   alert("组件销毁");
  // }
}
</script>
<style scoped>
header{
  background-color: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center
}
</style>

