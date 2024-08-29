import React, { useState } from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import "./CadastrarUsuario.css"
import { Button } from 'primereact/button';


const CadastrarUsuario = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroSenha, setErroSenha] = useState('');
    const [CPF, setCPF] = useState('');

    const validarSenha = () => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!regex.test(senha)) {
            setErroSenha("A senha deve ter pelo menos 8 caracteres, incluindo letras e números.");
            return false;
        }
        setErroSenha("");
        return true;
    }

    const FinalizarCadastro = () => {
        if (validarSenha()) {
            alert("Cadastro realizado com sucesso!");
        } else {
            alert("Erro: A senha deve ter pelo menos 6 caracteres, incluindo letras e números.");
        }
    }

    const validaCPF = (e) => {
        let value = e.target.value;
        value = formataCPF(value);
        setCPF(value);
    };

    const formataCPF = (value) => {
        value = value.replace(/\D/g, '');
    
        if (value.length <= 11) {
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }
    
        return value;
    };

    return (
        <>
            <div className="form-container">

                <Card title="Cadastrar Usuário" className="form-card">
                    <div className="p-field">
                        <label htmlFor="usuario">Nome</label><br />
                        <InputText type="text" className="p-inputtext-sm" placeholder="Nome" />
                    </div>
                    <div className="p-field">
                        <label htmlFor="Sobrenome">Sobrenome</label><br />
                        <InputText type="text" className="p-inputtext-sm" placeholder="Sobrenome" />
                    </div>
                    <div className="p-field">
                        <label htmlFor="e-mail">E-mail</label><br />
                        <InputText type="text" className="p-inputtext-sm" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="CPF">CPF</label><br />
                        <InputText type="text" className="p-inputtext-sm" placeholder="CPF" value={CPF} onChange={validaCPF} maxLength="14" />
                    </div>
                    <div className="p-field">
                        <label htmlfor="Telefone">Telefone</label><br />
                        <InputText type="text" className="p-inputtext-sm" placeholder="Telefone"/>
                    </div>
                    <div className="p-password">
                        <label htmlfor="Senha">Senha</label><br />
                        <InputText id="senha" type="password" className="p-inputtext-sm" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        {erroSenha && <small className="p-error">{erroSenha}</small>} <br /><br /><br />
                    </div>
                    <Button label="Cancelar" link onClick={() => window.close('./Login')} />
                    <Button label="Finalizar Cadastro" icon="pi pi-check" iconPos="right" onClick={FinalizarCadastro} />
                </Card>

            </div>
        </>
    )
}
export default CadastrarUsuario;