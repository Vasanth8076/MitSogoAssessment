/**
  @CreatedBy        : Vasanth Varatharajan
  @CreatedTime      : December 14 2022
**/



/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Col, Dropdown, Layout, List, Menu, Row, Space, theme } from 'antd';
import {
  SettingOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  InboxOutlined,
  DashboardOutlined,
  BookOutlined,
  SearchOutlined,
  UserOutlined,
  ContainerOutlined,
  LogoutOutlined,
  DownOutlined
} from '@ant-design/icons';
import { Footer } from 'antd/es/layout/layout';
import { Badge } from 'antd';
import Profile from '../../components/profile';
import DoughnutChart from '../../components/Charts/doughnotchart';
import { Card } from 'primereact/card';
import LineChart from '../../components/Charts/linechart';
import DataTable from '../../components/datatable';
import CardVideo from '../../components/cardvideo';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import Notification from '../../components/notification';
const { Header, Sider, Content } = Layout;


const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const widgetMenu = (
    <Menu defaultSelectedKeys={['1']}>
      <Menu.Item icon={<UserOutlined />}>
        My profile
      </Menu.Item >
      <Menu.Item icon={<ContainerOutlined />}>
        Billing
      </Menu.Item>
      <Menu.Item icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  )

  return (


    <>
      <div >
        <Layout style={{ minHeight: '100vh', height: "100vh", overflowY: "hidden" }} >

          <Sider className='sidebar' trigger={null} collapsedWidth={0} collapsible collapsed={collapsed}  >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['2']}
              items={[
                {
                  key: '1',
                  label: 'Home',
                  icon: <HomeOutlined />
                },
                {
                  key: '2',
                  label: 'Dashboard',
                  icon: <DashboardOutlined />



                },
                {
                  key: '3',
                  label: 'Inbox',
                  icon: <InboxOutlined />,
                  itemIcon: <Badge count={"New"} style={{ backgroundColor: '#FF4A33' }} />

                },

                {
                  key: '4',
                  label: 'Products',
                  icon: <BookOutlined />
                },
                {
                  key: '5',
                  label: 'Admin',
                  icon: <SettingOutlined />

                },
              ]} />
          </Sider>

          <Layout className="site-layout">
            <div className="header">
              <Header>
                <Row >
                  <Col span={13}>
                    <div className="icon" style={{ borderTopLeftRadius: collapsed ? "0px" : "30px" }}>
                      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                      })}
                      
                      <SearchOutlined/>
                    
                      
                      <i  className='search-flow'>Search Transactions,Invoices or help</i>
                      
                    </div>
                  </Col>
                  <Col span={11} className='header-col2'>
                    <div className='heder-profile'>
                      <Row>
                        <Col span={16}></Col>
                        <Col span={8} style={{textAlign: "end"}} className='notificationbar'>
                          < Notification />
                            <Dropdown overlay={widgetMenu} placement='bottom'>
                            <span style={{float: "left" , marginLeft: "10%"}} className='profile-name'>John Doe</span>
                            </Dropdown>
                            <div className='profile-downarrow'>
                            <DownOutlined />
                            </div>
                          <div className='header-profile'>
                            <Avatar image="img/profile-pic-01.jpg" className="mr-2" size="large" shape="circle" />
                          </div>
                        </Col>

                      </Row>
                    </div>
                  </Col>
                </Row>
              </Header>
            </div>
            <Content className='Content-scroll'
              // style={{
              //   background: "#F5F7FB",
              //   height: "100vh",
              //   width: "100%",
              //   overflowY: "scroll"
              // }}
            >
              <div className="contant">

                <Row>
                  <Col span={12}>
                    <p className='Overview-font'>Overview</p>
                  </Col>
                  <Col span={12} >
                    <div className='Content-top'>
                      <Button icon='pi pi-plus' label='Add Fund' className='add-fund-btn' />
                    </div>
                  </Col>
                </Row>
<div className='content-below'>
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Space size={[5, 5]} >
                      <div className='line-chart-card'>
                        <Card>
                          <LineChart />
                        </Card>
                      </div>

                    </Space>
                  </Col >
                  <Col span={8}>
                    <Space size={[5, 5]} >
                      <div className='doughnutchart-card'>
                        <Card>
                          <DoughnutChart />
                        </Card>
                      </div>
                    </Space>
                  </Col>
                  <Col span={8}>
                    <div className='line-card-profile'>
                      <Profile />
                    </div>
                  </Col>
                </Row>
                </div>
                <Row gutter={[16, 24]}>
                  <Col span={15}>
                    <div className='line-card-table'>
                      <Card>
                        <DataTable />
                      </Card>
                    </div>
                  </Col>
                  <Col span={9}>
                    <div className='line-card-video'>
                      <CardVideo />
                    </div>
                  </Col>
                </Row>
                
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>



  )

}

export default Sidebar;