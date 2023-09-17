import React, { useState, useEffect } from "react";
import "./style.scss";

import icon from "../../assets/icon.svg"

import linkedin from "../../assets/icons/linkedin.svg"
import github from "../../assets/icons/github.svg"
import instagram from "../../assets/icons/instagram.svg"

import { slide as Menu } from 'react-burger-menu';

const Navbar = ({ isMobile }) => {
    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    function scrollSections(section) {
        const target = document.getElementById(section);

        if (target) {
            const elementRect = target.getBoundingClientRect();
            const absoluteY = elementRect.top + window.scrollY;

            window.scrollTo({
                top: absoluteY,
                behavior: 'smooth'
            });
        }
    }

    return (
        <>
            {/* DESKTOP NAVBAR */}
            {isMobile == false && (
                <header className="header desktop">
                    <div className="icon-container">
                        <img src={icon} alt="Levi Code" className="icon" />
                    </div>

                    <div className="h-75 w-100">
                        <ul className="headerOpcoes">
                            <li>
                                <button
                                    onClick={() => scrollSections("scroll-intro")}
                                    className={`navbar-btn ${activeSection === "scroll-intro" ? "active" : ""}`}
                                >
                                    INÍCIO
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollSections("scroll-about")}
                                    className={`navbar-btn ${activeSection === "scroll-about" ? "active" : ""}`}
                                >
                                    SOBRE
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollSections("scroll-portfolio")}
                                    className={`navbar-btn ${activeSection === "scroll-portfolio" ? "active" : ""}`}
                                >
                                    PORTFÓLIO
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollSections("scroll-experience")}
                                    className={`navbar-btn ${activeSection === "scroll-experience" ? "active" : ""}`}
                                >
                                    EXPERIÊNCIA
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollSections("scroll-contact")}
                                    className={`navbar-btn ${activeSection === "scroll-contact" ? "active" : ""}`}
                                >
                                    CONTATO
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="social-medias">
                        <a href="https://www.linkedin.com/in/andré-levi-412321190/" target="_blank"><img src={linkedin} className="linkedin-icon" alt="Linkedin" /></a>
                        <a href="https://github.com/LeviAndre" target="_blank"><img src={github} className="github-icon" alt="GitHub" /></a>
                        <a href="https://www.instagram.com/levi767_/" target="_blank"><img src={instagram} className="instagram-icon" alt="Instagram" /></a>
                    </div>
                </header>
            )}

            {/* MOBILE NAVBAR */}
            {isMobile == true && (
                <div className="mobile">
                    <Menu isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)}>
                        <div>
                            <header className="header">
                                <div className="icon-container">
                                    <img src={icon} alt="Levi Code" className="icon" />
                                </div>

                                <div className="h-75 w-100">
                                    <ul className="headerOpcoes">
                                        <li>
                                            <button
                                                onClick={() => scrollSections("scroll-intro")}
                                                className={`navbar-btn ${activeSection === "scroll-intro" ? "active" : ""}`}
                                            >
                                                INÍCIO
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => scrollSections("scroll-about")}
                                                className={`navbar-btn ${activeSection === "scroll-about" ? "active" : ""}`}
                                            >
                                                SOBRE
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => scrollSections("scroll-portfolio")}
                                                className={`navbar-btn ${activeSection === "scroll-portfolio" ? "active" : ""}`}
                                            >
                                                PORTFÓLIO
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => scrollSections("scroll-experience")}
                                                className={`navbar-btn ${activeSection === "scroll-experience" ? "active" : ""}`}
                                            >
                                                EXPERIÊNCIA
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => scrollSections("scroll-contact")}
                                                className={`navbar-btn ${activeSection === "scroll-contact" ? "active" : ""}`}
                                            >
                                                CONTATO
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="social-medias">
                                    <a href="https://www.linkedin.com/in/andré-levi-412321190/" target="_blank"><img src={linkedin} className="linkedin-icon" alt="Linkedin" /></a>
                                    <a href="https://github.com/LeviAndre" target="_blank"><img src={github} className="github-icon" alt="GitHub" /></a>
                                    <a href="https://www.instagram.com/levi767_/" target="_blank"><img src={instagram} className="instagram-icon" alt="Instagram" /></a>
                                </div>
                            </header>
                        </div>

                    </Menu>
                </div>
            )}

        </>
    )
}

export default Navbar;