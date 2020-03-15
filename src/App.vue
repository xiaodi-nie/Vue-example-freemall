<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{name}}</p>
    <button @click="update">update data</button>
    <HelloWorld msg="Welcome to Your Vue.js App" v-if="show"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      show: true,
      name:'welcome to vue tutorial'
    }
  },
  beforeCreate(){
    console.log('before create')
    console.log(this.$data)
    console.log(this.$el)
  },
  created(){
    console.log('created')
    console.log(this.$data)
    console.log(this.$el)
  },
  beforeMount(){
    console.log('before mount')
    console.log(this.$data)
    console.log(this.$el)
  },
  mounted(){
    console.log('mounted')
    console.log(this.$data)
    console.log(this.$el)
  },
  beforeUpdate(){
    console.log('before update')
  },
  updated(){
    console.log('updated')
  },
  beforeDestroy(){
    console.log('before destroy')
  },
  destroyed(){
    console.log('destroyed')
  },
  methods:{
    update(){
      this.name = 'updated name';
      this.show = false;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
