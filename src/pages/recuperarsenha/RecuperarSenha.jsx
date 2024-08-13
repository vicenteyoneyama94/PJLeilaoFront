import React from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const RecuperarSenha = () =>{

    return(
        <>
        <Card title="Recuperar Senha">
        <InputText placeholder="E-mail" />
        <Button label="Recuperar Senha" />
        </Card>

        </>
    )

}
export default RecuperarSenha;