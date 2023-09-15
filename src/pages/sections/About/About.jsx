import React from "react";

import photo from "./img/photo.png"

import "./style.scss"

import reactIcon from "../../../assets/icons/reactjs.svg"
import angularIcon from "../../../assets/icons/angular.svg"
import csharpIcon from "../../../assets/icons/csharp.svg"
import jsIcon from "../../../assets/icons/js.svg"
import tsIcon from "../../../assets/icons/typescript.svg"

function About () {
    return (
        <>
            <section className="about" id="scroll-about">
                <div className="welcome">
                    <div className="col-8">
                        <h1 className="titulo text-dark">Bem vindo!</h1>
                        <p className="textoP text-dark">Este site é um portfolio criado com a intenção de arquivar os projetos feitos ao longo
                            da minha carreira como desenvolvedor, sendo também uma forma de me apresentar profissional e pessoalmente.</p>
                    </div>
                </div>

                <div className="anim2 about-session">
                    <div className="col-4 d-flex justify-content-end">
                        <img src={photo} alt="" className="photo" />
                    </div>

                    <div className="about-text transparent-dark-bg">
                        <div className="about-text-box">
                            <h1 className="titulo mb-3">SOBRE MIM</h1>
                            <p className="textoP">
                                    Meu nome é André Levi, tenho 23 anos e estou me formando esse ano (2023) em Ciência da Computação. Desde pequeno eu vivo em contato com computadores
                                e sendo assim, minha escolha da carreira não poderia ser diferente. <br /><br /> 
                                
                                Tenho atuado profissionalmente como desenvolvedor durante o total de um ano e meio e a evolução que tive durante esse período foi enorme. Cuidar da 
                                manutenção e desenvolvimento de novas features para as plataformas das quais eu sou responsável me ensinou muita coisa tanto em front-end quando em back-end,
                                na verdade, a minha experiência recente me fez descobrir um interesse em tecnologias de back-end.
                            </p>
                        </div>
                    </div>                    
                </div>

                <div className="skills-session d-flex flex-column justify-content-between">
                    <div className="titulo-div transparent-dark-bg">
                        <h1 className="titulo">Principais Habilidades</h1>

                        <div className="tresLinhas">
                            <div className="linha1"></div>
                            <div className="linha2"></div>
                            <div className="linha3"></div>
                        </div>

                    </div>

                    <div className="col-12 d-flex flex-column justify-content-between align-items-center">
                        <div className="col-9 d-flex flex-wrap justify-content-center anim3">
                            <div className="textoP col-5 transparent-dark-bg skill-box">
                                <p className="h-75"><b>React e Angular:</b> Meio atípico, mas onde eu trabalho eu utilizo duas tecnologias diferentes para front-end em projetos distintos. </p>
                                <div>
                                    <img src={reactIcon} alt="" className="tech-icon"/>
                                    <img src={angularIcon} alt="" className="tech-icon"/>
                                </div>
                            </div>

                            <div className="textoP col-5 transparent-dark-bg skill-box">
                                <p className="h-75"><b>.NET:</b> Desde versões antigas até as mais recentes, eu tenho criado meu conhecimento em backend baseado nas tecnologias de API do .NET Framework. </p>
                                <div>
                                    <img src={csharpIcon} alt="" className="tech-icon"/>
                                </div>
                            </div>

                            <div className="textoP col-5 transparent-dark-bg skill-box">
                                <p className="h-75"><b>Javascript e Typescript:</b> Visto que eu trabalho com Angular, não poderia ser diferente. Ainda indeciso, mas tenho experiencia em JS puro e o famoso JS tipado.</p>
                                <div>
                                    <img src={jsIcon} alt="" className="tech-icon"/>
                                    <img src={tsIcon} alt="" className="tech-icon"/>
                                </div>
                            </div>

                            <div className="textoP col-5 transparent-dark-bg skill-box">
                                <p className="h-75"><b>SQL:</b> Não é a minha especialidade, mas eu sei me virar executando queries quando eu preciso.</p>
                            </div>
                        </div>

                    </div>

                    <div className="fade-in"></div>
                </div>
            </section>
        </>
    )
}

export default About; 