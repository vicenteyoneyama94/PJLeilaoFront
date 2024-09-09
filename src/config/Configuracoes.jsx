import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { InputSwitch } from 'primereact/inputswitch';

const Configurações = () => {
    const [notifications, setNotifications] = React.useState(true);
    const [darkTheme, setDarkTheme] = React.useState(false);

    return (
        <Card title="Configurações" className="p-mb-3">
            <div className="p-field-checkbox">
                <label htmlFor="notifications" className="p-mr-2">Notificações:</label>
                <InputSwitch checked={notifications} onChange={(e) => setNotifications(e.value)} />
            </div>
            <div className="p-field-checkbox">
                <label htmlFor="darkTheme" className="p-mr-2">Tema Escuro:</label>
                <InputSwitch checked={darkTheme} onChange={(e) => setDarkTheme(e.value)} />
            </div>
        </Card>
    );
};

export default Configurações;