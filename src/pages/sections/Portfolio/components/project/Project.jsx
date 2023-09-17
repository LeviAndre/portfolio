import React, { useEffect } from "react";

import useEmblaCarousel from 'embla-carousel-react'

import githubIcon from "../../../../../assets/icons/github.svg"
import githubGreyIcon from "../../../../../assets/icons/github-grey.svg"

function Project({ year, images, title, description, githubUrl, fmrkIcons }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    useEffect(() => {
      if (emblaApi) {
        console.log(emblaApi.slideNodes()) // Access API
      }
    }, [emblaApi])

    return (
        <section>
            <div className="date-division">
                { year && (
                    <>
                        <div className="grey-line"></div>
                            <h1 className="title-grey">{year}</h1>
                        <div className="grey-line"></div>
                    </>
                )}
            </div>

            <div className="project-container">

                <div className="carousel-container col-xxl-6 col-12">
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            {images && images.map((image, index) => (
                                <div key={index} className="embla__slide slide-container">
                                    <img src={image} alt=""  className="w-100 h-100"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="d-flex flex-column justify-content-between col-xxl-6 col-12 textbox-padding">
                    <div>
                        <div className="d-flex align-items-start justify-content-between">
                            <h1 className="small-title mb-3">{title}</h1>
                            { githubUrl ? (
                                <a className="github-tag" href={githubUrl} target="_blank">
                                    <img src={githubIcon} alt="" disable  /> Projeto
                                </a>
                            ) : (
                                <a className="github-tag github-tag-disabled" target="_blank">
                                    <img src={githubGreyIcon} alt="" disable  /> Projeto
                                </a>
                            )}
                        </div>
                        <p className="textoP">
                            {description}
                        </p>
                    </div>

                    <div className="col-12 d-flex justify-content-end">
                        { fmrkIcons && fmrkIcons.map((icon, index) => (
                            <img key={index} src={icon} alt="" className="tech-icon" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;