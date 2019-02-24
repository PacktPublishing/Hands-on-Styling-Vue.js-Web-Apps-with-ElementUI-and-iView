<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Switch v-model="switch1" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data () {
    return {
      switch1: false
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


// use: [
//           {
//             loader: 'vue-loader',
//             options: {

//             }
//           },
//           {
//             loader: 'iview-loader',
//             options: {
//               prefix: false
//             }
//           }
//         ]
