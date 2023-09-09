import React from "react";
import "./style.scss";

import icon from "./img/icon.svg"

import linkedin from "./img/linkedin.svg"
import github from "./img/github.svg"
import instagram from "./img/instagram.svg"

function Navbar () {
    return (
        <header className="header">
            <div className="icon-container">
                <img src={icon} alt="Levi Code" className="icon" />
            </div>

            <div className="h-75 w-100">
                <ul className="headerOpcoes">
                    <li><button className="navbar-btn">INÍCIO</button></li>
                    <li><button className="navbar-btn">SOBRE</button></li>
                    <li><button className="navbar-btn">PORTFOLIO</button></li>
                    <li><button className="navbar-btn">CONTATO</button></li>
                </ul>
            </div>

            <div className="social-medias">
                <a href="https://www.linkedin.com/in/andré-levi-412321190/" target="_blank"><img src={linkedin} className="linkedin-icon" alt="Linkedin" /></a>
                <a href="https://github.com/LeviAndre" target="_blank"><img src={github} className="github-icon" alt="GitHub" /></a>
                <a href="https://www.instagram.com/levi767_/" target="_blank"><img src={instagram} className="instagram-icon" alt="Instagram" /></a>
            </div>
        </header>
    )
}

export default Navbar;