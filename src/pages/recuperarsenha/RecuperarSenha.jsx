import React from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "./RecuperarSenha.css";
import { useNavigate } from "react-router-dom";

const RecuperarSenha = () => {

    const navigate = useNavigate();

    const fechaTela = () =>{
        navigate('../login')
    }

    return (
        <>
            <div className="style-recover-password">
                <Card title="Recuperar Senha">
                    <InputText placeholder="E-mail" /><br/><br/>
                    <Button label="Cancelar" link onClick={fechaTela} />
                    <Button label="Recuperar Senha" onClick={() => window.open('./AlterarSenha')} />
                </Card>
            </div>
        </>
    )

}
export default RecuperarSenha;