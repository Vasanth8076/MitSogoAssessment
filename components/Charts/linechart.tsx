/**
  @CreatedBy        : Vasanth Varatharajan
  @CreatedTime      : December 14 2022
**/


import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';


import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import { Col, Row } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const LineChart = () => {

    const [lineStylesData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
            {
                label: 'Product sold',
                data: [15, 10, 15, 18, 15, 23],
                fill: true,
                tension: .5,
                borderColor: '#B5B3FB'
            },
            {
                label: 'Total views',
                data: [20, 3, 16, 12, 17, 10],
                fill: true,
                tension: .5,
                borderColor: '#80E2FF'
            },
        ]
    });

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: true,
            aspectRatio: .9,
            plugins: {

                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#495057',
                        boxWidth: 10,

                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        let multiAxisOptions = {
            stacked: false,
            maintainAspectRatio: true,
            aspectRatio: .1,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'bottom',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'bottom',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: '#ebedef'
                    }
                }
            }
        };

        return {
            basicOptions,
            multiAxisOptions
        }
    }

    const { basicOptions } = getLightTheme();

    return (
        <div className='card-line'>
            <div className="card">
                <Row>
                    <Col span={15}>
                        <h5>Statistics</h5>
                    </Col>
                    <Col span={9}>
                        <div className='Last-month'>
                            <Row>
                                <Col span={19}>
                                    <p>Last 6 month</p>
                                </Col>
                                <Col span={5}>
                                    <DownOutlined />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Chart type="line" data={lineStylesData} options={basicOptions} style={{ width: '290px', height: '250px' }} />
            </div>
        </div>
    )
}

export default LineChart;