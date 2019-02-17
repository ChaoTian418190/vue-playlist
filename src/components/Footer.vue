<template>
  <footer @click="change">
    <p>{{copyright}},{{title}}</p>
  </footer>
</template>
<script>
export default {
  name:"app-footer",
  props:{
    title:{
      type:String
    }
  },
  data(){
    return {
        copyright:"Vue.js copyright @2019 Demo"
    }
  },
  methods:{
    change:function(){
      this.title = "change"
    }
  }
}
</script>
<style scoped>
footer{
  background-color: #222;
  padding: 6px;
}
p{
  color: lightgreen;
  text-align: center
}
</style>


