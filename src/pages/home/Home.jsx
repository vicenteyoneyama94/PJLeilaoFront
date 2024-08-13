import React from "react";
import "./Home.css";
import { Button } from "primereact/button";

const Home = () => {

    return (
        <div>
            <div>
                <h1>Inicio</h1>
                <Button label="Login" link onClick={() => window.open('./Login')} />
            </div>
        </div>
    );

}
export default Home;