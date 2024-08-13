import React from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login = () => {

    return (
        <div>
            <Card title="Login">
                <InputText placeholder="Login" /><br /><br />
                <Password placeholder="Senha" feedback={false} /><br />

                
                <Button label="Login" icon="pi pi-check" />
                <Button label="Esqueci a senha" link onClick={() => window.open('./recuperarsenha/RecuperarSenha', '_blank')} /><br/>

                <Button label="Cadastre-se" link onClick={() => window.open('./cadastro/CadastrarUsuario', '_blank')} />
            </Card>


            <div class="grid">
                <div class="col-12 md:col-6 lg:col-3">
                    <div class="text-center p-3 border-round-sm bg-primary font-bold">col-12 md:col-6 lg:col-3</div>
                </div>
                <div class="col-12 md:col-6 lg:col-3">
                    <div class="text-center p-3 border-round-sm bg-primary font-bold">col-12 md:col-6 lg:col-3</div>
                </div>
                <div class="col-12 md:col-6 lg:col-3">
                    <div class="text-center p-3 border-round-sm bg-primary font-bold">col-12 md:col-6 lg:col-3</div>
                </div>
                <div class="col-12 md:col-6 lg:col-3">
                    <div class="text-center p-3 border-round-sm bg-primary font-bold">col-12 md:col-6 lg:col-3</div>
                </div>
            </div>
        </div>
    );

}
export default Login;