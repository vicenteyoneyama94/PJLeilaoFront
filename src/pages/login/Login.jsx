import React from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useTranslation } from "react-i18next";

const Login = () => {

    const {t} = useTranslation();

    /* const navigate = useNavigate(
        navigate('')
    ) */

    return (
        <div>
            <Card title="Login" className="page-login">
                
                <InputText placeholder="Login" /><br /><br />
                <Password placeholder="Senha" feedback={false} /><br /><br />

                
                <Button label={t('button.label')} icon="pi pi-check" onClick={() => window.close('/')} />
                <Button label="Esqueci a senha" link onClick={() => window.open('./RecuperarSenha')} /><br/>

                <Button label="Cadastre-se" link onClick={() => window.open('./CadastrarUsuario', '_blank')} />
            </Card>


            
        </div>
    );

}
export default Login;