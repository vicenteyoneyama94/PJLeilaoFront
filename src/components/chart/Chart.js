// src/components/chart/ChartComponent.js
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({ type, data, options }) => {
    return (
        <>
            {type === 'bar' && <Bar data={data} options={options} />}
            {type === 'line' && <Line data={data} options={options} />}
        </>
    );
};

export default Chart;
