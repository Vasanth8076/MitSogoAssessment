/**
  @CreatedBy        : Vasanth Varatharajan
  @CreatedTime      : December 14 2022
**/


import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Avatar, Badge, Col, Dropdown, List, Menu, Row } from 'antd';


const widgetMenu = (
    <><Menu defaultSelectedKeys={['1']}>
        <Menu.Item >

            <div>
                
                    <List>
                        <Row>
                            <Col span={4}>
                                <Avatar src='img/profile-pic-03.jpg' className="mr-2" size="large" shape="circle" />
                            </Col>
                            <Col span={20}>
                                <Row>
                                    <Col span={12}>
                                        <p className='list-Detail'>Drew James</p>
                                    </Col>
                                    <Col span={12}>
                                        <p className='list-ago'>2 min ago</p>
                                    </Col>

                                </Row>
                                <Row>
                                    <p className='notification-message'>Assigned you on the call with Sara</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={4}>
                                <Avatar src='img/profile-pic-06.jpg' className="mr-2" size="large" shape="circle" />
                            </Col>
                            <Col span={20}>
                                <Row>
                                    <Col span={12}>
                                        <p className='list-Detail'>Alexa Marry</p>
                                    </Col>
                                    <Col span={12}>
                                        <p className='list-ago'>5 min ago</p>
                                    </Col>

                                </Row>
                                <Row>
                                    <p className='notification-message'>Marked the task <a>New UI </a>as done</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={4}>
                                <Avatar src='img/profile-pic-05.jpg' className="mr-2" size="large" shape="circle" />
                            </Col>
                            <Col span={20}>
                                <Row>
                                    <Col span={12}>
                                        <p className='list-Detail'>Eva Maria</p>
                                    </Col>
                                    <Col span={12}>
                                        <p className='list-ago'>10 min ago</p>
                                    </Col>

                                </Row>
                                <Row>
                                    <p className='notification-message'>Added a new comment on Sales task</p>
                                </Row>
                            </Col>
                        </Row>
                        <hr className='border-avatar' />

                        <div className='show-more-notification'>
                            <p >Show More</p>
                        </div>
                    </List>
                
            </div>
        </Menu.Item>
    </Menu>
    </>
)

const Notification: React.FC = () => (
    <div className='profile-icon'>
        <Dropdown overlay={widgetMenu} placement='bottomRight'>
            <Badge size='small' color="#81E37A" count={'1'}>
                <a ><BellOutlined /> </a>
            </Badge>
        </Dropdown>
    </div>




);

export default Notification;
