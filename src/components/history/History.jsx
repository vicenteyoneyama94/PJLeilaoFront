import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useTranslation } from 'react-i18next';

const LeiloesHistorico = () => {
    const { t } = useTranslation();

    const auctions = [
        { id: 1, item: 'Volkswagen Gol G6 1.6 MSI', date: '10/08/2024', bid: 'R$ 15.000,00' },
        { id: 2, item: 'Ford Ranger Limited 3.0 V6 Diesel 4WD AT 2025', date: '20/07/2024', bid: 'R$ 250.000,00' },
        { id: 3, item: 'Hilux 2.8 SRX PLUS 4X4 CD Turbo Diesel 4P Automatico 2025', date: '15/06/2024', bid: 'R$ 300.000,00' }
    ];

    return (
        <div className="latest-auctions">
            <h2>{t('home.latestAuctions')}</h2>
            <DataTable value={auctions} paginator rows={3}>
                <Column field="item" header={t('home.item')} />
                <Column field="date" header={t('home.date')} />
                <Column field="bid" header={t('home.bid')} />
            </DataTable>
        </div>
    );
};

export default LeiloesHistorico;