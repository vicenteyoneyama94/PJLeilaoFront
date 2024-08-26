import React from 'react';
import { Menubar } from 'primereact/menubar';
import './BarMenu.css'

const BarMenu = () => {
    const items = [
        {
            label: 'Menu',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Login',
                    icon: 'pi pi-fw pi-bookmark',
                    command: () => { window.location.href = "/Login"; },
                },
                {
                    label: 'Cadastre-se',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Pessoa Física',
                            icon: 'pi pi-fw pi-user',
                            command: () => { window.location.href = "/CadastrarUsuario"; },
                        },
                        {
                            label: 'Pessoa Jurídica',
                            icon: 'pi pi-fw pi-building',
                            command: () => { window.location.href = "/CadastrarEmpresa"; },
                        }
                    ]
                },
                { separator: true },
                {
                    label: 'Sair',
                    icon: 'pi pi-fw pi-times'
                }
            ]
        },
        {
            label: 'Help',
            icon: 'pi pi-fw pi-question',
            items: [
                {
                    label: 'Contents',
                    icon: 'pi pi-fw pi-bars'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-search'
                }
            ]
        }
    ];

    const start = <img alt="logo" src="https://www.picellileiloes.com.br/arquivos/leiloes/logos/612cce1d4238e.jpg" height="40" className="mr-2"></img>;
    const end = <input type="text" placeholder="Search" className="p-inputtext"></input>;

    return( 
    <>
    <Menubar model={items} start={start} end={end} />;
    </>
    );
};

export default BarMenu;
