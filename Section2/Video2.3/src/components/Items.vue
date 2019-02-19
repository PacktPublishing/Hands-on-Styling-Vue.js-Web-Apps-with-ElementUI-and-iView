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
            <el-badge :value="100" :max="10" class="item">
                <el-button icon="el-icon-message" type="primary"></el-button>
            </el-badge>
          <el-button>Login</el-button>
          <el-button>
            <router-link to="signup" exact>Signup</router-link>
          </el-button>
        </div>

      </el-header>
        <el-container>
            <el-aside>
                <h3>Featured Categories</h3>
                <ul>
                    <li><a href="#">Category 1</a></li>
                    <li><a href="#">Category 2</a></li>
                    <li><a href="#">Category 3</a></li>
                    <li><a href="#">Category 4</a></li>
                    <li><a href="#">Category 5</a></li>
                </ul>
            </el-aside>
            <el-main>
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-alert
                      title="Success Alert"
                      type="success"
                      show-icon
                      description="Some Description here">
                    </el-alert>
                  </el-col>

                  <el-col :span="12">
                    <el-alert
                      title="Error Alert"
                      type="error">
                    </el-alert>
                  </el-col>
                </el-row>
                <el-table
                v-loading="loading"
                :data="tableData" :show-header="showHeader"
                style="width: 100%">
                <el-table-column
                    prop="image"
                    label="Image"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="Name"
                    width="180">
                </el-table-column>
                <el-table-column
                prop="tag"
                label="Tag"
                width="180">
                <template slot-scope="scope">
                <el-tag
                    :type="scope.row.tag === 'OnSale' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
                </el-table-column>

                <el-table-column
                    prop="rate"
                    label="Rate"
                    width="200px">
                    <template slot-scope="scope">
                        <el-rate
                        v-model="scope.row.rate"
                        disabled
                        text-color="#ff9900">
                        </el-rate>
                    </template>
                </el-table-column>

                <el-table-column
                fixed="right"
                label="Operations">
                <template slot-scope="scope">
                    <el-button type="text" size="small"
                    :plain="true" @click="open">Detail</el-button>
                    <el-button type="text" size="small"
                    @click="openmessge">Add to Cart</el-button>

                    <el-button
                      plain
                      @click="opennotification">Notification</el-button>
                </template>
                </el-table-column>

            
                
                </el-table>

                <el-pagination
                    layout="prev, pager, next"
                    :total="50">
                </el-pagination>


            </el-main>
        </el-container>
        <el-footer>
        <a href="#">Privacy & Policy</a> |
        <a href="#">Contact Us</a> |
        <a href="#">Terms & Conditions</a>
      </el-footer>
    </el-container>
</template>
<script>
export default {
    name:'Items',
    data() {
        return {
            showHeader: false,
            loading: false,
            tableData: [{
                image: 'Item Image',
                name: 'Item 1',
                tag: 'OnSale',
                rate:4.2
            }, {
                image: 'Item Image',
                name: 'Item 2',
                tag: 'OnSale',
                rate:3.2
            }, {
                image: 'Item Image',
                name: 'Item 3',
                tag: 'Featured',
                rate:4.2
            }, {
                image: 'Item Image',
                name: 'Item 4',
                tag: 'Trending',
                rate:5
            }]
        }
    },
    methods: {
      open(){
        this.$message({
          message: 'This is a message.',
          type:'warning',
          showClose: true
        })
      },
      openmessge(){
        this.$alert('This is a mesage','Title',{
          confirmButonText: 'OK',
          callback: action => {
            this.$message({
              type:'info',
              message:`action: ${ action }`
            })
          }
        })
      },
      opennotification(){
        this.$notify({
          title: 'Prompt',
          message: 'This is a message',
          duration: 0,
          type:'success',
          position:'bottom-left'
        })
      }
    }
}
</script>
<style scoped>
.right {
  float: right;
}

.left {
  float: left;
}

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
  }
  
  .el-main {
    background-color: #E9EEF3;
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
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .search {
    width: 250px;
    float: left;
  }

  .el-input {
    width: 200px !important;
  }

  .el-badge {
      margin-bottom: 0px !important;
      margin-right: 18px;
      line-height: 0px !important;
  }

  ul {
    margin: 0 0 10px 10px;
    padding: 0px;
  }

  ul li {
    list-style-type: none;
    line-height: 17px;
  }

    a {
    color: #333;
    font-size: 12px;
    margin-left: 0;
    text-decoration: none;
    }

    a:hover {
    color: #409EFF;
    font-size: 12px;
    margin-left: 0;
    text-decoration: none;
    }

.el-pagination {
    line-height: 0px !important;
    margin-top: 20px;
}

.el-pagination {
    line-height: 0px !important;
    margin-top: 20px;
    text-align: center;
}

.el-alert {
    height: 60px;
}
  
</style>
