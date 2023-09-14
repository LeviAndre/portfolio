import React from "react";

import "./style.scss";

import linkedin from "../../../assets/icons/linkedin.svg"
import instagram from "../../../assets/icons/instagram.svg"
import github from "../../../assets/icons/github.svg"

function Contact() {
    return(
        <>
            <section className="contact-section js-scroll" id="scroll-contact">
                <div className="contact-title fade-out">
                    <p className="titulo">CONTATO</p>

                    <div className="tresLinhas">
                        <div className="linha1"></div>
                        <div className="linha2"></div>
                        <div className="linha3"></div>
                    </div>

                </div>

                <div className="contact-container">
                    <div className="textoP">
                        <p><a href="" className="text-light d-flex align-items-center"><img src={linkedin} className="linkedin-icon mx-2" alt="Instagram" />Linkedin</a></p>
                        <p><a href="" className="text-light d-flex align-items-center"><img src={github} className="github-icon mx-2" alt="Instagram" />Github</a></p>
                        <p><a href="" className="text-light d-flex align-items-center"><img src={instagram} className="instagram-icon mx-2" alt="Instagram" />Instagram</a></p>
                    </div>

                    <div className="textoP">
                        <p><b>Email: </b><a href="" className="text-light">andrelevi767@gmail.com</a></p>
                        <p><b>Celular: </b><a href="" className="text-light">(11) 9 9484-8357</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;