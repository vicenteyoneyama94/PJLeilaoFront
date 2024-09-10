import React from 'react';
import { TabMenu } from 'primereact/tabmenu';

const ProfileTabMenu = ({ activeIndex, setActiveIndex }) => {
    const items = [
        { label: 'Informações Pessoais', icon: 'pi pi-user' },
        { label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar' },
        { label: 'Histórico de Leilões', icon: 'pi pi-calendar' },
        { label: 'Segurança', icon: 'pi pi-shield' },
        { label: 'Configurações', icon: 'pi pi-cog' }
    ];

    return (
        <TabMenu 
            model={items} 
            activeIndex={activeIndex} 
            onTabChange={(e) => setActiveIndex(e.index)} 
        />
    );
};

export default ProfileTabMenu;