import styled from "styled-components";

export const ContactContainer = styled.div`
    height: 91vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #EEE7E1;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 100vh;
    }

    @media screen and (max-width: 480px) {
        height: 900px;
    }
`;

export const ContactWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0;
    }
}
`;

export const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const ContactH2 = styled.h2`
    font-size: 2.5rem;
    color: #111111;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ContactA = styled.a`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-size: 1rem;
    color: #111111;
`;

export const ContactP = styled.p`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-size: 1rem;
    color: #111111;
`;

export const SocialIcons = styled.div`
    display: flex;
    column-gap: 1rem;
`;

export const SosialMedia = styled.div`
    display: flex;
    cursor: pointer;
    font-size: 1.35rem;

    a {
        display: flex;
        color: #111111;
    }

    &:hover {
        opacity: 50%;
    }
`;