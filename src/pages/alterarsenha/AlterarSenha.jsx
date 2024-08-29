import React, { useState } from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "./AlterarSenha.css"

const AlterarSenha = () => {

    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');
    const [erro, setErro] = useState('');

    const validarSenha = () => {
        if (novaSenha !== confirmarNovaSenha) {
            setErro('As senhas não coincidem.');
        } else if (novaSenha.length < 8) {
            setErro('A senha deve ter pelo menos 8 caracteres.');
        } else if (!/[A-Z]/.test(novaSenha)) {
            setErro('A senha deve conter pelo menos uma letra maiúscula.');
        } else if (!/[0-9]/.test(novaSenha)) {
            setErro('A senha deve conter pelo menos um número.');
        } else if (!/[@$!%*?&]/.test(novaSenha)) {
            setErro('A senha deve conter pelo menos um caractere especial.');
        } else {
            setErro('');
        }
    };

    const validaNovasenha = (e) => {
        setNovaSenha(e.target.value);
        validarSenha();
    };

    const validaConfirmarSenha = (e) => {
        setConfirmarNovaSenha(e.target.value);
        validarSenha();
    };

    return (
        <>
            <div className="style-change-password">
                <Card title="Alterar senha">
                    <InputText type="text" placeholder="E-mail" /><br /><br />
                    <InputText type="text" placeholder="Digite o código recebido" /><br /><br />
                    <InputText type="text" placeholder="Digite a nova senha" value={novaSenha} onChange={validaNovasenha} /><br />
                    {erro && <p style={{ color: 'red' }}>{erro}</p>}<br />
                    <InputText type="text" placeholder="Confirme a senha" value={confirmarNovaSenha} onChange={validaConfirmarSenha} /><br />
                    {erro && <p style={{ color: 'red' }}>{erro}</p>}<br />

                    <Button label="Salvar" icon="pi pi-check" iconPos="right" onClick={() => window.close('./Login')} />
                    <Button label="Cancelar" link onClick={() => window.close('./Login')} />
                </Card>

            </div>
        </>
    )

}
export default AlterarSenha;