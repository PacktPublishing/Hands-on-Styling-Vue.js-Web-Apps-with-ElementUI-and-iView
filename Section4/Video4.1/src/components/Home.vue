<template>
    <Layout>
        <Header>

          <div class="logo left">
            <h3>LOGO</h3>
          </div>
          <div class="header-controls right">
            <router-link to="signup" exact>
                <i-button type="primary">Login</i-button>
            </router-link>
            <router-link to="signup" exact>
                <i-button type="primary">Signup</i-button>
            </router-link>
          </div>
        </Header>
        <Content>
          <div class="main-body">

            <Row type="flex" justify="center">
              <Col :span="21">
                <Carousel autoplay v-model="value2" loop>
                    <CarouselItem>
                        <div class="demo-carousel">1</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">3</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">4</div>
                    </CarouselItem>
                </Carousel>
              </Col>
            </Row>

            <br >
            <Row :gutter="16" type="flex" justify="center">
              <Col span="7">
                <Card style="width:320px">
                    <div style="text-align:center">
                        <img src="../assets/iviewlogo.png">
                        <h3>A high quality UI Toolkit based on Vue.js</h3>
                    </div>
                </Card>
              </Col>

              <Col span="7">
                <Card style="width:320px">
                    <div style="text-align:center">
                        <img src="../assets/iviewlogo.png">
                        <h3>A high quality UI Toolkit based on Vue.js</h3>
                    </div>
                </Card>
              </Col>

              <Col span="7">
                <Card style="width:320px">
                    <div style="text-align:center">
                        <img src="../assets/iviewlogo.png">
                        <h3>A high quality UI Toolkit based on Vue.js</h3>
                    </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer>
          
          <a href="#">Privacy & Policy</a> |
          <a href="#">Contact Us</a> |
          <a href="#">Terms & Conditions</a>

        </Footer>
    </Layout>
</template>
<script>
export default {
    name: 'Home',
    data () {
        return {
            value2: 0
        }
    },
    methods: {
        show: function () {
            this.visible = true;
        }
    }
}
</script>
<style scoped>

</style>
