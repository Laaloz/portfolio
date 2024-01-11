import styled from "styled-components";

export const ProjectsContainer = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    background: #111111;
`;

export const ProjectsWrapper = styled.div`
    height: auto;
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    max-width: none;
    width: 100%;
    padding: 4rem 0;
    gap: 3rem;

    @media screen and (min-width: 960px) {
        width: 100%;
        padding: 6rem 0;
    }
`;

export const EntryContent = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    row-gap: 0.5rem;
`;

export const TopContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.5rem;
    gap: 2rem;

    @media screen and (min-width: 568px) {
        flex-direction: row;
        align-items: center;
    }

    @media screen and (min-width: 960px) {
        padding: 0 2.5rem;
    }
`;

export const Column = styled.div`
    position: relative
`;

export const ImgWrap = styled.div`
    display: flex;
    aspect-ratio: 2/3;
    overflow: hidden;
    border-radius: 3px;

    @media screen and (min-width: 568px) {
        aspect-ratio: 1/1;
    }

    @media screen and (min-width: 1200px) {
        aspect-ratio: 4/3;
    }
`;

export const Img = styled.img`
    display: flex;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease-in-out, filter 0.5s ease-in-out;

    @media screen and (min-width: 960px) {
        &:hover {
            transform: scale(1.05);
            filter: grayscale(1);
        }
    }
`;

export const Blur = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: #06091880;
    backdrop-filter: blur(4px);
    z-index: 10;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.5s ease;
`;

export const TextWrapper = styled.div`
    position: absolute;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    pointer-events: none;
    padding: 0 1.25rem 1.25rem 1.25rem;
    z-index: 99;
    gap: 0.5rem;
`;

export const H2 = styled.h2`
    color: #fffef9e6;
    font-weight: 400;
    // text-transform: uppercase;
`;

export const Url = styled.a`
    color: #fffef9e6;
    font-weight: 400;
    margin-top: 0.5rem;
`;

export const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const Category = styled.button`
    color: ${({ $lighttext }) => ($lighttext ? "#fffef9e6" : "#fffef9e6")};
    font-size: 0.75rem;
    border-radius: 40px;
    // background-color: #fff3;
    background-color: #4f4f4f33;
    text-transform: uppercase;
    padding-top: clamp(10px,0.833vw,16px);
    padding-bottom: clamp(10px,0.833vw,16px);
    padding-left: clamp(18px,1.389vw,100vw);
    padding-right: clamp(18px,1.389vw,100vw);
    backdrop-filter: blur(20px);
    border: none;

    @media screen and (min-width: 960px) {
        font-size: 0.8rem;
    }
`;

export const Description = styled.p`
    margin-bottom: 22px;
    font-size: 22px;
    line-height: 1.25;
    font-weight: 400;
    color: ${({ $lighttext }) => ($lighttext ? "#fffef9e6" : "#474747")};

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

export const Subtitle = styled.p`
    margin-bottom: 15px;
    font-size: 17px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#e67c11")};
`;

export const BtnWrap = styled.div`
    display: flex;
    width: fit-content;
    justify-content: center; 

    a {
        margin-top: 0;
    }
`;
