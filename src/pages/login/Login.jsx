import React from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {

    const {t} = useTranslation();

    const navigate = useNavigate();

    const cadastrarUsuario = () =>{
        navigate('../CadastrarUsuario');
    }
    const recuperarSenha = () =>{
        navigate('../RecuperarSenha');
    }
    const fecharTela = () =>{
        navigate('../profile');
    }

    return (
        <div>
            <Card title="Login" className="page-login">
                
                <InputText placeholder="E-mail" /><br /><br />
                <Password placeholder="Senha" feedback={false} /><br /><br />

                
                <Button label={t('button.label')} icon="pi pi-check" onClick={fecharTela} />
                <Button label="Esqueci a senha" link onClick={recuperarSenha} /><br/>

                <Button label="Cadastre-se" link onClick={cadastrarUsuario} />
            </Card>


            
        </div>
    );

}
export default Login;