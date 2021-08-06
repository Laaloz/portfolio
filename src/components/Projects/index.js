import React from "react";
import ScrollToTop from "../ScrollToTop";
import VideoJS from "../Video";
import {
    ProjectsContainer,
    ProjectsWrapper,
    Famazon,
    Bg,
    Summon,
    H1,
} from "./ProjectsPageElements";

function Projects() {
    return (
        <>
            <ProjectsContainer>
                <ScrollToTop />
                <ProjectsWrapper>
                    <VideoJS />
                </ProjectsWrapper>

                <ProjectsWrapper>
                    <Bg>
                        <H1>Fake Amazon</H1>
                        <a href="https://fir-34a4c.firebaseapp.com/">
                            <Famazon />
                        </a>
                    </Bg>
                </ProjectsWrapper>

                <ProjectsWrapper>
                    <Bg>
                        <H1>Summon Research</H1>
                        <a href="https://www.summon.fi/">
                            <Summon />
                        </a>
                    </Bg>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    );
}

export default Projects;
