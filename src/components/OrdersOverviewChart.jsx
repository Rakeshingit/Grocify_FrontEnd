import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ordersData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label: 'Orders',
            data: [15, 20, 25, 18, 30, 22, 15],
            backgroundColor: '#66BB6A',
        },
    ],
};

const OrdersChart = () => (
    <div>
        <h3>Orders Overview</h3>
        <Bar data={ordersData}/>
    </div>
);

export default OrdersChart;
