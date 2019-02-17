<template>
  <div class="users">
    <h1>hello</h1>
      <ul>
        <li v-for="user in users" @click="user.show = !user.show">
          <h2>{{user.name}}</h2>
          <h3 v-show="user.show">{{user.speciality}}</h3>
        </li>
      </ul>
      <button @click="deleteUser">删除引用传值</button>
  </div>
</template>

<!--
组件之间传值
1. 传具体的值: string,number,boolean
2. 传引用: array object，传引用的话，一个地方发生变化，其他地方都会跟着变化
-->

<script>
export default {
  name:"users",
  //接收App.vue中绑定的users的值
  props:{
    users:{
      type:Array,
      required:true
    }
  },
  methods:{
    deleteUser:function(){
        //users对象出栈,即删除
        this.users.pop();
    }
  }
}
</script>
<!--添加scoped后,该样式只在该组件内部起作用-->
<style scoped>
.users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>

