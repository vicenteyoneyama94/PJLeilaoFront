import React from 'react';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';

const BemVindo = () => {
    const { t } = useTranslation();

    return (
        <div className="hero-section">
            <h1>{t('home.welcome')}</h1>
            <p>{t('home.subtext')}</p>
            <Button label={t('home.startBidding')} icon="pi pi-gavel" className="p-button-lg p-button-primary" />
        </div>
    );
};

export default BemVindo;