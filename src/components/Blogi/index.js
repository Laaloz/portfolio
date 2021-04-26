import React from "react";
import {
    BlogContainer,
    BlogWrapper,
    BlogH1,
    BlogContent,
    BlogH2,
    BlogP,
} from "./BlogElements";

const Blog = () => {
    return (
        <>
            <BlogContainer>
                <BlogWrapper>
                    <BlogH1>WhileJunior Blog</BlogH1>
                    <BlogContent>
                        <BlogH2>
                            import <span>React</span> from <span>'react'</span>
                        </BlogH2>
                        <BlogH2>
                            import <span>blog</span> from{" "}
                            <span>'..components/blog'</span>
                        </BlogH2>
                        <BlogP>
                            <li>Java Osa1:</li>
                            Aloitin opiskelemisen Helsingin yliopiston kaikille
                            avoimella java ohjelmointi kurssilla nolla
                            taidoilla. Kurssi antoi enemmän näkyvyyttä sille
                            millaista on kirjoittaa koodia ja innosti itseäni
                            vielä entisestään alasta. Kurssi suoritettiin 7
                            osassa (perus osat) jossa mentiin yksi aihe
                            kerrallaan ja jonka Välissä tuli tehtäviä joissa
                            pääsi ratkaisemaan ongelmia ja kirjoittamaan koodia.
                            Loppuun tehdään koe josta sai arvioinnin ja
                            opintopisteet.
                            <br></br>
                            <br></br>
                            <li>Osa2:</li>
                            Seuraavaksi ajattelin mennä suoraan syvään päähän ja
                            aloitan Full Stack open kurssin jossa aiheina
                            muunmuassa: Javascript, React, Node.js, REST ja
                            GraphQL rajapinnat, TypeScript, React Native,
                            testaus, NoSQL-tietokannat
                            <br></br>
                            <br></br>
                            <li>FullStack Osa0:</li>
                            Ensimmäisenä aiheena oli web-sovelluksen
                            toimintaperiaatteet jossa opittiin mitä tapahtuu
                            selaimen ja palvelimen välillä sekä mitä ovat:
                            <br></br>
                            HTTP GET: selain lähettää pyynnön palvelimelle ja
                            otsakkeet eli headereit kertovat vastauksen koon
                            jotta selain tietää miten käsittelee sen html
                            sivulle.
                            <br></br>
                            HTTP POST: selain tekee pyynnön palvelimelle ja
                            palvelin redirectaa, käytetään usein esim.
                            ladattaessa tiedostoa
                            <br></br>
                            SPA: Eli single page app, sovelluksilla ei ole
                            erillisiä palvelimen sille lähettämiä sivuja, vaan
                            se koostuu yhdestä palvelimen lähettämästä HTML
                            sivusta
                            <br></br>
                            DOM: Eli document object model on
                            ohjelmointirajapinta eli API joka mahdollistaa
                            selaimessa esitettävien web-sivuja vastaavien
                            elementtipuiden muokkaamisen ohjelmallisesti.
                            <br></br>
                            <br></br>
                            <li>FullStack Osa1:</li>
                            Tämä osio keskittyi reactin alkeisiin ja tehtäviin
                            jotka kirjoitettiin JavaScriptillä. Tehtävissä
                            luotiin simppeleitä react sovelluksia jossa
                            tutustuttiin reactin toimintaan ja komponentteihin
                            sekä tutustuttiin:
                            <br></br>
                            ES6:n nuolifunktioon, propseihi: eli tiedonsiirto
                            komponenttien välillä, debuggaamiseen, painikkeiden
                            käyttöön, jsx:ään, math.random funktioon ja moneen
                            muuhun reactiin ja javascriptiä sisältävään asiaan.
                        </BlogP>
                    </BlogContent>
                </BlogWrapper>
            </BlogContainer>
        </>
    );
};

export default Blog;
