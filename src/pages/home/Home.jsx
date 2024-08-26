import React from "react";
import "./Home.css";
import { Button } from "primereact/button";
import BarMenu from "../../components/barmenu/BarMenu";

const Home = () => {

    return (
        <div>
            
            <div className="menu-superior">
                <a href="#" onclick="alterarTema()" id="linkAlterarTema">Alterar Tema</a>
            </div>
            <div className="refactor-home">

                <h1>Inicio</h1>
                <div>
                    <Button label="Login" link onClick={() => window.open('./Login')} />
                </div>
            </div>
        </div>
    );

}
export default Home;