import React from "react";
import ScrollToTop from "../ScrollToTop";
import procope from "../../images/dariusz-sankowski-unsplash.jpg";
import plan from "../../images/joel-muniz-unsplash.jpg";
import kuori from "../../images/display.jpg";
import kuvittajat from "../../images/boston-unsplash.jpg";
import lily from "../../images/lily.jpg";
import {
    ProjectsContainer,
    ProjectsWrapper,
    CardWrapper,
    ImageWrapper,
    Title,
    Textarea,
    TextContent,
    Category,
} from "./ProjectsPageElements";

import {
    Categories,
} from "./ProjectsElements";

function Projects() {
    return (
        <>
            <ProjectsContainer>
                <ScrollToTop />

                <ProjectsWrapper className="container">
                    <CardWrapper>
                        <ImageWrapper>
                            <img src={kuori} alt="Donation" />
                        </ImageWrapper>

                        <TextContent>
                            <Categories>
                                <Category>Verkkosivu</Category>
                                <Category>Into-digital</Category>
                            </Categories>

                            <Title>Kuori</Title>

                            <Textarea>
                                Verkkosivusto joka keskittyy digitaalisiin mainosnäyttöihin
                            </Textarea>

                            <a href="https://kuori.tech/" target="_blank" rel="noreferrer">
                                kuori.tech
                            </a>
                        </TextContent>
                    </CardWrapper>

                    <CardWrapper>
                        <ImageWrapper>
                            <img src={plan} alt="Donation" />
                        </ImageWrapper>

                        <TextContent>
                            <Categories>
                                <Category>Verkkokauppa</Category>
                                <Category>Into-digital</Category>
                            </Categories>

                            <Title>plan</Title>

                            <Textarea>
                                Pääsin toteuttamaan sivustolle verkkokauppa ratkaisun joka sisältää aineettomien lahjojen tarjoamisen.
                            </Textarea>

                            <a href="https://plan.fi/" target="_blank" rel="noreferrer">
                                plan.fi
                            </a>
                        </TextContent>
                    </CardWrapper>

                    <CardWrapper>
                        <ImageWrapper>
                            <img src={procope} alt="law" />
                        </ImageWrapper>

                        <TextContent>
                            <Categories>
                                <Category>Verkkosivu</Category>
                                <Category>Into-digital</Category>
                            </Categories>

                            <Title>Procope</Title>

                            <Textarea>
                                Lakialaan suunnattu verkkosivusto, jossa on luotu suodatusmahdollisuus henkilöiden ja osastojen helppoa etsimistä varten.
                            </Textarea>

                            <a href="https://procope.fi/" target="_blank" rel="noreferrer">
                                procope.fi
                            </a>
                        </TextContent>
                    </CardWrapper>

                    <CardWrapper>
                        <ImageWrapper>
                            <img src={kuvittajat} alt="Illustration" />
                        </ImageWrapper>

                        <TextContent>
                            <Categories>
                                <Category>Verkkosivu</Category>
                                <Category>Into-digital</Category>
                            </Categories>

                            <Title>Kuvittajat</Title>

                            <Textarea>
                                Portfoliosivusto kuvittajille, joka tarjoaa kuvittajille henkilökohtaisen hallintapaneelin heidän sisältöjensä hallintaan. Sivustolta löytyvät haku- ja suodatusominaisuudet, jotka mahdollistavat käyttäjille tiettyjen kuvittajien ja tapahtumien vaivattoman löytämisen. Lisäksi käyttäjät voivat valita projekteja sekä portfolioita suosikiksi, ja jakaa niitä eteenpäin linkkinä.
                            </Textarea>

                            <a href="https://kuvittajat.fi/" target="_blank" rel="noreferrer">
                                Kuvittajat.fi
                            </a>
                        </TextContent>
                    </CardWrapper>

                    <CardWrapper>
                        <ImageWrapper>
                            <img src={lily} alt="Keyboard lily" />
                        </ImageWrapper>

                        <TextContent>
                            <Categories>
                                <Category>Elektroniikka</Category>
                                <Category>DIY-Projekti</Category>
                            </Categories>

                            <Title>Lily58</Title>

                            <Textarea>
                                Näppäimistöni on täysin räätälöity. Aluksi hankin erikseen rungon, kolvattavat osat ja näppäinten komponentit, jonka jälkeen kokosin ne yhteen. Tämän jälkeen asensin kustomoidun ohjelmiston näppäimistön asetuksien hallitsemiseksi.
                            </Textarea>

                            <a href="https://github.com/Laaloz/Lilykeebs58-ice-cream" target="_blank" rel="noreferrer">
                                github
                            </a>
                        </TextContent>
                    </CardWrapper>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    );
}

export default Projects;
