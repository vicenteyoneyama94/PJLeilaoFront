import React, { useState } from 'react';
import ProfileTabMenu from "../../components/tabmenu/TabMenu";
import "./Profile.css"
import InfoPessoal from "../../components/infopessoal/InfoPessoal";
import Configurações from "../../config/Configuracoes";
import LeiloesHistorico from "../../components/history/History";
import Security from "../../components/security/Security";

const Profile = () =>{

    const [activeIndex, setActiveIndex] = useState(0);

    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return <InfoPessoal />;
            case 1:
                return <Configurações />;
            case 2:
                return <LeiloesHistorico />;
            case 3:
                return <Security />;
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
        </div>
    )

}
export default Profile;