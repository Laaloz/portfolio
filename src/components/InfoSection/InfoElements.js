import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#F3F3F3" : "#272727")};
    padding: 6rem 0 5rem 0;

    @media screen and (min-width: 960px) {
        background: linear-gradient(to left, #F3F3F3 88%, transparent 12%);
        padding: 0;
    }
`;

export const InfoWrapper = styled.div`
    height: auto;

    @media screen and (min-width: 960px) {
        height: 800px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    gap: 3rem;
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
   
    @media screen and (min-width: 960px) {
        grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

        width: 100%;
        gap: 5rem;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 0;
    grid-area; col1;
`;

export const Column2 = styled.div`
    width: 100%;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 0;

     @media screen and (min-width: 960px) {
        max-width: 35vw;
    }
`;

export const TopLine = styled.h3`
    color: ${({ lightText }) => (lightText ? "#44769f" : "#585859")};
    font-size: 1.25rem;
    line-height: 16px;
    font-weight: 700;
    line-height: 1.5;
    text-transform: uppercase;
    margin-bottom: 25px;
`;

export const Heading = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
    color: ${({ lightText }) => (lightText ? "#B9B9B9" : "#585859")};
`;

export const Subtitle = styled.p`
    max-width: 480px;
    margin-bottom: 15px;
    font-size: 17px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#e67c11")};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start; 
`;

export const ImgWrap = styled.div`
    display: flex;
    max-width: 555px;
    height: 100%;

    @media screen and (min-width: 960px) {
        max-width: none;
    }
`;

export const Img = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    max-height: 37rem;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);

    lines {
        opacity: 0;
    }
`;
