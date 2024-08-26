import React from "react";
import './Header.css'
import BarMenu from "../barmenu/BarMenu";

const Header = () =>{

    return(
        <>
        <BarMenu />
        <header className="header">
            
            <div className="header-content">
                
                <h1>Bem-vindo ao Sistema de Leilões</h1>
            </div>
        </header>
        </>
    )

}
export default Header;