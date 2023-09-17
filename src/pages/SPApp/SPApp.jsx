import React, { useLayoutEffect } from "react";

import Navbar from "../../components/Navbar/Navbar.jsx"

import Intro from "../sections/Intro/Intro.jsx"
import About from "../sections/About/About.jsx"
import Portfolio from "../sections/Portfolio/Portfolio.jsx"
import Experience from "../sections/Experience/Experience.jsx"
import Contact from "../sections/Contact/Contact.jsx"

import "../../style/index.scss";
import "../../style/break.scss";
import "../../style/reset.scss";

import "./style.scss"

function SPApp() {

    useLayoutEffect(() => {
    }, []);

    return (
        <>
            <Navbar />

            <div className="navbar-spacing">
                <Intro />
                <About />
                <Portfolio />
                <Experience />
                <Contact />
            </div>
        </>
    )
}

export default SPApp;