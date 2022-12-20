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

const DoughnutChart = () => {
    const [chartData] = useState({
        labels: ['France', 'italy', 'japan', 'Canada'],
        datasets: [
            {
                data: [4260, 3970, 4260, 3970],
                backgroundColor: [
                    "#80E2FF",
                    "#F49FA8",
                    "#FFDF94",
                    "#A3A0FB"
                ],

            }]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#495057',
                    boxWidth: 10,



                }
            }
        }
    });

    return (
        <div className="card">
            <h5>Sales Distribution</h5>
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ width: '300px', height: '250px' }} />
        </div>
    )
}

export default DoughnutChart;