import React from 'react';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Security = () => {
    const [novaSenha, setNovaSenha] = React.useState('');
    const [confirmarNovaSenha, setConfirmarNovaSenha] = React.useState('');

    return (
        <div>
            <h3>Segurança</h3>
            <div className="p-field">
                <label htmlFor="novaSenha">Nova Senha:</label>
                <Password
                    id="novaSenha"
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                    feedback={false}
                    toggleMask
                    className="p-mb-3"
                />
                <label htmlFor="confirmarNovaSenha">Confirmar Senha:</label>
                <Password
                    id="Confirmar Nova Senha"
                    value={confirmarNovaSenha}
                    onChange={(e) => setConfirmarNovaSenha(e.target.value)}
                    feedback={false}
                    toggleMask
                    className="p-mb-3"
                />
            </div>
            <Button label="Alterar Senha" icon="pi pi-lock" className="p-button-danger" />
        </div>
    );
};

export default Security;