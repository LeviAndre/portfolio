import React from "react";

import photo from "./img/photo.png"

import "./style.scss"

import reactIcon from "../../../assets/icons/reactjs.svg"
import angularIcon from "../../../assets/icons/angular.svg"
import csharpIcon from "../../../assets/icons/csharp.svg"
import jsIcon from "../../../assets/icons/js.svg"
import tsIcon from "../../../assets/icons/typescript.svg"
import sqlIcon from "../../../assets/icons/sql.svg"

function About () {
    return (
        <>
            <section className="about" id="scroll-about">
                <div className="welcome">
                    <div className="col-xxl-8 col-12">
                        <h1 className="titulo text-dark">Bem vindo!</h1>
                        <p className="textoP text-dark">Este site é um portfolio criado com a intenção de arquivar os projetos feitos ao longo
                            da minha carreira como desenvolvedor, sendo também uma forma de me apresentar profissional e pessoalmente.</p>
                    </div>
                </div>

                <div className="anim2 about-session">
                    <div className="col-xxl-4 col d-flex justify-content-end">
                        <img src={photo} alt="" className="photo" />
                    </div>

                    <div className="about-text transparent-dark-bg">
                        <div className="about-text-box">
                            <h1 className="titulo mb-3">SOBRE MIM</h1>
                            <p className="textoP mb-3">
                                    Meu nome é André Levi, tenho 23 anos e estou me formando esse ano (2023) em Ciência da Computação. Desde pequeno eu vivo em contato com computadores
                                e sendo assim, minha escolha da carreira não poderia ser diferente. <br /><br /> 
                                
                                Tenho atuado profissionalmente como desenvolvedor ha pouco mais de um ano cuidando da manutenção e desenvolvimento de novas features para as plataformas 
                                das quais eu sou responsável, ambos em front-end e back-end. Estou empolgado com o futuro da minha carreira como desenvolvedor e ansioso para aprender e
                                aprimorar cada vez mais a qualidade do meu código.
                            </p>
                        </div>
                    </div>                    
                </div>

                <div className="skills-session d-flex flex-column justify-content-between">
                    <div className="titulo-div mb-3 transparent-dark-bg">
                        <h1 className="titulo text-center">Principais Habilidades</h1>

                        <div className="tresLinhas">
                            <div className="linha1"></div>
                            <div className="linha2"></div>
                            <div className="linha3"></div>
                        </div>

                    </div>

                    <div className="col-12 d-flex flex-column justify-content-between align-items-center">
                        <div className="col-xxl-9 col-xl-12 d-flex flex-wrap justify-content-center anim3">
                            <div className="textoP col-11 col-xl-5 transparent-dark-bg skill-box">
                                <p className="h-75"><b>React e Angular:</b> Tenho contato com ambas as tecnologias e experiencia em projetos com arquitetura a arquitetura do Angular, ou o gerenciamento de estado do React.</p>
                                <div>
                                    <img src={reactIcon} alt="" className="tech-icon"/>
                                    <img src={angularIcon} alt="" className="tech-icon"/>
                                </div>
                            </div>

                            <div className="textoP col-11 col-xl-5 transparent-dark-bg skill-box">
                                <p className="h-75"><b>.NET:</b> Tenho experiência com .NET até nas versões mais antigas (merito aos sistemas legado), e todo o meu conhecimento de back-end foi construido em cima dessa tecnologia. </p>
                                <div>
                                    <img src={csharpIcon} alt="" className="tech-icon"/>
                                </div>
                            </div>

                            <div className="textoP col-11 col-xl-5 transparent-dark-bg skill-box">
                                <p className="h-75"><b>Javascript e Typescript:</b> Tenho experiência de longa data com as principais ferramentas do desenvolvimento front-end. Utilizadas de acordo com a necessidade do projeto.</p>
                                <div>
                                    <img src={jsIcon} alt="" className="tech-icon"/>
                                    <img src={tsIcon} alt="" className="tech-icon"/>
                                </div>
                            </div>

                            <div className="textoP col-11 col-xl-5 transparent-dark-bg skill-box">
                                <p className="h-75"><b>SQL:</b> Tenho conhecimento a respeito da estrutura de um banco de dados relacional, e prática com a execução de queries quando necessário.</p>
                            
                                <div>
                                    <img src={sqlIcon} alt="" className="tech-icon"/>
                                </div>
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