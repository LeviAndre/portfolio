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
                    <div className="textoP col-xxl-6 col-xl-6 col-12">
                        <p><a href="https://www.linkedin.com/in/andré-levi-412321190/" className="text-light d-flex align-items-center" target="_blank"><img src={linkedin} className="linkedin-icon mx-2" alt="Instagram" />Linkedin</a></p>
                        <p><a href="https://github.com/LeviAndre" className="text-light d-flex align-items-center" target="_blank"><img src={github} className="github-icon mx-2" alt="Instagram" />Github</a></p>
                        <p><a href="https://www.instagram.com/levi767_/" className="text-light d-flex align-items-center" target="_blank"><img src={instagram} className="instagram-icon mx-2" alt="Instagram" />Instagram</a></p>
                    </div>

                    <div className="textoP col-xxl-6 col-xl-6 col-12">
                        <p><b>Email: </b><a href="mailto:andrelevi767@gmail.com" className="text-light" target="_blank">andrelevi767@gmail.com</a></p>
                        <p><b>Celular: </b><a href="tel:+5511994848357" className="text-light" target="_blank">(11) 9 9484-8357</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;