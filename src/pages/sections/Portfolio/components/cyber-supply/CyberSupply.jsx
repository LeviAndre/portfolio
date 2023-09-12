import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import {
    Navigation,
    Pagination,
    A11y,
    Autoplay,
  } from "swiper/modules";


import "swiper/css";
import "swiper/css/bundle";

import cybersupply2 from "../../img/cybersupply/cybersupply-2.jpg"

function CyberSupply() {
    return(
        <>
            <section className="portfolio">
                <div className="project-container">
                    <div className="carousel-container">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            loop
                            autoplay={{ delay: 8000 }}
                        >
                            <SwiperSlide>
                                <img src={cybersupply2} alt=""  className="w-100"/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={cybersupply2} alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={cybersupply2} alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={cybersupply2} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="date-division">
                        <div className="grey-line"></div>
                        <h1 className="title-grey">2022</h1>
                        <div className="grey-line"></div>
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