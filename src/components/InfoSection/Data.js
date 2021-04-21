import picOne from '../../images/temppeli.jpg'
import picTwo from '../../images/computer.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topline: 'Moi!',
    headline: 'Olen Laalo Jyväskylästä. Harrastan valokuvausta ja koodausta. Teoksiini käytän mm. Adobe XD, React, HTML, CSS, JavaScript, Lightroom sekä muita kirjastoja ja työkaluja. Ajanvietteeksi tykkään myös maastopyöräillä, frisbeegolfata ja vapaaotella.',
    buttonLabel: null,
    imgStart: true,
    img: `${picOne}`,
    alt: 'temppeli',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjTwo = {
    id: 'blog',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'Devaaja Blogi',
    description: '<body>',
    headline: 'Tänne tarkoitukseni on kirjoittaa blogia koodaukseen liittyvistä asioista ja omasta oppimisesta. Tulevaisuudessa toivottavasti myös työllistyn alalle.',
    descriptionTwo: '</body>',
    buttonLabel: 'Blogiin',
    imgStart: false,
    img: `${picTwo}`,
    alt: 'computer',
    dark: true,
    primary: true,
    darkText: false
}