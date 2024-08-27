import React from "react";
import "./Home.css";
import { Button } from "primereact/button";
import { useTranslation } from "react-i18next";

const Home = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <div>

            <div className="menu-superior">

                <a href="#" onclick="alterarTema()" id="linkAlterarTema">Alterar Tema</a>
            </div>
            <div className="refactor-home">

                <h1>Inicio</h1>
                <h1>{t('welcome')} Página Inicial</h1>
                <button onClick={() => changeLanguage('en')}>
                    English
                </button>
                <button onClick={() => changeLanguage('pt')}>
                    Português
                </button>
                <div>
                    <Button label="Login" link onClick={() => window.open('./Login')} />
                </div>
            </div>
        </div>
    );

}
export default Home;