import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Sales ($)',
            data: [1200, 1900, 3000, 5000, 2500, 7000],
            fill: false,
            borderColor: '#42A5F5',
            tension: 0.1,
        },
    ],
};

const SalesChart = () => (
    <div>
        <h3>Sales Overview</h3>
        <Line data={salesData}/>
    </div>
);

export default SalesChart