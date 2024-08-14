import React from "react";
import "./Home.css";
import { Button } from "primereact/button";

const Home = () => {

    return (
        <div>
            <div className="menu-superior">
                <a href="#" onclick="alterarTema()" id="linkAlterarTema">Alterar Tema</a>
            </div>
            <div className="refactor-home">

                <h1>Inicio</h1>
                <Button label="Login" link onClick={() => window.open('./Login')} />
            </div>
        </div>
    );

}
export default Home;