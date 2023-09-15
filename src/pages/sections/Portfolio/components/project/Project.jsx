import React, { useEffect } from "react";

import useEmblaCarousel from 'embla-carousel-react'
function Project({ year, images, title, description}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    useEffect(() => {
      if (emblaApi) {
        console.log(emblaApi.slideNodes()) // Access API
      }
    }, [emblaApi])

    return (
        <section className="portfolio">
        <div className="project-container">
            <div className="date-division">
                <div className="grey-line"></div>
                <h1 className="title-grey">{year}</h1>
                <div className="grey-line"></div>
            </div>

            <div className="carousel-container">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {images && images.map((image, index) => (
                            <div key={index} className="embla__slide slide-container">
                                <img src={image} alt=""  className="w-100"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="d-flex flex-column col-6 px-5">
                <h1 className="titulo mb-3">{title}</h1>
                <p className="textoP">
                    {description}
                </p>
            </div>
        </div>
    </section>
    );
}

export default Project;