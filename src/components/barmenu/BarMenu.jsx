import React from 'react';
import { Menubar } from 'primereact/menubar';

const BarMenu = () => {
    const items = [
        {
            label: 'Menu',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Login',
                    icon: 'pi pi-fw pi-bookmark',
                },
                {
                    label: 'Cadastre-se',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Pessoa Física',
                            icon: 'pi pi-fw pi-bookmark',
                        },
                        {
                            label: 'Pessoa ',
                            icon: 'pi pi-fw pi-video'
                        }
                    ]
                },
                {
                    label: 'Open',
                    icon: 'pi pi-fw pi-external-link'
                },
                { separator: true },
                {
                    label: 'Quit',
                    icon: 'pi pi-fw pi-times'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Undo',
                    icon: 'pi pi-fw pi-undo'
                },
                {
                    label: 'Redo',
                    icon: 'pi pi-fw pi-redo'
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
                    icon: 'pi pi-fw pi-search',
                    items: [
                        {
                            label: 'Text',
                            icon: 'pi pi-fw pi-file'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Actions',
            icon: 'pi pi-fw pi-cog',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    command: () => { window.location.hash = "/edit"; }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash',
                    command: () => { window.location.hash = "/delete"; }
                }
            ]
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" height="40" className="mr-2"></img>;
    const end = <input type="text" placeholder="Search" className="p-inputtext"></input>;

    return (
        <Menubar model={items} start={start} end={end} />
    );
};

export default BarMenu;
