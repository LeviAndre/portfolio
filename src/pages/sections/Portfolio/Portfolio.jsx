import React from "react";

import "./style.scss"

import GreatTitle from "../../../components/great-title/GreatTitle";

import CyberSupply from "./components/cyber-supply/CyberSupply";
import Bikcraft from "./components/bikcraft/Bikcraft";

function Portfolio () {
    return (
        <>
            <section id="scroll-portfolio">
                <GreatTitle titleText={"PORTFOLIO"}/>

                <CyberSupply /> 
                <Bikcraft />
            </section>
        </>
    )
}

export default Portfolio;