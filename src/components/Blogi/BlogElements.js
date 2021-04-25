import styled from "styled-components";

export const BlogContainer = styled.div`
    background: #272727;
    max-width: 1600px;
    display: flex;
    justify-content: center;
`;

export const BlogWrapper = styled.div`
display: grid;
z-index: 1;
height: 100vh;
width: 100%;
max-width: 1100px
margin-right: auto;
margin-left: auto;
padding: 0 10vw;
justify-content: center;
`;

export const BlogContent = styled.div`
    max-height: 70vh;
    padding: 0.5rem 0.3rem;
    overflow-y: scroll;

    li {
        color: #449f6b;
        list-style: none;
    }

    span {
        color: #816484;
    }
`;

export const BlogH1 = styled.div`
    color: #44769f;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    padding-left: 0.3rem;
    margin: 3rem 0 0 0;
`;

export const BlogH2 = styled.div`
    color: #e67c11;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1.13px;
    margin: 0;
`;

export const BlogP = styled.div`
    color: #b9b9b9;
    letter-spacing: 1.13px;
    font-size: 1rem;
    padding-top: 1.3rem;
`;
