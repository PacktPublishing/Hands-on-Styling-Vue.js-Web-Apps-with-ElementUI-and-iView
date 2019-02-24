<style>
.ivu-table .demo-table-info-row td{
    background-color: #2db7f5;
    color: #fff;
}
.ivu-table .demo-table-error-row td{
    background-color: #ff6600;
    color: #fff;
}
.ivu-table td.demo-table-info-column{
    background-color: #2db7f5;
    color: #fff;
}
.ivu-table .demo-table-info-cell-name {
    background-color: #2db7f5;
    color: #fff;
}
.ivu-table .demo-table-info-cell-age {
    background-color: #ff6600;
    color: #fff;
}
.ivu-table .demo-table-info-cell-address {
    background-color: #187;
    color: #fff;
}
</style>

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
            <br >
            <Row type="flex" justify="center">
                <Col span="16">
                    <Card style="width:800px;">
                        <div>
                            <Breadcrumb>
                                <BreadcrumbItem to="/">Home</BreadcrumbItem>
                                <BreadcrumbItem to="/items">Items</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Card>
                </Col>
            </Row>
            <br >
            <Row type="flex" justify="center">
                <Col span="16">
                    <Card style="width:800px;">
                        <div>
                            <Tabs size="small" type="card" :animated="false">
                                <TabPane label="macOS" icon="logo-apple">MacOS</TabPane>
                                <TabPane label="Windows" icon="logo-windows">Windows</TabPane>
                                <TabPane label="Linux" icon="logo-tux">Linux</TabPane>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
            </Row>
            <br >
            <Row type="flex" justify="center">
                <Col span="16">
                    <Card style="width:800px;">
                        <div>
                            <Menu mode="horizontal" :theme="theme1" active-name="1">
                                <MenuItem name="1">
                                    <Icon type="iso-paper" />
                                    Menu 1
                                </MenuItem>
                                <MenuItem name="2">
                                    <Icon type="iso-people" />
                                    Menu 2
                                </MenuItem>
                                <Submenu name="3">
                                    <template slot="title"><Icon type="iso-stats" />Menu 3</template>
                                    <MenuGroup title="Group1">
                                        <MenuItem name="3-1">Item 3-1</MenuItem>
                                        <MenuItem name="3-2">Item 3-2</MenuItem>
                                        <MenuItem name="3-3">Item 3-3</MenuItem>
                                    </MenuGroup>
                                    <MenuGroup title="Group2">
                                        <MenuItem name="3-4">Item 3-4</MenuItem>
                                        <MenuItem name="3-5">Item 3-5</MenuItem>
                                    </MenuGroup>
                                </Submenu>
                                <MenuItem name="4">
                                    <Icon type="iso-construct" />
                                    Menu 4
                                </MenuItem>
                            </Menu>
                        </div>
                    </Card>
                </Col>
            </Row>

            <br >
            <Row type="flex" justify="center">
                <Col span="16">
                    <Card style="width:800px;">
                        <div>
                            <h3>Modal:</h3>
                            <br >
                            <Button type="primary" @click="modal1 = true">Open Notice</Button>
                            <Modal
                                v-model="modal1"
                                title="Common Modal dialog box title"
                                @on-ok="ok"
                                @on-cancel="cancel">
                                <p>Content of dialog</p>
                                <p>Content of dialog</p>
                                <p>Content of dialog</p>
                                <p>Content of dialog</p>
                            </Modal>
                        </div>
                    </Card>
                </Col>
            </Row>
            
            
            <br >
            <Row type="flex" justify="center">
                <Col span="16">
                    <Card style="width:800px;">
                        <div>
                            <h3>Notices:</h3>
                            <br >
                            <Button type="primary" @click="open(false)">Open Notice</Button>
                            
                        </div>
                    </Card>
                </Col>
            </Row>

            <br >
            <Row type="flex" justify="center">
                <Col span="16">
                    <Card style="width:800px;">
                        <div>
                            <h3>Alerts:</h3>
                            <br >
                            <Alert show-icon> An info prompt </Alert>
                            <Alert closable show-icon type="success"> A Success prompt </Alert>
                            <Alert show-icon type="warning"> An Warning prompt </Alert>
                            <Alert show-icon type="error"> An Error prompt </Alert>
                        </div>
                    </Card>
                </Col>
            </Row>

            <br >
            <Row type="flex" justify="center">
                <Col span="16">
                    <Card style="width:800px;">
                        <div>
                            <h3>Message:</h3>
                            <br >
                            <Button type="primary" @click="info">Display Info Prompt</Button>
                            
                        </div>
                    </Card>
                </Col>
            </Row>
            
          <br >
          <Row type="flex" justify="center">
              <Col span="16">
                <Card style="width:800px;">
                <div>
                    <h3>Custom row styles:</h3>
                    <br >

                    <Button type="primary" size="large" @click="exportData()">
                        <Icon type="ios-download-outline"></Icon>
                        Export source data
                    </Button>
                    <br >
                    <br >
                    <Table ref="table" size="large" :loading="loading" height="500" :row-class-name="rowClassName" stirped border :columns="columns1" :data="data1"></Table>    
                    
                </div>
                </Card>
              </Col>
          </Row>

          <Row type="flex" justify="center">
              <Col span="16">
                <Card style="width:800px;">
                <div>
                    <Page :total="100" show-sizer show-elevator />
                </div>
                </Card>
              </Col>
          </Row>
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
    name: 'Items',
    data () {
            return {
                loading: false,
                modal1: false,
                theme1: 'primary',
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns9: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                data8: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        cellClassName: {
                            age: 'demo-table-info-cell-age',
                            address: 'demo-table-info-cell-address'
                        }
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        cellClassName: {
                            name: 'demo-table-info-cell-name'
                        }
                    }
                ]
            }
        },
        methods: {
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            },
            exportData(){
                this.$refs.table.exportCsv({
                    filename: 'the original data'
                })
            },
            info(){
                //this.$Message.info('This is a info tip');
                //this.$Message.success('This is a success tip');
                //this.$Message.warning('This is a warning tip');
                //this.$Message.error('This is a Error tip');
                const msg = this.$Message.loading({
                    content: 'Loading....',
                    duration: 0,
                    closable: true
                });
                setTimeout(msg, 3000);
            },
            open(value){
                this.$Notice.success({
                    title: 'Notification title'
                })
            }
        }
}
</script>
