import React from "react";

import "./style.scss";

function Contact() {
    return(
        <>
            <section className="contact-section js-scroll">
                <div className="contact-title fade-out">
                    <h1 className="titulo">CONTATO</h1>

                    <div className="tresLinhas">
                        <div className="linha1"></div>
                        <div className="linha2"></div>
                        <div className="linha3"></div>
                    </div>

                </div>

                <div className="contact-container">
                    <div className="textoP">
                        <h1><a href="" className="text-light">Linkedin</a></h1>
                        <h1><a href="" className="text-light">Github</a></h1>
                        <h1><a href="" className="text-light">Instagram</a></h1>
                    </div>

                    <div className="textoP">
                        <h1><b>Email: </b><a href="" className="text-light">andrelevi767@gmail.com</a></h1>
                        <h1><b>Celular: </b><a href="" className="text-light">(11) 9 9484-8357</a></h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;