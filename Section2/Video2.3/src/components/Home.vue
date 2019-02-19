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
          <el-button>
            <router-link to="signup" exact>Signup</router-link>
          </el-button>
        </div>

      </el-header>
      <el-main>

        <div class="caro">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="main-body">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-card shadow="hover">
                Hover
              </el-card>
            </el-col>

            <el-col :span="6">
              <el-card shadow="hover">
                Hover
              </el-card>
            </el-col>

            <el-col :span="6">
              <el-card shadow="hover">
                Hover
              </el-card>
            </el-col>

            <el-col :span="6">
              <el-card shadow="hover">
                Hover
              </el-card>
            </el-col>

          </el-row>

          <el-row>
            <el-col :span="24">
              <el-card shadow="hover">
                Hover
              </el-card>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <el-card shadow="hover">
                Hover
              </el-card>
            </el-col>
          </el-row>
          
        </div>

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
    name: 'home',
    data(){
        return {
        input: ''
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
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
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

  .el-input {
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
</style>
