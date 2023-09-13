import React from "react";

import "./style.scss"

import GreatTitle from "../../../components/great-title/GreatTitle";

import CyberSupply from "./components/cyber-supply/CyberSupply";
import Bikcraft from "./components/bikcraft/Bikcraft";

function Portfolio () {
    return (
        <>
            <GreatTitle titleText={"PORTFOLIO"}/>

            <CyberSupply /> 
            <Bikcraft />
        </>
    )
}

export default Portfolio;