import React from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";


const Home = () => {

    
    const { t, i18n } = useTranslation();

    

    return (
        <div >
            {/* <button onClick={() => changeLanguage('en')}>
                    English
                </button>
                <button onClick={() => changeLanguage('pt')}>
                    Português
                </button> */}
            <div className="refactor-home">
                <div>
                    <h1></h1>
                </div>
                

            </div>
            <div class="grid">
                <div class="col-12 md:col-6 lg:col-3">
                    <div class="">col-12 md:col-6 lg:col-3</div>
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