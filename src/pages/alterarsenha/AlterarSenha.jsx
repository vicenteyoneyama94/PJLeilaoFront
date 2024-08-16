import React from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "./AlterarSenha.css"

const AlterarSenha = () => {

    return (
        <>
            <div className="style-change-password">
                <Card title="Alterar senha">
                    <InputText type="text" placeholder="Digite a senha atual" /><br/><br/>
                    <InputText type="text" placeholder="Digite a nova senha" /><br/><br/>
                    <Button label="Salvar" icon="pi pi-check" iconPos="right" onClick={() => window.close('./Login')} />
                </Card>
            </div>
        </>
    )

}
export default AlterarSenha;