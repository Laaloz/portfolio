import styled from "styled-components";

export const ProjectsContainer = styled.div`
    background: #80b9a5;

    @media screen and (max-width: 768px) {
        padding: 40px 0;
    }
`;

export const ProjectsWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px
    margin-right: auto;
    margin-left: auto;
    padding: 0 10px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(aut, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 0;
    padding: 0 15px;
    grid-area; col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    width: 100%;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 0;
`;

export const TopLine = styled.p`
    color: ${({ lightText }) => (lightText ? "#44769f" : "#44769f")};
    font-size: 22px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 25px;
`;

export const Heading = styled.h1`
    margin-bottom: 22px;
    font-size: 22px;
    line-height: 1.25;
    font-weight: 400;
    color: ${({ lightText }) => (lightText ? "#B9B9B9" : "#474747")};

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
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
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;

    lines {
        opacity: 0;
    }
`;
