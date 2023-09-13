import React from "react";
import GreatTitle from "../../../components/great-title/GreatTitle";
import ExpSlot from "./components/exp-slot/ExpSlot.jsx";

import { experiences } from "./experiences.jsx"

import "./style.scss";

function Experience() {
    return (
        <>
            <GreatTitle titleText="Experiência" />

            <section className="experience-section">
                {experiences.map((experience, index) => (
                    <ExpSlot
                        key={index}
                        imgSrc={experience.imgSrc}
                        corpText={experience.corpText}
                        jobText={experience.jobText}
                        startedAt={experience.startedAt}
                        endedAt={experience.endedAt}
                        description={experience.description}
                        icons={experience.icons}
                    />
                ))}

            </section>
        </>
    )
}

export default Experience;