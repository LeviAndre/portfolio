import React from "react";

import "./style.scss"

import GreatTitle from "../../../components/great-title/GreatTitle";

import CyberSupply from "./components/cyber-supply/CyberSupply";

function Portfolio () {
    return (
        <>
            <GreatTitle titleText={"PORTFOLIO"}/>

            <CyberSupply /> 
        </>
    )
}

export default Portfolio;