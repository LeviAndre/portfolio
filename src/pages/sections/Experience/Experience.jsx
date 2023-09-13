import React from "react";
import GreatTitle from "../../../components/great-title/GreatTitle";

import "./style.scss";

import nfIcon from "./img/nf-icon.png"
import cetIocn from "./img/cet-icon.png"

function Experience() {
    return(
        <>
            <GreatTitle titleText={"Experiência"} />

            <section className="experience-section">
                <div className="exp-container">
                    <div>
                        <img src={nfIcon} className="exp-icon" alt="" />
                    </div>

                    <div className="mx-4">
                        <div className="d-flex justify-content-between">
                            <b className="textoP">Nova Futura Investimentos | Desenvolvedor Fullstack</b> <p className="textoP">2021 - Atual</p>
                        </div>


                        <p className="textoP">
                            Atuo na nova futura a cerca de dois anos como Desenvolvedor, prestando manutenção e criando novas features para as nossas plataformas em
                            diferentes tecnologias
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience;