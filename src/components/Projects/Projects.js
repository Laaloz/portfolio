import React from "react";
import { Button } from "../ButtonElements";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import {
    ProjectsContainer,
    ProjectsWrapper,
    TopContent,
    EntryContent,
    Categories,
    Column,
    Blur,
    TextWrapper,
    Url,
    Category,
    BtnWrap,
    ImgWrap,
    Img,
    H2,
} from "./ProjectsElements";

const Projects = ({
    id,
    title,
    topline,
    toplineTwo,
    toplineThree,
    toplineFour,
    project,
    projectText,
    projectTextTwo,
    projectTextThree,
    projectUrl,
    projectUrlTwo,
    projectUrlThree,
    projectUrlFour,
    projectTwo,
    projectThree,
    projectFour,
    $lighttext,
    headline,
    headlineTwo,
    headlineThree,
    headlineFour,
    buttonLabel,
    img,
    imgTwo,
    imgThree,
    imgFour,
    alt,
    primary,
    dark,
    dark2,
}) => {
    // Create an array that repeats your data items (3 times in this case)
    const repeatedData = [
        { image: img, project: project, projectText: projectText, projectUrl: projectUrl, topline: topline, headline: headline },
        { image: imgTwo, project: projectTwo, projectText: projectTextTwo, projectUrl: projectUrlTwo, topline: toplineTwo, headline: headlineTwo },
        { image: imgThree, project: projectThree, projectText: projectTextThree, projectUrl: projectUrlThree, topline: toplineThree, headline: headlineThree },
        { image: imgFour, project: projectFour, projectUrl: projectUrlFour, topline: toplineFour, headline: headlineFour },
    ];

    // Extend the data array by repeating the items
    const extendedData = [...repeatedData, ...repeatedData, ...repeatedData];

    return (
        <>
            <ProjectsContainer id={id}>
                <ProjectsWrapper className="container">
                    <TopContent>
                        <H2>{title}</H2>
                        <BtnWrap>
                            <Button
                                to="Projects"
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                            >
                                {buttonLabel}
                            </Button>
                        </BtnWrap>
                    </TopContent>

                    <Splide
                        extensions={{ AutoScroll }}
                        options={{
                            type: 'loop',
                            gap: '1.5rem',
                            drag: 'free',
                            pagination: false,
                            arrows: false,
                            cover: true,
                            breakpoints: {
                                768: {
                                    perPage: 1.5,
                                },
                                9999: {
                                    perPage: 2.5,
                                },
                            },
                            isNavigation: true,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            autoScroll: {
                                pauseOnHover: false,
                                pauseOnFocus: false,
                                speed: 0.5,
                            },
                        }}
                    >
                        {extendedData.map((data, index) => (
                            <SplideSlide key={index}>
                                <Url href={data.projectUrl} target="_blank">
                                    <Column className="column">
                                        <ImgWrap>
                                            <Img loading="lazy" src={data.image} alt={alt} />
                                        </ImgWrap>

                                        <Blur className="blur">
                                            <EntryContent>
                                                <H2>{data.project}</H2>
                                                {data.projectText}
                                            </EntryContent>
                                        </Blur>
                                        <TextWrapper>
                                            <Categories>
                                                <Category>{data.topline}</Category>
                                                <Category $lighttext={$lighttext.toString()}>
                                                    {data.headline}
                                                </Category>
                                            </Categories>
                                        </TextWrapper>
                                    </Column>
                                </Url>
                            </SplideSlide>
                        ))}
                    </Splide>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    );
};

export default Projects;
