import cybersupply1 from "./img/cybersupply/cybersupply-1.jpg"
import cybersupply2 from "./img/cybersupply/cybersupply-2.jpg"
import cybersupply3 from "./img/cybersupply/cybersupply-3.jpg"
import cybersupply4 from "./img/cybersupply/cybersupply-4.jpg"
import cybersupply5 from "./img/cybersupply/cybersupply-5.gif"

import bikcraft1 from "./img/bikcraft/bikcraft-1.png"
import bikcraft2 from "./img/bikcraft/bikcraft-2.png"
import bikcraft3 from "./img/bikcraft/bikcraft-3.png"

import psicologa1 from "./img/apresentacao-profissional/psicologa-1.jpg"
import psicologa2 from "./img/apresentacao-profissional/psicologa-2.jpg"
import psicologa3 from "./img/apresentacao-profissional/psicologa-3.jpg"

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
        description: "Cyber Supply é um projeto que teve origem como um trabalho de faculdade há três anos atrpás, e desde então passou por diversas refatorações desde então. A ideia é ser um marketplace para projetos de software precisando de apoio, e está atualmente tendo seu back-end refatorado em projeto separado.",
        fmrkIcons: [ reactIcon, jsIcon, htmlIcon, cssIcon ]
    },
    {
        year: 2021,
        images: [bikcraft1, bikcraft2, bikcraft3],
        title: "Bikcraft",
        description: "Bikcraft foi um projeto feito para acompanhar um curso de front-end e alinhar mais meus conhecimentos de HTML e CSS há algum tempo atrás. A ideia do projeto seria basicamente uma Landing Page de um site de venda de bicicletas.",
        fmrkIcons: [ htmlIcon, cssIcon ],
        githubUrl: "https://github.com/LeviAndre/bikcraft",
    },
    {
        images: [psicologa1, psicologa2, psicologa3],
        title: "Apresentação Profissional",
        description: "Este projeto de apresentação profissional foi desenvolvido em parceria com um colega e tinha o propósito de destacar o trabalho de uma profissional da área de psicologia. O site foi publicado na época, mas não está mais disponível online.",
        fmrkIcons: [ reactIcon, jsIcon, tsIcon, htmlIcon, cssIcon ],
        githubUrl: "https://github.com/Scaralu/beatriz-barrere",
    }
]