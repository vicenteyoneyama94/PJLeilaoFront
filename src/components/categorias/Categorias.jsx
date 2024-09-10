import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faHistory, faClock, faUser } from '@fortawesome/free-solid-svg-icons';

const Categorias = () => {
    const { t } = useTranslation();

    return (
        <div className="grid grid-columns">
            <div className="col-12 md:col-6 lg:col-3">
                <div className="auction-card category-current">
                    <FontAwesomeIcon icon={faGavel} size="3x" />
                    <h2>{t('home.currentAuctions')}</h2>
                    <p>{t('home.currentAuctionsDesc')}</p>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="auction-card category-past">
                    <FontAwesomeIcon icon={faHistory} size="3x" />
                    <h2>{t('home.pastAuctions')}</h2>
                    <p>{t('home.pastAuctionsDesc')}</p>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="auction-card category-upcoming">
                    <FontAwesomeIcon icon={faClock} size="3x" />
                    <h2>{t('home.upcomingAuctions')}</h2>
                    <p>{t('home.upcomingAuctionsDesc')}</p>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="auction-card category-profile">
                    <FontAwesomeIcon icon={faUser} size="3x" />
                    <h2>{t('home.profile')}</h2>
                    <p>{t('home.profileDesc')}</p>
                </div>
            </div>
        </div>
    );
};

export default Categorias;