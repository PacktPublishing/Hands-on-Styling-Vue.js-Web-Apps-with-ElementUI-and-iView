<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.logo {
  color: white;
}
.left {
  float: left;
}

.right {
  float: right;
}
.ivu-btn-primary {
  margin-left: 5px;
}

.ivu-carousel {
  background-color: #c5c8ce;
  height: 250px;
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
}

</style>
