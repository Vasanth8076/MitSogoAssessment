/**
  @CreatedBy        : Vasanth Varatharajan
  @CreatedTime      : December 14 2022
**/


import React from 'react';
import {Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    Location: string;
    views: string;
    Sales: string;
    Converstion: string;
    Total: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Location',
        dataIndex: 'Location',
        key: 'Location',

    },
    {
        title: 'views',
        dataIndex: 'views',
        key: 'views',
    },
    {
        title: 'Sales',
        dataIndex: 'Sales',
        key: 'Sales',
    },
    {
        title: 'Conversion',
        key: 'Converstion',
        dataIndex: 'Converstion',
    },
    {
        title: 'Total',
        key: 'Total',
        dataIndex: 'Total',

    },
];

const data: DataType[] = [
    {
        key: '1',
        Location: 'google.com',
        views: '3746',
        Sales: '752',
        Converstion: '43%',
        Total: '$19291'
    },
    {
        key: '2',
        Location: 'facebook.com',
        views: '8126',
        Sales: '728',
        Converstion: '32%',
        Total: '$17638'
    },
    {
        key: '3',
        Location: 'twitter.com',
        views: '8836',
        Sales: '694',
        Converstion: '28%',
        Total: '$16218'
    },
    {
        key: '4',
        Location: 'Direct, email, IM',
        views: '1173',
        Sales: '645',
        Converstion: '24%',
        Total: '$14421'
    },

    {
        key: '5',
        Location: 'linkedin.com',
        views: '2739',
        Sales: '539',
        Converstion: '20%',
        Total: '$12370'
    },
    {
        key: '6',
        Location: 'instagram.com',
        views: '2739',
        Sales: '539',
        Converstion: '20%',
        Total: '$12370'
    }



];

const DataTable: React.FC = () =>
    <div className="card">
        <h5>Referrer</h5>
        <Table columns={columns} dataSource={data} pagination={false}
        />
       <a> <u> Show More</u></a>
    </div>


export default DataTable;