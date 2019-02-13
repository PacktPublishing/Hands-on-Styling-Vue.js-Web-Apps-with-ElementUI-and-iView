<template>
  <div class="hello">
    <el-button @click="visible = true" type="primary">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello World">
      <p>Try Element</p>
    </el-dialog>

    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
    return { visible: false }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
