import nfIcon from "./img/nf-icon.png"
import cetIocn from "./img/cet-icon.png"
import t4yIcon from "./img/tec4you.png"

import angularIcon from "../../../assets/icons/angular.svg"
import reactIcon from "../../../assets/icons/reactjs.svg"
import jsIcon from "../../../assets/icons/js.svg"
import tsIcon from "../../../assets/icons/typescript.svg"
import csharpIcon from "../../../assets/icons/csharp.svg"
import sassIcon from "../../../assets/icons/sass.svg"
import sqlIcon from "../../../assets/icons/sql.svg"
import nextIcon from "../../../assets/icons/next-js.svg"

export const experiences = [
    {
        imgSrc: t4yIcon,
        corpText: "Tec4you",
        jobText: "Desenvolvedor Fullstack",
        startedAt: "2023",
        description: "Auto na Tec4you há aproximadamente três meses como desenvolvedor, onde participo de projetos que vão desde ecommerces até intranets e plataformas de construção de sites com base em templates.",
        icons: [reactIcon, nextIcon, jsIcon, tsIcon, csharpIcon, sqlIcon]
    },
    {
        imgSrc: nfIcon,
        corpText: "Nova Futura Investimentos",
        jobText: "Desenvolvedor Fullstack",
        startedAt: "2021",
        endedAt: "2023",
        description: "Atuei na Nova Futura há aproximadamente dois anos como Desenvolvedor, responsável por realizar manutenções e desenvolver novas features para nossas plataformas, utilizando diversas tecnologias.",
        icons: [angularIcon, reactIcon, jsIcon, tsIcon, csharpIcon, sqlIcon]
    },
    {
        imgSrc: cetIocn,
        corpText: "Companhia de Engenharia de Tráfego",
        jobText: "Estagiario de Suporte Técnico",
        startedAt: "2019",
        endedAt: "2021",
        description: "Estagiei na C.E.T prestando suporte técnico para usuários internos da companhia.",
    }
]