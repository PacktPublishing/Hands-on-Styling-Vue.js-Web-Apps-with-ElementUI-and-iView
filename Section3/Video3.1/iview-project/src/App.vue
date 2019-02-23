<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <i-button type="primary" @click="show">Click me!</i-button>
    <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>  
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return{
      visible: false
    }
  },
  methods: {
      show: function () {
          this.visible = true;
      }
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
