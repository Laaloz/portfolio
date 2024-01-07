import styled from "styled-components";

export const ProjectsContainer = styled.div`
    height: 100%;
    background: #F3F3F3;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    position: relative;
    z-index: 1;
    padding-top: 100px;
    padding-bottom: 40px;
`;

export const ProjectsWrapper = styled.div`
    margin: 0.5em 0;
    padding: 1em 0;
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    height: 100%;

    @media screen and (min-width: 960px) {
        row-gap: 4rem;

        > :nth-child(even) {
            display: flex;
            flex-direction: row-reverse;
        }
    }
`;

export const Category = styled.button`
    background: transparent;
    font-size: 0.75rem;
    text-transform: uppercase;
    padding: 0.25rem 0.35rem;
    border: 1px solid #060709;
    color: #060709;

    @media screen and (min-width: 960px) {
        font-size: 0.8rem;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;

    @media screen and (min-width: 960px) {
        width: 50%;
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1rem;

    h1 {
        margin-top: 2rem;
        margin-bottom: 4rem;
    }

    a {
        margin-top: 1rem;
    }

    @media screen and (min-width: 960px) {
        width: 50%;
    }
`;

export const Title = styled.h3`
    display: flex;

    @media screen and (min-width: 960px) {
        margin-top: 0.75rem;
    }
`;

export const Textarea = styled.p`
    display: flex;
    line-height: 1.5;
    color: #585859;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 3rem;
    row-gap: 1.25rem;
    color: #060709;

    a {
        display: flex;
        color: #060709;

        &:hover {
            // opacity: 0.6;
            color: green;
        }
    }

    img {
        width: 100%;
        aspect-ratio: 4/3;
        object-fit: cover;
    }

    @media screen and (min-width: 960px) {
        flex-direction: row;
    }
`;