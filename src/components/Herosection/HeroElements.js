import styled from "styled-components";
import imageOne from "../../images/eka-webbi.jpg";

export const HeroContent = styled.div`
`;

export const HeroContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background: transparent;
    z-index: 1;
    gap: 2rem;
    padding-top: 6rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 24px;
        min-height: 320px;
        padding: 0;
    }

    @media screen and (min-width: 960px) {
        padding: 0
    }
`;

export const HeroBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    width: 100%;
    background: linear-gradient(to left, #B0C3B4 88%, transparent 12%);

    @media screen and (min-width: 960px) {
        max-height: 37rem;
    }
`;

export const BgPicture = styled.img`
    background-image: url(${imageOne});
    background-repeat: no-repeat;
    display: block;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center top;
    overflow: hidden;
    aspect-ratio: 1/1;
    margin-right: 2rem;
    margin-bottom: -4rem;
    box-shadow: 0 45px 65px rgba(0,0,0,0.50), 0 35px 22px rgba(0,0,0,0.16);
`;

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    flex-direction: column;
    z-index: 1;
    row-gap: 0.5rem;
    width: 100%;
    max-width: 22rem;
    padding: 0;
`;

export const HeroH1 = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: #88978C;
    margin-left: 1rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 960px) {
        font-size: 2.25rem;
    }
`;

export const HeroH2 = styled.div`
    font-size: 1.5;
    font-weight: bold;
    padding: 0;
    color: background: #585859;

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        padding: 0;
    }
`;

export const HeroH3 = styled.div`
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 400;
    padding: 0;
    color: #585859;
    width: fit-content;
    height: 20px;
    margin-bottom 1rem;

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
    }
`;