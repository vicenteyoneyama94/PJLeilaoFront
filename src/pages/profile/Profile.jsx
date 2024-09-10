import React, { useState } from 'react';
import ProfileTabMenu from "../../components/tabmenu/TabMenu";
import "./Profile.css"
import InfoPessoal from "../../components/infopessoal/InfoPessoal";
import Configurações from "../../config/Configuracoes";
import LeiloesHistorico from "../../components/history/History";
import Security from "../../components/security/Security";
import Footer from '../../components/footer/Footer';
import Dashboard from '../../components/dashboard/Dashboard';

const Profile = () =>{

    const [activeIndex, setActiveIndex] = useState(0);

    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return <InfoPessoal />;
            case 1:
                return <Dashboard/>;
            case 2:
                return <LeiloesHistorico />;
            case 3:                
                return <Security />;
            case 4:
                return <Configurações />;
            default:
                return null;
        }
    };

    return(
        <div>
            <ProfileTabMenu activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <div className="tab-content">
                {renderContent()}
            </div>
            <Footer/>
        </div>
    )

}
export default Profile;