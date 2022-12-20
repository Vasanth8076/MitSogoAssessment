/* eslint-disable jsx-a11y/alt-text */
/**
  @CreatedBy        : Vasanth Varatharajan
  @CreatedTime      : December 14 2022
**/

/**
  @CreatedBy        : Vasanth Varatharajan
  @CreatedTime      : December 14 2022
**/


import { Card, Col, Image, Row } from 'antd';
import React from 'react';
import 'primeicons/primeicons.css';

const CardVideo: React.FC = () => (
    <>
        <div className='video-card'>
            <Card bordered={false}>
                <Row>
                    <Col span={12} > <p className='Text-user'>Product Video</p> </Col>
                    <Col span={12} style={{ textAlign: "end" }}><i className="pi pi-ellipsis-v"></i>  </Col>
                </Row>
                <Image
                    height={200}
                    width={300}
                    src="img\video thumbnail.png"
                    preview={false}
                />

            </Card>
        </div>

    </>
);

export default CardVideo;