import React from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { ToggleButton } from 'primereact/togglebutton';

const Login = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const cadastrarUsuario = () => {
        navigate('../CadastrarUsuario');
    }
    const recuperarSenha = () => {
        navigate('../RecuperarSenha');
    }
    const fecharTela = () => {
        navigate('../profile');
    }

    return (
        <div>
            <div>
                <button onClick={() => changeLanguage('en')}>
                    English
                </button>
                <button onClick={() => changeLanguage('pt')}>
                    Português
                </button>
            </div>
            <Card title="Login" className="page-login">


                <InputText placeholder={t('login.campo_login')} /><br /><br />
                <Password placeholder={t('login.campo_senha')} feedback={false} /><br /><br />


                <Button label={t('login.button_login')} icon="pi pi-check" onClick={fecharTela} />
                <Button label={t('login.button_esquecisenha')} link onClick={recuperarSenha} /><br />

                <Button label={t('login.button_cadastrar')} link onClick={cadastrarUsuario} />
            </Card>



        </div>
    );

}
export default Login;