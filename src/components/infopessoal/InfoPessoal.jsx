import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Logout from '../logout/Logout';

const InfoPessoal = () => {
    return (
        <Card title="Informações Pessoais" className="p-mb-3">
            <p><strong>Nome:</strong> Vicente Yoneyama</p>
            <p><strong>Email:</strong> vicenteyoneyama@gmail.com</p>
            <p><strong>Telefone:</strong> (44) 99999-9999</p>
            <Button label="Editar Informações" icon="pi pi-pencil" className="p-button-info" />
            <Button label="Sair" onClick={Logout} />
        </Card>
    );
};

export default InfoPessoal;