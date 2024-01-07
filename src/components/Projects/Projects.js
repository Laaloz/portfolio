import React from "react";
import { Button } from "../ButtonElements";
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
    lightText,
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

                    <Swiper
                        modules={[Autoplay, Navigation, Scrollbar]}
                        spaceBetween={25}
                        slidesPerView={1.25}
                        loop={true}
                        draggable={true}
                        autoplay={{
                            delay: 600,
                            pauseOnMouseEnter: true,
                        }}
                        speed={3000}
                        breakpoints={{
                            768: {
                                slidesPerView: 2.5,
                                spaceBetween: 20,
                                touchRatio: 0,
                            },
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        {extendedData.map((data, index) => (
                            <SwiperSlide key={index}>
                                <Url href={data.projectUrl} target="_blank">
                                    <Column className="column">
                                        <ImgWrap>
                                            <Img src={data.image} alt={alt} />
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
                                                <Category lightText={lightText}>
                                                    {data.headline}
                                                </Category>
                                            </Categories>
                                        </TextWrapper>
                                    </Column>
                                </Url>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    );
};

export default Projects;
