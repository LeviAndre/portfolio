import React from "react";

import "./style.scss"

function GreatTitle ({ titleText }) {
    return(
        <>
            <section className="portfolio js-scroll">
                <div className="tituloBG">
                    <h1 className="titulo">{titleText}</h1>

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

export default GreatTitle;