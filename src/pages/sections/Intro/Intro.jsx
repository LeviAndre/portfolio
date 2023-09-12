import React from "react";

import "./style.scss"

function Intro () {
    return (
        <>
            <section className="inicio">
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

            <div className="welcome">
                <div className="col-8">
                    <h1 className="titulo text-dark">Bem vindo!</h1>
                    <p className="textoP text-dark">Este site é um portfolio criado com a intenção de arquivar os projetos feitos ao longo
                        da minha carreira como desenvolvedor, sendo também uma forma de me apresentar profissional e pessoalmente.</p>
                </div>
            </div>
        </>
    )
}

export default Intro;