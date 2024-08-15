import React, { useState } from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import "./CadastrarUsuario.css"
import { Button } from 'primereact/button';


const CadastrarUsuario = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroSenha, setErroSenha] = useState('');

    const validarSenha = () => {
        // A senha deve ter pelo menos 8 caracteres, incluindo letras e números
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regex.test(senha)) {
            setErroSenha("A senha deve ter pelo menos 8 caracteres, incluindo letras e números.");
            return false;
        }
        setErroSenha("");
        return true;
    }

    const handleFinalizarCadastro = () => {
        if (validarSenha()) {
            // Se a senha for válida, prossiga com o cadastro
            alert("Cadastro realizado com sucesso!");
            // Exemplo: Aqui você pode chamar a API para cadastrar o usuário
            // window.close('./Login'); // Redirecionar após o sucesso do cadastro
        } else {
            alert("Erro: A senha deve ter pelo menos 8 caracteres, incluindo letras e números.");
        }
    }

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
                        <InputText type="number" className="p-inputtext-sm" placeholder="CPF" />
                    </div>
                    <div className="p-field">
                        <label htmlfor="Telefone">Telefone</label><br />
                        <InputText type="number" className="p-inputtext-sm" placeholder="Telefone" />
                    </div>
                    <div className="p-password">
                        <label htmlfor="Senha">Senha</label><br />
                        <InputText id="senha" type="password" className="p-inputtext-sm" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        {erroSenha && <small className="p-error">{erroSenha}</small>}<br /><br /><br />
                    </div>
                    <Button label="Cancelar" link onClick={() => window.close('./Login')} />
                    <Button label="Finalizar Cadastro" icon="pi pi-check" iconPos="right" onClick={handleFinalizarCadastro} />
                </Card>

            </div>
        </>
    )
}
export default CadastrarUsuario;