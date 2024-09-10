import React from 'react';
import { Card } from 'primereact/card';
import './Dashboard.css';
import Chart from '../chart/Chart';

const Dashboard = () => {
    const auctionData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
            {
                label: 'Total de Leilões por Mês',
                data: [10, 15, 8, 20, 12, 18],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const bidsData = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'],
        datasets: [
            {
                label: 'Lances Recentes',
                data: [50, 75, 60, 90, 120],
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="dashboard-container p-grid">
            <div className="p-col-12 p-md-6">
                <Card title="Visão Geral" className="dashboard-card">
                    <p>Total de Leilões: 20</p>
                    <p>Total de Lances: 150</p>
                    <p>Usuários Ativos: 35</p>
                </Card>
            </div>

            <div className="p-col-12 p-md-6">
                <Card title="Estatísticas Recentes" className="dashboard-card">
                    <p>Lances Recentes: 10</p>
                    <p>Leilões Encerrados: 5</p>
                </Card>
            </div>

            <div className="p-col-12 p-md-6">
                <Card title="Total de Leilões por Mês" className="dashboard-card">
                    <Chart type="bar" data={auctionData} options={options} />
                </Card>
            </div>

            <div className="p-col-12 p-md-6">
                <Card title="Lances Recentes por Semana" className="dashboard-card">
                    <Chart type="line" data={bidsData} options={options} />
                </Card>
            </div>
        </div>
    );
}

export default Dashboard;
