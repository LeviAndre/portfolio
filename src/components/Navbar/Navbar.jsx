import React, { useState, useEffect } from "react";
import "./style.scss";

import icon from "../../assets/icon.svg"

import linkedin from "../../assets/icons/linkedin.svg"
import github from "../../assets/icons/github.svg"
import instagram from "../../assets/icons/instagram.svg"

function Navbar() {
    const [activeSection, setActiveSection] = useState("");
  
    useEffect(() => {
      // Função para verificar a seção ativa com base na posição da janela de visualização
      function checkActiveSection() {
        const sections = ["scroll-intro", "scroll-about", "scroll-portfolio", "scroll-experience", "scroll-contact"];
        const windowY = window.scrollY;
  
        for (const section of sections) {
          const target = document.getElementById(section);
          if (target) {
            const elementRect = target.getBoundingClientRect();
            if (elementRect.top <= windowY && elementRect.bottom >= windowY) {
              setActiveSection(section);
            }
          }
        }
      }
  
      // Adicionar um ouvinte de evento de rolagem para verificar a seção ativa
      window.addEventListener("scroll", checkActiveSection);
  
      // Verificar a seção ativa inicialmente
      checkActiveSection();
  
      // Remover o ouvinte de evento de rolagem ao desmontar o componente
      return () => {
        window.removeEventListener("scroll", checkActiveSection);
      };
    }, []);

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
    )
}

export default Navbar;