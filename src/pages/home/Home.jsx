import React, { useState } from "react";
import "./Home.css";
import { Button } from "primereact/button";
import { useTranslation } from "react-i18next";
import Logout from "../../components/logout/Logout";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    
    const logar = () =>{
        navigate('./Login');
    }

    

    return (
        <div>

            <div className="menu-superior">
            </div>
            <div className="refactor-home">
                <div>
                    <button onClick={() => changeLanguage('en')}>
                    English
                </button>
                <button onClick={() => changeLanguage('pt')}>
                    Português
                </button>
                </div>
                <h1>{t('welcome')} Página Inicial</h1>
                
                <div>
                    <Button label="Entrar" link onClick={(logar)} />
                </div>
                <Logout/>

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