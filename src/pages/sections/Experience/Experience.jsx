import React from "react";
import GreatTitle from "../../../components/great-title/GreatTitle";
import ExpSlot from "./components/exp-slot/ExpSlot.jsx";

import { experiences } from "./experiences.jsx"

import "./style.scss";

function Experience({ isMobile }) {
    return (
        <>
            <section className="experience-section" id="scroll-experience">

                <GreatTitle titleText="Experiência" />

                {experiences.map((experience, index) => (
                    <div className="col-xxl-9 col-11 my-5">
                        <ExpSlot
                            isMobile={isMobile}
                            key={index}
                            imgSrc={experience.imgSrc}
                            corpText={experience.corpText}
                            jobText={experience.jobText}
                            startedAt={experience.startedAt}
                            endedAt={experience.endedAt}
                            description={experience.description}
                            icons={experience.icons}
                        />
                    </div>
                ))}

            </section>
        </>
    )
}

export default Experience;