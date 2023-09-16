import React from "react";

import "./style.scss"

import GreatTitle from "../../../components/great-title/GreatTitle";

import Project from "./components/project/Project";
import { projects } from "./projects.jsx";

function Portfolio () {
    return (
        <>
            <section id="scroll-portfolio">
                <GreatTitle titleText={"PORTFOLIO"}/>

                {projects && projects.map((project, index) => (
                    <Project 
                        key={index}
                        year={project.year}
                        images={project.images}
                        title={project.title}
                        description={project.description}
                        fmrkIcons={project.fmrkIcons}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </section>
        </>
    )
}

export default Portfolio;