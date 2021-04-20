import picOne from '../../images/temppeli.jpg'
import picTwo from '../../images/computer.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topline: 'Moi!',
    headline: 'Olen laalo jyväskylästä. Harrastan valokuvausta ja koodausta.  Teoksiini käytän mm.  Adobe xd, react, html, css, js , lightroom  sekä muita kirjastoja ja työkaluja. Ajan vietteeksi tykään myös maastopyöräillä, frisbeegolffata ja vapaaotella',
    buttonLabel: null,
    imgStart: false,
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
    headline: 'Tänne tarkoituskeni on kirjoittaa blogia koodaukseen liittyvistä asioista ja omasta oppimisesta sekä tulevaisuudessa toivottavasti myös työllistymään alalle.',
    descriptionTwo: '</body>',
    buttonLabel: 'Blogiin',
    imgStart: false,
    img: `${picTwo}`,
    alt: 'computer',
    dark: true,
    primary: true,
    darkText: false
}