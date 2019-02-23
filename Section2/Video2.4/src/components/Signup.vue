<template>
    <el-container>
      <el-header>
        <div class="logo left">LOGO</div>
        <div class="search">
          <el-input
            placeholder="Search.."
            v-model="input">
          </el-input>
        </div>
        <div class="controls right">
          <el-button>Login</el-button>
          <el-button>Signup</el-button>
        </div>

      </el-header>
      <el-main>
          <el-row type="flex" justify="center" :gutter="20">
              <el-col :span="8">
                  <el-card>
                      <h3>Login to Our Site</h3>

                      <el-form :label-position="labelPosition" label-width="100px">
                        <el-form-item label="Email">
                            <el-input v-model="form.email"></el-input>
                        </el-form-item>
                        <el-form-item label="Password">
                            <el-input type="password" v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="login-btn" type="primary" @click="onSubmit">Login</el-button>
                        </el-form-item>
                    </el-form>
                  </el-card>
              </el-col>

              <el-col :span="8">
                  <el-card>
                      <h3>Signup</h3>
                      <el-form :label-position="labelPosition" label-width="100px">
                        <el-form-item label="Email">
                            <el-input v-model="form.email"></el-input>
                        </el-form-item>
                        <el-form-item label="Password">
                            <el-input type="password" v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item label="Confirm Password">
                            <el-input type="password" v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item label="Language">
                            <el-select class="dob" v-model="value" placeholder="Select" size="large">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Gender">
                            <el-radio v-model="radio" label="1">Male</el-radio>
                            <el-radio v-model="radio" label="2">Female</el-radio>
                        </el-form-item>

                        <el-form-item label="Date of Birth">
                            <el-date-picker
                            class="dob"
                            type="date"
                            placeholder="Pick a day">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="login-btn" type="primary" @click="onSubmit">Register</el-button>
                        </el-form-item>
                    </el-form>
                  </el-card>
              </el-col>
          </el-row>
        

      </el-main>
      <el-footer>
        <a href="#">Privacy & Policy</a> |
        <a href="#">Contact Us</a> |
        <a href="#">Terms & Conditions</a>
      </el-footer>
    </el-container>
</template>
<script>
export default {
    name: 'signup',
    data(){
        return {
        input: '',
        labelPosition: 'top',
        form:{
            email:'',
            password:''
        },
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: '',
        radio:'1'
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  
  .el-main {
    background-color: white;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .right {
  float: right;
  }

  .left {
    float: left;
  }

  .el-header .el-input {
    width: 200px !important;
  }

  .search {
    width: 250px;
    float: left;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .login-btn {
    width: 350px;
  }

.dob {
    width: 350px;
}
</style>
