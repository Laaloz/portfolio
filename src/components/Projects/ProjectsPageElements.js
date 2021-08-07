import styled from "styled-components";
import fimage from "../../images/fimage.png";
import summon from "../../images/summon.png";

export const ProjectsContainer = styled.div`
    height: 100%;
    background: #f8f0e6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    min-height: 320px;
    position: relative;
    z-index: 1;
`;

export const ProjectsWrapper = styled.div`
    margin: 0.5em 0;
    padding: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const A = styled.div`
    font-size: 1.3em;
    padding: 0 0 0.8em 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const H1 = styled.div`
    font-size: 2em;
    font-weight: bold;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Bg = styled.div`
    width: 77.4vw;
    height: 45vw;
    overflow: hidden;
`;

export const Famazon = styled.div`
    background-image: url(${fimage});
    background-repeat: no-repeat;
    display: block;
    height: 100%;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: center top;
    z-index: -10;
    cursor: pointer;

    &:hover {
        opacity: 70%;
    }
`;

export const Summon = styled.div`
    background-image: url(${summon});
    background-repeat: no-repeat;
    display: block;
    height: 100%;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: center top;
    z-index: -10;
    cursor: pointer;

    &:hover {
        opacity: 70%;
    }
`;
