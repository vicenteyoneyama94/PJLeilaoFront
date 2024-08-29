import React, { useState } from "react";
import "./Home.css";
import { Button } from "primereact/button";
import { useTranslation } from "react-i18next";

const Home = () => {

    const { t, i18n } = useTranslation();
    const [tema, setTema] = useState("saga-blue");

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    

    return (
        <div>

            <div className="menu-superior">
            </div>
            <div className="refactor-home">
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
export default Home;