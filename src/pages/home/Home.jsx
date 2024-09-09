import React from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";
import BemVindo from "../../components/welcome/Welcome";
import Categorias from "../../components/categorias/Categorias";
import LeiloesHistorico from "../../components/history/History";

const Home = () => {
    const { i18n } = useTranslation();

    return (
        <div className="home-container">
            <BemVindo />
            <Categorias />
            <LeiloesHistorico />
        </div>
    );
};
export default Home;
        /*<div >
            { <button onClick={() => changeLanguage('en')}>
                    English
                </button>
                <button onClick={() => changeLanguage('pt')}>
                    Português
                </button> }
            <div className="refactor-home">
                <div>
                    <h1></h1>
                </div>*/
