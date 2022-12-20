
/**
  @CreatedBy        : Vasanth Varatharajan
  @CreatedTime      : December 14 2022
**/

import { Card, Col, Image, List, Row } from 'antd';
import React from 'react';
import { Avatar } from 'primereact/avatar';
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined
} from '@ant-design/icons';
import 'primeicons/primeicons.css';

const Profile: React.FC = () => (
  <>
    <Card bordered={false} className="profile-card">
      <Avatar image="img/profile-pic-01.jpg" className="mr-2" size="xlarge" shape="circle"  />
      <p className='Avatar-name'>Nick Herasimenka</p>
      <p className='State-Name'>United States</p>
      <a className='Avatar-social'>
        <div className='row'>
          <TwitterOutlined />
          <FacebookOutlined />
          <InstagramOutlined />
          <LinkedinOutlined />
        </div>
      </a>
      <hr className='border-avatar' />
      <Row>
        <Col span={12} > <p className='Text-user'>Our Users</p> </Col>
        <Col span={12} style={{ textAlign: "end" }}><i className="pi pi-ellipsis-v"></i>  </Col>
      </Row>
      <div className='list-profile'>
        <List >
          <Row>
            <Avatar image="img/profile-pic-03.jpg" className="mr-2" size="large" shape="circle" />
            <Col span={14}>
              <Row><p className='list-Detail'>Drew James</p></Row>
              <Row >
                <Col span={12}><p className='list-state-detail'>United States</p> </Col>
                <Col span={12} style={{ textAlign: "end" }}><p className='list-mb-number'>Mobile : 8715674877</p></Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Avatar image="img/profile-pic-02.jpg" className="mr-2" size="large" shape="circle" />
            <Col span={14}>
              <Row><p className='list-Detail'>Bavid Kames</p></Row>
              <Row >
                <Col span={12}><p className='list-state-detail'>United States</p> </Col>
                <Col span={12} style={{ textAlign: "end" }}><p className='list-mb-number'>Mobile : 8715674877</p></Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Avatar image="img/profile-pic-04.jpg" className="mr-2" size="large" shape="circle" />
            <Col span={14}>
              <Row><p className='list-Detail'>Lavid Emes</p></Row>
              <Row >
                <Col span={12}><p className='list-state-detail'>United States</p> </Col>
                <Col span={12} style={{ textAlign: "end" }}><p className='list-mb-number'>Mobile : 8715674877</p></Col>
              </Row>
            </Col>
          </Row>
        </List>
      </div>
    </Card>
  </>
);

export default Profile;