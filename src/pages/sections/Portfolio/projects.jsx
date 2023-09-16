import cybersupply1 from "./img/cybersupply/cybersupply-1.jpg"
import cybersupply2 from "./img/cybersupply/cybersupply-2.jpg"
import cybersupply3 from "./img/cybersupply/cybersupply-3.jpg"
import cybersupply4 from "./img/cybersupply/cybersupply-4.jpg"
import cybersupply5 from "./img/cybersupply/cybersupply-5.gif"

import bikcraft1 from "./img/bikcraft/bikcraft-1.png"
import bikcraft2 from "./img/bikcraft/bikcraft-2.png"
import bikcraft3 from "./img/bikcraft/bikcraft-3.png"

import beatrizbarrere1 from "./img/beatriz-barrere/Screenshot_1.png"
import beatrizbarrere2 from "./img/beatriz-barrere/Screenshot_2.png"
import beatrizbarrere3 from "./img/beatriz-barrere/Screenshot_3.png"

import reactIcon from "../../../assets/icons/reactjs.svg"
import htmlIcon from "../../../assets/icons/html5.svg"
import cssIcon from "../../../assets/icons/css.svg"
import angularIcon from "../../../assets/icons/angular.svg"
import bootstrapIcon from "../../../assets/icons/bootstrap5.svg"
import csharpIcon from "../../../assets/icons/csharp.svg"
import jsIcon from "../../../assets/icons/js.svg"
import tsIcon from "../../../assets/icons/typescript.svg"
// import styledIcon from "../../../assets/icons/STYLEDCOMPONENTS AQUI.svg" TODO: criar o icone do styled components e do SQL depois, nao esquece

export const projects = [
    {
        year: 2022,
        images: [cybersupply1, cybersupply2, cybersupply3, cybersupply4, cybersupply5],
        title: "Cyber Supply",
        description: "Cyber Supply é um projeto criado para um trabalho de faculdade há 3 anos, que passou por diversas refatorações desde então. A ideia é ser um marketplace para projetos de software precisando de apoio, e esta atualmente tendo seu back-end refeito em outro projeto.",
        fmrkIcons: [ reactIcon, jsIcon, htmlIcon, cssIcon ]
    },
    {
        year: 2021,
        images: [bikcraft1, bikcraft2, bikcraft3],
        title: "Bikcraft",
        description: "Bikcraft foi um projeto feito para acompanhar um curso de front-end e alinhar mais meus conhecimentos de HTML e CSS algum tempo atrás. A ideia do projeto seria basicamente uma Landing Page de um site de venda de bicicletas.",
        fmrkIcons: [ htmlIcon, cssIcon ],
        githubUrl: "https://github.com/LeviAndre/bikcraft",
    },
    {
        year: 2021,
        images: [beatrizbarrere1, beatrizbarrere2, beatrizbarrere3],
        title: "Beatriz Barrere",
        description: "Bikcraft foi um projeto feito para acompanhar um curso de front-end e alinhar mais meus conhecimentos de HTML e CSS algum tempo atrás. A ideia do projeto seria basicamente uma Landing Page de um site de venda de bicicletas.",
        fmrkIcons: [ reactIcon, jsIcon, tsIcon, htmlIcon, cssIcon ],
        githubUrl: "https://github.com/Scaralu/beatriz-barrere",
    }
]