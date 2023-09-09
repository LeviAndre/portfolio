import React, { useLayoutEffect } from "react";

import Navbar from "../../components/Navbar/Navbar.jsx"

import "../../css/index.css";
import "../../css/break.css";
import "../../css/reset.css";

function Intro() {

    useLayoutEffect(() => {
    }, []);

    function scrollAnim () {

        document.addEventListener('DOMContentLoaded', () => {
          var timeline = gsap.timeline()
    
            gsap.from(".anim", {
                duration: 1.7,
                opacity: 0,
                x: -200,
                stagger: { each: 0.2 },
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".anim"
                }
            })
    
            gsap.from(".anim1", {
                duration: 1,
                opacity: 0,
                x: -100,
                stagger: { each: 0.2 },
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".anim1"
                }
            })
    
            gsap.from(".subAnim1", {
                duration: 1,
                opacity: 0,
                x: -100,
                delay: 0.5,
                stagger: { each: 0.2 },
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".anim1"
                }
            })
      
            gsap.from(".anim2", {
                duration: 1,
                opacity: 0,
                y: 500,
                stagger: { each: 0.2 },
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".anim2"
                }
            })
      
            gsap.from(".anim3", {
                duration: 1,
                opacity: 0,
                y: 500,
                stagger: { each: 0.2 },
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".anim3"
                }
            })
      
            gsap.from(".anim4", {
              duration: 2,
              opacity: 0,
              delay: 0.5,
              x: -80,
              stagger: { each: 0.2 },
              ease: "expo",
              scrollTrigger: {
                  trigger: ".anim3"
              }
          })
      
          gsap.from(".anim5", {
            duration: 2,
            opacity: 0,
            delay: 1,
            x: 80,
            stagger: { each: 0.2 },
            ease: "expo",
            scrollTrigger: {
                trigger: ".anim3"
            }
          })
      
          gsap.from(".anim6", {
            duration: 2,
            opacity: 0,
            delay: 1.5,
            x: -80,
            stagger: { each: 0.2 },
            ease: "expo",
            scrollTrigger: {
                trigger: ".anim3"
            }
          })
          });
      
      }

    scrollAnim();

    return (
        <>
            <Navbar />

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
                <div className="welcomeText">
                    <h1 className="titulo_preto">Bem vindo!</h1>
                    <p className="textoM_preto">Este site é um portfolio feito com a intenção de arquivar os projetos feitos ao longo
                        da minha carreira como desenvolvedor, sendo também uma forma de me apresentar profissional e pessoalmente.</p>
                </div>
            </div>

            <section className="sobre">
                <section className="info">
                    <div className="imagem anim1"></div>
                    <div className="textBox subAnim1">
                        <h1 className="titulo">HACKEADO</h1>
                        <p className="textoP">hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda
                            hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda
                            hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda
                        </p>
                    </div>
                </section>


                <div className="tresLinhas">
                    <div className="linha1"></div>
                    <div className="linha2"></div>
                    <div className="linha3"></div>
                </div>

                <section className="info anim2">
                    <div className="textBox">
                        <h1 className="titulo">HACKEADO</h1>
                        <p className="textoP">hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda
                            hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda
                            hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda hackeado seu merda
                        </p>
                    </div>
                    <div className="imagem"></div>
                </section>
            </section>

            <section className="habilidades">
                <div className="tituloDiv">
                    <h1 className="titulo">Principais Habilidades</h1>

                    <div className="tresLinhas">
                        <div className="linha1"></div>
                        <div className="linha2"></div>
                        <div className="linha3"></div>
                    </div>

                </div>


                <div className="lista anim3">
                    <p className="textoP boxy anim4"><strong>qualidade 1:</strong> pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU </p>
                    <p className="textoP boxy anim5"><strong>qualidade 1:</strong> pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU </p>
                    <p className="textoP boxy anim6"><strong>qualidade 1:</strong> pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU pIUPIU </p>
                </div>
            </section>

            <section className="portfolio js-scroll">
                <div className="tituloBG">
                    <h1 className="titulo">Portfolio</h1>

                    <div className="tresLinhas">
                        <div className="linha1"></div>
                        <div className="linha2"></div>
                        <div className="linha3"></div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Intro;