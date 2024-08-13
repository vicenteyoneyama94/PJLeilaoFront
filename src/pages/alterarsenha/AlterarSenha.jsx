import React from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
        

const AlterarSenha = () =>{

    return(
        <>
        <Card title="Alterar senha">
        <InputText type="text" placeholder="Digite a senha atual" />
        <InputText type="text" placeholder="Digite a nova senha" />
        </Card>
        </>
    )

}
export default AlterarSenha;