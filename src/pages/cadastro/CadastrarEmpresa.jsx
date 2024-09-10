import React, { useState } from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import "./CadastrarUsuario.css"
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const CadastrarEmpresa = () =>{

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroSenha, setErroSenha] = useState('');
    const [CNPJ, setCNPJ] = useState('');

    const navigate = useNavigate();

    const voltaLogin = () =>{
        navigate('../login')
    }

    const validarSenha = () => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!regex.test(senha)) {
            setErroSenha("A senha deve ter pelo menos 8 caracteres, incluindo letras, números e símbolos.");
            return false;
        }
        setErroSenha("");
        return true;
    }

    const FinalizarCadastro = () => {
        if (validarSenha()) {
            alert("Cadastro realizado com sucesso!");
            voltaLogin();
        } else {
            alert("Erro: Verifique as informações.");
        }
    }

    const validaCNPJ = (e) => {
        let value = e.target.value;
        value = formataCNPJ(value);
        setCNPJ(value);
    };

    const formataCNPJ = (value) => {
        value = value.replace(/\D/g, '');

        if (value.length <= 14) {
            value = value.replace(/(\d{2})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{4})(\d)/, '$1/$2');
            value = value.replace(/(\d{2})(\d{1,2})$/, '$1-$2');
        }

        return value;
    };

    return(
        <div className="form-container">
                <Card title="Cadastrar Empresa" className="form-card">
                    <div className="p-field">
                        <label htmlFor="fantasia">Fantasia</label><br />
                        <InputText type="text" className="p-inputtext-sm" placeholder="Fantasia" />
                    </div>
                    <div className="p-field">
                        <label htmlFor="e-mail">E-mail</label><br />
                        <InputText type="text" className="p-inputtext-sm" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="CNPJ">CNPJ</label><br />
                        <InputText type="text" className="p-inputtext-sm" placeholder="CNPJ" value={CNPJ} onChange={validaCNPJ} maxLength="14" />
                    </div>
                    <div className="p-field">
                        <label htmlFor="Telefone">Telefone</label><br />
                        <InputText type="text" className="p-inputtext-sm" placeholder="Telefone" />
                    </div>
                    <div className="p-password">
                        <label htmlFor="Senha">Senha</label><br />
                        <InputText id="senha" type="password" className="p-inputtext-sm" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} /><br />
                        {erroSenha && <small className="p-error">{erroSenha}</small>}
                        <br /><br /><br />
                    </div>
                    <Button label="Cancelar" link onClick={() => window.close('./Login')} />
                    <Button label="Finalizar Cadastro" icon="pi pi-check" iconPos="right" onClick={(FinalizarCadastro)} />
                </Card>
            </div>
    );


}
export default CadastrarEmpresa;