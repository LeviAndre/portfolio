import React from "react";

import "./style.scss"

import GreatTitle from "../../../components/great-title/GreatTitle";

import Project from "./components/project/Project";
import { projects } from "./projects.jsx";

function Portfolio () {
    return (
        <>
            <section className="portfolio" id="scroll-portfolio">
                <GreatTitle titleText={"PORTFOLIO"}/>

                {projects && projects.map((project, index) => (
                    <div className="col-xxl-11 col-xl-9 col-11">
                        <Project 
                            key={index}
                            year={project.year}
                            images={project.images}
                            title={project.title}
                            description={project.description}
                            fmrkIcons={project.fmrkIcons}
                            githubUrl={project.githubUrl}
                        />
                    </div>
                ))}
            </section>
        </>
    )
}

export default Portfolio;