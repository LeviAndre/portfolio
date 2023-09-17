import React from "react";

import "./style.scss"

import meLogo from "./img/titulo.png"

function Intro () {
    return (
        <>
            <section className="inicio" id="scroll-intro">
                <div className="container anim">
                    {/* <div className="AndreLevi col-12" alt="Andre Levi"></div> */}
                    <img src={meLogo} alt="" className="col-10 col-xl-7" />
                    <div className="tresLinhas">
                        <div className="linha1"></div>
                        <div className="linha2"></div>
                        <div className="linha3"></div>
                    </div>
                    <p className="textoM">Desenvolvedor Fullstack</p>
                </div>
            </section>
        </>
    )
}

export default Intro;