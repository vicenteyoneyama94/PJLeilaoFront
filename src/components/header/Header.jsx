import React from "react";
import './Header.css'
import BarMenu from "../barmenu/BarMenu";

const Header = () =>{

    return(
        <div className="header">
            <h1>Menu</h1>
            <BarMenu/>
        </div>
    )

}
export default Header;