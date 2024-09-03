import React from "react";
import './Header.css'
import BarMenu from "../barmenu/BarMenu";
import { useTranslation } from "react-i18next";

const Header = () =>{

    const {t} = useTranslation();

    return(
        <>
        <BarMenu />
        <header className="header">
            
            <div className="header-content">
            <h1>{t('welcome')} {t('to')} {t('auction system')}</h1>
            </div>
        </header>
        </>
    )

}
export default Header;