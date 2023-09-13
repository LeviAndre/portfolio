import React, { useEffect } from "react";

import useEmblaCarousel from 'embla-carousel-react'

import "swiper/css";
import "swiper/css/bundle";

import bikcraft1 from "../../img/bikcraft/bikcraft-1.png"
import bikcraft2 from "../../img/bikcraft/bikcraft-2.png"
import bikcraft3 from "../../img/bikcraft/bikcraft-3.png"

function Bikcraft() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    useEffect(() => {
      if (emblaApi) {
        console.log(emblaApi.slideNodes()) // Access API
      }
    }, [emblaApi])

    return(
        <>
            <section className="portfolio">
                <div className="project-container">
                    <div className="date-division">
                        <div className="grey-line"></div>
                        <h1 className="title-grey">2021</h1>
                        <div className="grey-line"></div>
                    </div>

                    <div className="carousel-container">
                        <div className="embla" ref={emblaRef}>
                            <div className="embla__container">
                                <div className="embla__slide slide-container">
                                    <img src={bikcraft1} alt=""  className="w-100"/>
                                </div>
                                <div className="embla__slide slide-container">
                                    <img src={bikcraft2} alt=""  className="w-100"/>
                                </div>
                                <div className="embla__slide slide-container">
                                    <img src={bikcraft3} alt=""  className="w-100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="d-flex flex-column col-6 px-5">
                        <h1 className="titulo mb-3">BIKCRAFT</h1>

                        <p className="textoP">
                            Cyber Supply é um projeto que já passou por cerca de três refatorações desde a sua criação. O motivo da sua criação a princípio foi um projeto
                            da faculdade, e a sua proposta era ser uma tipo alternativo de GitHub. Embora eu tenha desenvolvido ele junto com os meus colegas da universidade
                            na época, sempre que eu sinto evolução profissional e consigo um tempo livre, eu separo alguns dias para atualizar o projeto até onde eu conseguir
                            e o resultado é satisfatório. Tanto em Front-end quanto em Back-end, o CyberSupply é irreconhecível em relação a sua primeira versão de 2020.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bikcraft;