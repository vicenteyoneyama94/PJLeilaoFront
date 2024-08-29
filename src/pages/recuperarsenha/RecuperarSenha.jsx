import React from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "./RecuperarSenha.css";

const RecuperarSenha = () => {

    return (
        <>
            <div className="style-recover-password">
                <Card title="Recuperar Senha">
                    <InputText placeholder="E-mail" /><br/><br/>
                    <Button label="Cancelar" link onClick={() => window.close('./Login')} />
                    <Button label="Recuperar Senha" onClick={() => window.open('./AlterarSenha')} />
                </Card>
            </div>
        </>
    )

}
export default RecuperarSenha;