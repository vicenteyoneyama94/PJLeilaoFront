import React from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import "./CadastrarUsuario.css"
import { Button } from 'primereact/button';


const CadastrarUsuario = () => {


    return (
        <>
            <div className="form-container">

                <Card title="Cadastrar Usuário" className="form-card">
                    <div className="p-field">
                        <label htmlFor="usuario">Nome</label><br/>
                        <InputText type="text" className="p-inputtext-sm" placeholder="Nome" />
                    </div>
                    <div className="p-field">
                    <label htmlFor="Sobrenome">Sobrenome</label><br/>
                        <InputText type="text" className="p-inputtext-sm" placeholder="Sobrenome" />
                    </div>
                    <div className="p-field">
                    <label htmlFor="e-mail">E-mail</label><br/>
                        <InputText type="text" className="p-inputtext-sm" placeholder="E-mail" />
                    </div>
                    <div className="p-field">
                    <label htmlFor="CPF">CPF</label><br/>
                        <InputText type="number" className="p-inputtext-sm" placeholder="CPF" />
                    </div>
                    <div className="p-field">
                    <label htmlfor="Telefone">Telefone</label><br/>
                        <InputText type="number" className="p-inputtext-sm" placeholder="Telefone" />
                    </div>
                    <div className="p-password">
                    <label htmlfor="Senha">Senha</label><br/>
                        <InputText id="senha" type="password" className="p-inputtext-sm" placeholder="Usuário" /><br/><br/><br/>
                    </div>
                    <Button label="Finalizar Cadastro" icon="pi pi-check" iconPos="right" onClick={() => window.close('./Login')}/>
                </Card>

            </div>
        </>
    )
}
export default CadastrarUsuario;