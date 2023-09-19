import React, { useState, useEffect } from "react";

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
    const [isMobile, setIsMobile] = useState();

    function handleWindowSizeChange() {
        if (window.outerWidth <= 768) {
            setIsMobile(true);
            return
        }
        setIsMobile(false);
    }

    useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
        <>
            <Navbar isMobile={isMobile} />

            <div className="navbar-spacing overflow-hidden">
                <Intro />
                <About />
                <Portfolio />
                <Experience isMobile={isMobile} />
                <Contact />
            </div>
        </>
    )
}

export default SPApp;