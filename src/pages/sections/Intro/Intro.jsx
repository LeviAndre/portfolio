import React from "react";

import "./style.scss"

function Intro () {
    return (
        <>
            <section className="inicio" id="scroll-intro">
                <div className="container anim">
                    <div className="AndreLevi" alt="Andre Levi"></div>
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