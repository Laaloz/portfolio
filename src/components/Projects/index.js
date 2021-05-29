import React from "react";
import VideoJS from "../Video";
import { ProjectsContainer, ProjectsWrapper } from "./ProjectsPageElements";

function Projects() {
    return (
        <>
            <ProjectsContainer>
                <ProjectsWrapper>
                    <VideoJS />
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    );
}

export default Projects;
