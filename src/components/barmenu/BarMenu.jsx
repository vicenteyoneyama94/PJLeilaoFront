import React from 'react';
import { Menubar } from 'primereact/menubar';
import './BarMenu.css'
import { useTranslation } from "react-i18next";

const BarMenu = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    

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
                /* { separator: true }, */
            ]
        },
        {
            label: 'Ajuda',
            icon: 'pi pi-fw pi-question',
            items: [
                {
                    label: 'Alterar Idioma',
                    icon: 'pi pi-fw pi-language',
                    items: [
                        {
                            label: 'Português',
                            icon: 'pi pi-fw pi-language',
                            command: () => {changeLanguage('pt')},
                        },
                        {
                            label: 'Inglês',
                            icon: 'pi pi-fw pi-language',
                            command: () => {changeLanguage('en')},
                        }
                    ]
                },
                {
                    label: 'Conteúdo',
                    icon: 'pi pi-fw pi-bars'
                },
                {
                    label: 'Procurar',
                    icon: 'pi pi-fw pi-search'
                }
            ]
            
        },
        {
            label: 'Logout',
            icon: 'pi pi-fw pi-file',
            command: () => { window.location.href = "../Logout"},
        },
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
