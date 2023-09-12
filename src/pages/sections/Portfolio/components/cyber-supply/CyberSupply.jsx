import React, { useEffect } from "react";

import useEmblaCarousel from 'embla-carousel-react'

import "swiper/css";
import "swiper/css/bundle";

import cybersupply1 from "../../img/cybersupply/cybersupply-1.jpg"
import cybersupply2 from "../../img/cybersupply/cybersupply-2.jpg"
import cybersupply3 from "../../img/cybersupply/cybersupply-3.jpg"
import cybersupply4 from "../../img/cybersupply/cybersupply-4.jpg"
import cybersupply5 from "../../img/cybersupply/cybersupply-5.gif"

function CyberSupply() {
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
                        <h1 className="title-grey">2022</h1>
                        <div className="grey-line"></div>
                    </div>

                    <div className="carousel-container">
                        <div className="embla" ref={emblaRef}>
                            <div className="embla__container">
                                <div className="embla__slide">
                                    <img src={cybersupply2} alt=""  className="w-100"/>
                                </div>
                                <div className="embla__slide">
                                    <img src={cybersupply1} alt=""  className="w-100"/>
                                </div>
                                <div className="embla__slide">
                                    <img src={cybersupply3} alt=""  className="w-100"/>
                                </div>
                                <div className="embla__slide">
                                    <img src={cybersupply4} alt=""  className="w-100"/>
                                </div>
                                <div className="embla__slide">
                                    <img src={cybersupply5} alt=""  className="w-100"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <img src={cybersupply2} alt=""  className="col-6"/> */}

                    <div className="d-flex flex-column col-6 px-5">
                        <h1 className="titulo mb-3">CYBER SUPPLY</h1>

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

export default CyberSupply;